import { createElement } from 'react';
import type { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

// ─── load all component modules (data-driven scan) ──────────────────────────
// Walk packages/react/<category>/<representation>/index — no hardcoded list,
// so a new asset folder shows up here automatically.

type IconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  'aria-label'?: string;
  role?: string;
};
type IconComponent = (props: IconProps) => ReactElement;
type IconModule = Record<string, IconComponent>;

const PKG_DIR = join(__dirname, '..', 'packages', 'react');
const SKIP_DIRS = new Set(['dist', 'node_modules']);

function scanGroups(): Array<{ group: string; dir: string }> {
  const groups: Array<{ group: string; dir: string }> = [];
  for (const category of readdirSync(PKG_DIR)) {
    const catDir = join(PKG_DIR, category);
    if (SKIP_DIRS.has(category) || !statSync(catDir).isDirectory()) continue;
    for (const representation of readdirSync(catDir)) {
      const repDir = join(catDir, representation);
      if (!statSync(repDir).isDirectory()) continue;
      if (!existsSync(join(repDir, 'index.ts'))) continue;
      groups.push({ group: `${category}/${representation}`, dir: repDir });
    }
  }
  return groups;
}

const allIcons: Array<{ name: string; component: IconComponent; group: string }> = [];
for (const { group, dir } of scanGroups()) {
  // require works in CJS mode (package.json "type": "commonjs")
  const mod = require(join(dir, 'index')) as IconModule;
  for (const [name, component] of Object.entries(mod)) {
    allIcons.push({ name, component, group });
  }
}

// ─── automated validation ────────────────────────────────────────────────────

let passed = 0;
let failed = 0;
const failures: string[] = [];

// ── 1. Default render ────────────────────────────────────────────────────────
// Expects: strokeWidth=1, fill=none, stroke=currentColor, viewBox, aria-hidden="true"
for (const { name, component, group } of allIcons) {
  try {
    const html = renderToStaticMarkup(createElement(component, { size: 24 }));

    if (!html.includes('stroke-width="1"')) {
      failures.push(`${group}/${name}: default strokeWidth should be 1`);
      failed++;
      continue;
    }
    if (!html.includes('fill="none"')) {
      failures.push(`${group}/${name}: default fill should be "none"`);
      failed++;
      continue;
    }
    if (!html.includes('stroke="currentColor"')) {
      failures.push(`${group}/${name}: default stroke should be "currentColor"`);
      failed++;
      continue;
    }
    if (!html.includes('viewBox="0 0 24 24"')) {
      failures.push(`${group}/${name}: missing viewBox`);
      failed++;
      continue;
    }
    if (!html.includes('aria-hidden="true"')) {
      failures.push(`${group}/${name}: decorative icon should carry aria-hidden="true"`);
      failed++;
      continue;
    }
    if (html.includes('stroke="black"') || html.includes('fill="#')) {
      failures.push(`${group}/${name}: hardcoded color found`);
      failed++;
      continue;
    }
    passed++;
  } catch (err) {
    failures.push(`${group}/${name}: render threw — ${(err as Error).message}`);
    failed++;
  }
}

// ── 2. Custom strokeWidth ────────────────────────────────────────────────────
for (const { name, component, group } of allIcons) {
  try {
    const html = renderToStaticMarkup(createElement(component, { strokeWidth: 0.5, size: 24 }));
    if (!html.includes('stroke-width="0.5"')) {
      failures.push(`${group}/${name} [strokeWidth=0.5]: not reflected in output`);
      failed++;
      continue;
    }
    passed++;
  } catch (err) {
    failures.push(`${group}/${name} [strokeWidth]: render threw — ${(err as Error).message}`);
    failed++;
  }
}

// ── 3. Custom stroke (native SVGProps passthrough overrides the default) ──────
for (const { name, component, group } of allIcons) {
  try {
    const html = renderToStaticMarkup(createElement(component, { stroke: '#3b82f6', size: 24 }));
    if (!html.includes('stroke="#3b82f6"')) {
      failures.push(`${group}/${name} [stroke]: custom stroke not reflected as stroke attribute`);
      failed++;
      continue;
    }
    passed++;
  } catch (err) {
    failures.push(`${group}/${name} [stroke]: render threw — ${(err as Error).message}`);
    failed++;
  }
}

// ── 4. aria-label → role="img" + <title> + aria-labelledby, no aria-hidden ──
for (const { name, component, group } of allIcons) {
  try {
    const html = renderToStaticMarkup(
      createElement(component, { 'aria-label': 'Test country', size: 24 }),
    );

    if (!html.includes('role="img"')) {
      failures.push(`${group}/${name} [aria]: missing role="img"`);
      failed++;
      continue;
    }
    if (!html.includes('aria-labelledby=')) {
      failures.push(`${group}/${name} [aria]: missing aria-labelledby`);
      failed++;
      continue;
    }
    if (!html.includes('<title') || !html.includes('>Test country</title>')) {
      failures.push(`${group}/${name} [aria]: missing <title>Test country</title>`);
      failed++;
      continue;
    }
    if (html.includes('aria-hidden')) {
      failures.push(`${group}/${name} [aria]: aria-hidden must be absent when aria-label is set`);
      failed++;
      continue;
    }
    passed++;
  } catch (err) {
    failures.push(`${group}/${name} [aria]: render threw — ${(err as Error).message}`);
    failed++;
  }
}

