import { createSSRApp, h, type Component } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

// ─── load all component modules (data-driven scan) ──────────────────────────
// Walk packages/vue/<category>/<representation>/index — no hardcoded list,
// so a new asset folder shows up here automatically. Mirrors test-render.ts.

type IconModule = Record<string, Component>;

const PKG_DIR = join(__dirname, '..', 'packages', 'vue');
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

const allIcons: Array<{ name: string; component: Component; group: string }> = [];
for (const { group, dir } of scanGroups()) {
  const mod = require(join(dir, 'index')) as IconModule;
  for (const [name, component] of Object.entries(mod)) {
    allIcons.push({ name, component, group });
  }
}

// renderToString is async; wrap the whole suite.
type Props = Record<string, unknown>;
const render = (component: Component, props?: Props) =>
  renderToString(createSSRApp(component, props));

// render two instances of the same component in one tree (useId uniqueness).
const renderPair = (component: Component, props?: Props) =>
  renderToString(createSSRApp({ render: () => h('div', [h(component, props), h(component, props)]) }));

async function main() {
  let passed = 0;
  let failed = 0;
  const failures: string[] = [];

  // ── 1. Default render ──────────────────────────────────────────────────────
  for (const { name, component, group } of allIcons) {
    try {
      const html = await render(component, { size: 24 });
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

  // ── 2. Custom strokeWidth ──────────────────────────────────────────────────
  for (const { name, component, group } of allIcons) {
    try {
      const html = await render(component, { strokeWidth: 0.5, size: 24 });
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

  // ── 3. Custom stroke (native attr passthrough overrides the default) ────────
  for (const { name, component, group } of allIcons) {
    try {
      const html = await render(component, { stroke: '#3b82f6', size: 24 });
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
      const html = await render(component, { 'aria-label': 'Test country', size: 24 });
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

  // ── 5. useId — aria title ids unique across two instances in one tree ───────
  // Spot-check first 5 (pattern identical across all — useId guarantees uniqueness).
  for (const { name, component, group } of allIcons.slice(0, 5)) {
    const html = await renderPair(component, { 'aria-label': 'Country', size: 24 });
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    if (ids.length !== new Set(ids).size) {
      failures.push(`${group}/${name}: duplicate aria-title ids when rendered twice`);
      failed++;
    } else {
      passed++;
    }
  }

  console.log(`\nVue validation results:`);
  console.log(`  ✅  ${passed} checks passed`);
  if (failed > 0) {
    console.log(`  ❌  ${failed} checks failed`);
    failures.forEach((f) => console.log(`      ${f}`));
    process.exit(1);
  } else {
    console.log(`  No failures.`);
  }
}

main();
