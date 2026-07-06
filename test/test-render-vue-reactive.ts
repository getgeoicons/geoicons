// Client-mount reactivity guard for the Vue icons. The SSR suite
// (test-render-vue.ts) renders once and can't catch reactivity regressions —
// this mounts a real component and asserts the a11y state tracks a *changing*
// reactive aria-label. Guards the fix where attrs['aria-label'] must be read
// inside the render fn, not in setup() (setup runs once). If someone moves that
// read back into setup, these assertions fail.
//
// happy-dom must register the global `document` BEFORE Vue's runtime-dom is
// loaded (it captures `document` at import time). Static imports are hoisted,
// so Vue is pulled in via dynamic import() inside main(), after registration.

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

let passed = 0;
let failed = 0;
const failures: string[] = [];

function check(cond: boolean, msg: string) {
  if (cond) passed++;
  else {
    failed++;
    failures.push(msg);
  }
}

async function main() {
  const { defineComponent, h, nextTick, ref } = await import('vue');
  const { mount } = await import('@vue/test-utils');
  const { Us } = await import('../packages/vue/countries/base/Us');

  const label = ref<string | undefined>(undefined);
  const Host = defineComponent({
    setup: () => () => h(Us, { 'aria-label': label.value, size: 24 }),
  });

  const w = mount(Host);
  const svg = () => w.find('svg');
  const title = () => w.find('title');
  // Safe reads so a regression (missing <title>) reports a clean failure
  // instead of throwing on .text()/.attributes() of an empty wrapper.
  const titleText = () => (title().exists() ? title().text() : undefined);
  const titleId = () => (title().exists() ? title().attributes('id') : undefined);

  // ── 1. Decorative by default (no aria-label) ────────────────────────────────
  check(!title().exists(), 'decorative: <title> must be absent');
  check(svg().attributes('aria-hidden') === 'true', 'decorative: aria-hidden="true" expected');
  check(svg().attributes('role') === undefined, 'decorative: role must be absent');
  check(
    svg().attributes('aria-labelledby') === undefined,
    'decorative: aria-labelledby must be absent',
  );

  // ── 2. Reactively add a label → icon becomes meaningful ─────────────────────
  label.value = 'Japan';
  await nextTick();
  check(title().exists(), 'labeled: <title> must appear after reactive aria-label set');
  check(titleText() === 'Japan', 'labeled: <title> text should track the reactive value');
  check(svg().attributes('role') === 'img', 'labeled: role="img" expected');
  check(svg().attributes('aria-hidden') === undefined, 'labeled: aria-hidden must be cleared');
  check(!!titleId(), 'labeled: <title> must have an id');
  check(
    svg().attributes('aria-labelledby') === titleId(),
    'labeled: aria-labelledby must reference the <title> id',
  );

  // ── 3. Reactively change the label → title text follows ─────────────────────
  label.value = 'Nippon';
  await nextTick();
  check(titleText() === 'Nippon', 'relabeled: <title> text should update to the new value');

  // ── 4. Reactively clear the label → back to decorative ──────────────────────
  label.value = undefined;
  await nextTick();
  check(!title().exists(), 'cleared: <title> must be removed when aria-label is unset');
  check(svg().attributes('aria-hidden') === 'true', 'cleared: aria-hidden="true" should return');

  w.unmount();

  console.log(`\nVue reactivity results:`);
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
