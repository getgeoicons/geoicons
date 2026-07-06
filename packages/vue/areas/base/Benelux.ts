// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.022 12.367-2.555 1.484a.6.6 0 0 0-.27.702l.19.59a1 1 0 0 0 .338.484l1.755 1.367a1 1 0 0 0 .293.158l1.747.593a1 1 0 0 1 .653.723l.174.757a1 1 0 0 0 .907.774l1.187.08a1 1 0 0 1 .669.322l1.602 1.744a1 1 0 0 0 .608.315l2.185.282a.6.6 0 0 0 .628-.359l.383-.895a.6.6 0 0 0-.134-.667l-.695-.673a1 1 0 0 1-.175-1.21l.352-.623a1 1 0 0 0-.09-1.116l-.94-1.176a1 1 0 0 1-.215-.522l-.087-.843a1 1 0 0 1 .082-.51l.69-1.545a1 1 0 0 0-.061-.932l-.46-.748a.6.6 0 0 1 .356-.895l1.702-.453a1 1 0 0 0 .623-.493l.53-.983a.6.6 0 0 0-.236-.809l-.61-.34a.6.6 0 0 1-.306-.503l-.02-.575a.6.6 0 0 1 .59-.62l.419-.007a.6.6 0 0 0 .566-.433l.404-1.404a1 1 0 0 0-.2-.926l-.757-.888a1 1 0 0 0-.75-.35l-3.797-.041a1 1 0 0 0-.458.105l-1.408.704a1 1 0 0 0-.457.467l-.619 1.31a1 1 0 0 0-.078.244l-.663 3.536a1 1 0 0 1-.185.42l-3.111 4.116a1 1 0 0 1-.296.262Z\"/>";

export const Benelux = /*#__PURE__*/ defineComponent({
  name: 'GeoBenelux',
  inheritAttrs: false,
  props: {
    size: { type: [Number, String], default: 24 },
    strokeWidth: { type: [Number, String], default: 1 },
  },
  setup(props, { attrs }) {
    // Compliance nudge: warns once if icons render without the GeoiconsLicense plugin.
    // Client-only + deferred inside noteIconRender; no-op during SSR.
    noteIconRender();
    // uid is stable per instance — compute once. Prefer Vue 3.5+ useId()
    // (SSR-safe, cross-app-unique); fall back to the per-instance uid on 3.0–3.4.
    const uid =
      typeof Vue.useId === 'function'
        ? Vue.useId()
        : `geo-${Vue.getCurrentInstance()?.uid ?? 0}`;
    // Read attrs['aria-label'] inside the render fn (not setup) so a reactive
    // aria-label stays in sync — setup runs once, only the render fn re-runs.
    return () => {
      const label = attrs['aria-label'] as string | undefined;
      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          width: props.size,
          height: props.size,
          stroke: 'currentColor',
          'stroke-width': props.strokeWidth,
          fill: 'none',
          role: label ? 'img' : undefined,
          ...attrs,
          'aria-labelledby': label ? `${uid}-title` : undefined,
          'aria-hidden': label ? undefined : true,
        },
        [
          label ? h('title', { id: `${uid}-title` }, label) : null,
          h('g', { innerHTML: BODY }),
        ],
      );
    };
  },
});
