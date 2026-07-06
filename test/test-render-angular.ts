// Render-validation for @geoicons/angular — the Angular analogue of test-render-vue.ts.
// Renders every generated component through Angular's TestBed and asserts the same contract as
// React/Vue: default attrs, custom strokeWidth/stroke, aria-label → role/title, and unique
// <title> ids across two instances. 422 components × 4 checks + 5 uniqueness = 1693.
//
// Runs against a full-Ivy build (dist-spec) produced by `ngc -p tsconfig.spec.json` — see
// test:angular in package.json. Full compilation (vs the published partial/APF build) lets the
// components run directly under Node/TestBed with no runtime linker. ng-packagr's strict-template
// AOT build separately validates the *published* artifact.
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
(globalThis as any).window = win;
(globalThis as any).document = win.document;
for (const k of [
  'Node',
  'Element',
  'HTMLElement',
  'SVGElement',
  'Document',
  'DocumentFragment',
  'Text',
  'Comment',
  'Event',
  'CustomEvent',
  'getComputedStyle',
]) {
  (globalThis as any)[k] ??= (win as any)[k];
}

import 'zone.js';
import { Type } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

type IconModule = Record<string, Type<unknown>>;

async function loadIcons() {
  const groups = [
    {
      group: 'countries',
      mod: (await import('../packages/angular/dist-spec/countries/public-api.js')) as IconModule,
    },
    {
      group: 'areas',
      mod: (await import('../packages/angular/dist-spec/areas/public-api.js')) as IconModule,
    },
  ];
  const icons: Array<{ name: string; cmp: Type<unknown>; group: string }> = [];
  for (const { group, mod } of groups) {
    for (const [name, cmp] of Object.entries(mod)) {
      if (typeof cmp === 'function') icons.push({ name, cmp, group });
    }
  }
  return icons;
}

function outer(cmp: Type<unknown>, inputs: Record<string, unknown>) {
  const fixture = TestBed.createComponent(cmp);
  for (const [k, v] of Object.entries(inputs)) fixture.componentRef.setInput(k, v);
  fixture.detectChanges();
  return fixture.nativeElement.querySelector('svg')?.outerHTML ?? '';
}

async function main() {
  getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  const icons = await loadIcons();

  let passed = 0;
  let failed = 0;
  const failures: string[] = [];
  const key = (i: { group: string; name: string }) => `${i.group}/${i.name}`;

  for (const it of icons) {
    const k = key(it);
    const fail = (msg: string) => (failures.push(`${k}: ${msg}`), failed++);

    // 1. default render
    const def = outer(it.cmp, {});
    if (
      def.includes('stroke-width="1"') &&
      def.includes('fill="none"') &&
      def.includes('stroke="currentColor"') &&
      def.includes('viewBox="0 0 24 24"') &&
      def.includes('aria-hidden="true"') &&
      !def.includes('stroke="black"') &&
      !def.includes('fill="#')
    ) {
      passed++;
    } else {
      fail('default render contract failed');
    }

    // 2. custom strokeWidth
    if (outer(it.cmp, { strokeWidth: 0.5 }).includes('stroke-width="0.5"')) passed++;
    else fail('[strokeWidth=0.5] not reflected');

    // 3. custom stroke
    if (outer(it.cmp, { stroke: '#3b82f6' }).includes('stroke="#3b82f6"')) passed++;
    else fail('[stroke] not reflected');

    // 4. aria-label → role/title/labelledby, no aria-hidden
    const aria = outer(it.cmp, { 'aria-label': 'Test country' });
    if (
      aria.includes('role="img"') &&
      aria.includes('aria-labelledby=') &&
      aria.includes('<title') &&
      aria.includes('>Test country</title>') &&
      !aria.includes('aria-hidden')
    ) {
      passed++;
    } else {
      fail('[aria] contract failed');
    }
  }

  // 5. unique <title> ids across two instances (first 5). Two fixtures share the root
  // GeoIconIdService instance, so their ids must differ.
  for (const it of icons.slice(0, 5)) {
    const idOf = (html: string) => (html.match(/<title id="([^"]+)"/) ?? [])[1];
    const a = idOf(outer(it.cmp, { 'aria-label': 'Country' }));
    const b = idOf(outer(it.cmp, { 'aria-label': 'Country' }));
    if (a && b && a !== b) passed++;
    else {
      failures.push(`${key(it)}: duplicate/absent <title> ids across two instances (${a} / ${b})`);
      failed++;
    }
  }

  console.log(`\nAngular validation results:`);
  console.log(`  ✅  ${passed} checks passed`);
  if (failed > 0) {
    console.log(`  ❌  ${failed} checks failed`);
    failures.slice(0, 40).forEach((f) => console.log(`      ${f}`));
    if (failures.length > 40) console.log(`      … +${failures.length - 40} more`);
    process.exit(1);
  } else {
    console.log(`  No failures.`);
    process.exit(0); // exit before a stray zone.js teardown callback can throw
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
