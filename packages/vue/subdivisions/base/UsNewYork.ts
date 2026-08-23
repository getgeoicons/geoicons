// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.661 12.21a2 2 0 0 0 .067-.564l-.193-7.903a.3.3 0 0 0-.304-.292l-3.754.051a1 1 0 0 0-.628.233l-2.935 2.451a1 1 0 0 0-.355.85l.111 1.351a1 1 0 0 1-.508.955l-.37.207a2 2 0 0 1-.665.23l-1.392.22a2 2 0 0 1-.867-.055l-.798-.231a4 4 0 0 0-1.741-.108l-.63.1a.6.6 0 0 0-.464.813l.29.739a.6.6 0 0 1-.2.702L1.458 13.34a.6.6 0 0 0-.243.47l-.004.237a.6.6 0 0 0 .6.611h10.962a.6.6 0 0 1 .49.253l1.074 1.517a3 3 0 0 0 .752.74l1.418.971a.6.6 0 0 1 .255.578l-.129.93a.6.6 0 0 0 .756.66l4.592-1.28a.814.814 0 0 0-.392-1.578l-2.366.514a.816.816 0 0 1-.987-.74l-.167-2.374a2 2 0 0 1 .062-.655z\"/>";

export const UsNewYork = /*#__PURE__*/ defineComponent({
  name: 'GeoUsNewYork',
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