// ── 5. useId — clip-path ids must be unique across two instances in the same tree ──
const defsIcons = allIcons.filter(({ component }) => {
  const html = renderToStaticMarkup(createElement(component, { size: 24 }));
  return html.includes('<defs>');
});

for (const { name, component, group } of defsIcons) {
  const html = renderToStaticMarkup(
    createElement(
      'div',
      null,
      createElement(component, { size: 24 }),
      createElement(component, { size: 24 }),
    ),
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  const unique = new Set(ids);
  if (ids.length !== unique.size) {
    failures.push(
      `${group}/${name}: duplicate clip-path ids when rendered twice: [${ids.join(', ')}]`,
    );
    failed++;
  } else {
    passed++;
  }
}

// ── 6. aria title ids must also be unique across two instances ───────────────
// Spot-check first 5 icons (pattern is identical across all — useId guarantees uniqueness)
for (const { name, component, group } of allIcons.slice(0, 5)) {
  const html = renderToStaticMarkup(
    createElement(
      'div',
      null,
      createElement(component, { 'aria-label': 'Country', size: 24 }),
      createElement(component, { 'aria-label': 'Country', size: 24 }),
    ),
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  const unique = new Set(ids);
  if (ids.length !== unique.size) {
    failures.push(`${group}/${name}: duplicate aria-title ids when rendered twice`);
    failed++;
  } else {
    passed++;
  }
}

// ─── print validation results ────────────────────────────────────────────────

console.log(`\nValidation results:`);
console.log(`  ✅  ${passed} checks passed`);
if (failed > 0) {
  console.log(`  ❌  ${failed} checks failed`);
  failures.forEach((f) => console.log(`      ${f}`));
} else {
  console.log(`  No failures.`);
}

// ─── generate visual HTML preview ───────────────────────────────────────────

// representative sample: first 30 icons + every non-default-representation icon
// (e.g. eez), so each representation is visually covered.
const sample = [...allIcons.slice(0, 30), ...allIcons.filter((i) => !i.group.endsWith('/base'))];

const PREVIEW_COLS: Array<{ label: string; props: IconProps }> = [
  { label: 'thin (0.5)', props: { strokeWidth: 0.5 } },
  { label: 'regular (1)', props: { strokeWidth: 1 } },
  { label: 'thick (2)', props: { strokeWidth: 2 } },
  { label: 'filled', props: { fill: 'currentColor', strokeWidth: 0 } },
  { label: 'stroke', props: { stroke: '#3b82f6' } },
];

function renderRow(icon: (typeof allIcons)[0]): string {
  return PREVIEW_COLS.map((col) => {
    const html = renderToStaticMarkup(createElement(icon.component, { ...col.props, size: 48 }));
    return `<td style="text-align:center;padding:8px 16px">
      ${html}
      <div style="font-size:10px;color:#888;margin-top:4px">${col.label}</div>
    </td>`;
  }).join('');
}

const rows = sample
  .map(
    (icon) => `
  <tr>
    <td style="padding:8px 16px;font-family:monospace;font-size:12px;white-space:nowrap;color:#555">
      ${icon.group}/${icon.name}
    </td>
    ${renderRow(icon)}
  </tr>`,
  )
  .join('');

const colHeaders = PREVIEW_COLS.map((c) => `<th>${c.label}</th>`).join('');
const colHeadersDark = PREVIEW_COLS.map((c) => `<th style="color:#666">${c.label}</th>`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>geoicons — render QA</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f5f5f5; padding: 32px; }
    h1   { font-size: 18px; font-weight: 600; margin-bottom: 4px; }
    p    { font-size: 13px; color: #666; margin-bottom: 24px; }
    table { border-collapse: collapse; background: #fff; border-radius: 8px;
            box-shadow: 0 1px 4px rgba(0,0,0,.08); }
    th { padding: 10px 16px; font-size: 11px; text-transform: uppercase;
         letter-spacing: .06em; color: #999; border-bottom: 1px solid #eee; }
    tr:not(:last-child) td { border-bottom: 1px solid #f0f0f0; }
    svg { color: #1a1a1a; display:block; margin: 0 auto; }
    .dark  { background: #111; }
    .dark svg { color: #fff; }
  </style>
</head>
<body>
  <h1>geoicons — React component render QA</h1>
  <p>
    Validation: <strong>${passed} passed</strong>${failed > 0 ? `, <strong style="color:red">${failed} failed</strong>` : ', 0 failed'} &nbsp;|&nbsp;
    ${allIcons.length} total components &nbsp;|&nbsp;
    ${defsIcons.length} with clip-path defs
  </p>

  <h2 style="font-size:14px;margin-bottom:8px">Light background</h2>
  <table>
    <thead>
      <tr>
        <th style="text-align:left">Component</th>
        ${colHeaders}
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <h2 style="font-size:14px;margin:24px 0 8px">Dark background (same components)</h2>
  <table class="dark">
    <thead>
      <tr>
        <th style="text-align:left;color:#666">Component</th>
        ${colHeadersDark}
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;

const outPath = join(process.cwd(), 'qa-preview.html');
writeFileSync(outPath, html);
console.log(`\nVisual preview written → qa-preview.html`);
if (failed > 0) process.exit(1);
