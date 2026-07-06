// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.742 7.437-1.34 1.684a.5.5 0 0 0-.054.54l.527 1.028a.5.5 0 0 1 .052.286L1.646 13.4a.5.5 0 0 0 .034.247l.773 1.898a.5.5 0 0 0 .119.174l2.884 2.736a.5.5 0 0 1 .134.217l.407 1.339a.5.5 0 0 0 .456.354l2.144.096a.5.5 0 0 0 .246-.053l3.022-1.51a.5.5 0 0 1 .324-.044l2.26.46q.08.015.16.006l5.24-.632a.5.5 0 0 0 .335-.19l1.189-1.528a.5.5 0 0 0 .082-.157l1.294-4.102a.5.5 0 0 0-.008-.324l-.58-1.57a.5.5 0 0 0-.075-.134l-2.659-3.407a.5.5 0 0 0-.191-.15L15.578 5.5a.5.5 0 0 0-.227-.042l-2.148.1a.5.5 0 0 1-.401-.172l-.988-1.14a.5.5 0 0 0-.86.198l-.314 1.172a.5.5 0 0 1-.335.349L6.556 7.119a.5.5 0 0 1-.13.022l-3.31.108a.5.5 0 0 0-.374.188Z\"/>";

export const Bv = /*#__PURE__*/ defineComponent({
  name: 'GeoBv',
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
