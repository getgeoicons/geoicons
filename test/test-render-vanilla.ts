// Vanilla render validation — mirrors test-render.ts / test-render-vue.ts.
// Each icon is a DOM factory returning a live SVGSVGElement, so we register a
// happy-dom global environment, call every factory, and assert attributes on the
// real element (no string matching needed). Data-driven scan: a new asset folder
// shows up here automatically.

import { GlobalRegistrator } from '@happy-dom/global-registrator';
GlobalRegistrator.register();

import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

type IconFactory = (options?: Record<string, unknown>) => SVGSVGElement;
type IconModule = Record<string, IconFactory>;

const PKG_DIR = join(__dirname, '..', 'packages', 'vanilla');
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

const allIcons: Array<{ name: string; factory: IconFactory; group: string }> = [];
for (const { group, dir } of scanGroups()) {
  const mod = require(join(dir, 'index')) as IconModule;
  for (const [name, factory] of Object.entries(mod)) {
    allIcons.push({ name, factory, group });
  }
}

function main() {
  let passed = 0;
  let failed = 0;
  const failures: string[] = [];

  // ── 1. Default render ──────────────────────────────────────────────────────
  for (const { name, factory, group } of allIcons) {
    try {
      const el = factory({ size: 24 });
      if (el.getAttribute('viewBox') !== '0 0 24 24') {
        failures.push(`${group}/${name}: missing viewBox`);
        failed++;
        continue;
      }
      if (el.getAttribute('stroke-width') !== '1') {
        failures.push(`${group}/${name}: default strokeWidth should be 1`);
        failed++;
        continue;
      }
      if (el.getAttribute('fill') !== 'none') {
        failures.push(`${group}/${name}: default fill should be "none"`);
        failed++;
        continue;
      }
      if (el.getAttribute('stroke') !== 'currentColor') {
        failures.push(`${group}/${name}: default stroke should be "currentColor"`);
        failed++;
        continue;
      }
      if (el.getAttribute('aria-hidden') !== 'true') {
        failures.push(`${group}/${name}: decorative icon should carry aria-hidden="true"`);
        failed++;
        continue;
      }
      if (el.getAttribute('width') !== '24' || el.getAttribute('height') !== '24') {
        failures.push(`${group}/${name}: size not applied to width/height`);
        failed++;
        continue;
      }
      passed++;
    } catch (err) {
      failures.push(`${group}/${name}: factory threw — ${(err as Error).message}`);
      failed++;
    }
  }

  // ── 2. Custom strokeWidth ──────────────────────────────────────────────────
  for (const { name, factory, group } of allIcons) {
    try {
      const el = factory({ strokeWidth: 0.5, size: 24 });
      if (el.getAttribute('stroke-width') !== '0.5') {
        failures.push(`${group}/${name} [strokeWidth=0.5]: not reflected in output`);
        failed++;
        continue;
      }
      passed++;
    } catch (err) {
      failures.push(`${group}/${name} [strokeWidth]: factory threw — ${(err as Error).message}`);
      failed++;
    }
  }

  // ── 3. Custom stroke (native attr passthrough overrides the default) ────────
  for (const { name, factory, group } of allIcons) {
    try {
      const el = factory({ stroke: '#3b82f6', size: 24 });
      if (el.getAttribute('stroke') !== '#3b82f6') {
        failures.push(`${group}/${name} [stroke]: custom stroke not reflected as stroke attribute`);
        failed++;
        continue;
      }
      passed++;
    } catch (err) {
      failures.push(`${group}/${name} [stroke]: factory threw — ${(err as Error).message}`);
      failed++;
    }
  }

  // ── 4. aria-label → role="img" + <title> + aria-labelledby, no aria-hidden ──
  for (const { name, factory, group } of allIcons) {
    try {
      const el = factory({ 'aria-label': 'Test country', size: 24 });
      if (el.getAttribute('role') !== 'img') {
        failures.push(`${group}/${name} [aria]: missing role="img"`);
        failed++;
        continue;
      }
      const labelledby = el.getAttribute('aria-labelledby');
      if (!labelledby) {
        failures.push(`${group}/${name} [aria]: missing aria-labelledby`);
        failed++;
        continue;
      }
      const title = el.querySelector('title');
      if (!title || title.textContent !== 'Test country') {
        failures.push(`${group}/${name} [aria]: missing <title>Test country</title>`);
        failed++;
        continue;
      }
      if (title.id !== labelledby) {
        failures.push(`${group}/${name} [aria]: aria-labelledby does not match <title> id`);
        failed++;
        continue;
      }
      if (el.hasAttribute('aria-hidden')) {
        failures.push(`${group}/${name} [aria]: aria-hidden must be absent when aria-label is set`);
        failed++;
        continue;
      }
      passed++;
    } catch (err) {
      failures.push(`${group}/${name} [aria]: factory threw — ${(err as Error).message}`);
      failed++;
    }
  }

  // ── 5. Unique <title> ids across two instances (per-factory uid counter) ────
  // Spot-check first 5 (pattern identical across all).
  for (const { name, factory, group } of allIcons.slice(0, 5)) {
    const a = factory({ 'aria-label': 'Country', size: 24 });
    const b = factory({ 'aria-label': 'Country', size: 24 });
    const idA = a.querySelector('title')?.id;
    const idB = b.querySelector('title')?.id;
    if (!idA || !idB || idA === idB) {
      failures.push(`${group}/${name}: duplicate <title> ids across two instances`);
      failed++;
    } else {
      passed++;
    }
  }

  console.log(`\nVanilla validation results:`);
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
