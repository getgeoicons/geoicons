// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.295 12.287-.085 4.208a.5.5 0 0 0 .512.51l2.3-.052a.5.5 0 0 1 .414.204l2.509 3.404a.5.5 0 0 0 .48.197l3.848-.605a.5.5 0 0 0 .357-.247l2.453-4.31a.5.5 0 0 1 .72-.164l1.6 1.11a.5.5 0 0 0 .73-.182l4.053-7.86a.5.5 0 0 1 .163-.184l1.087-.743a.5.5 0 0 0 .162-.642l-1.622-3.148a.5.5 0 0 0-.706-.197l-1.538.946a.5.5 0 0 1-.249.074l-9.102.251a.5.5 0 0 1-.266-.068L6.57 3.307a.5.5 0 0 0-.405-.044l-2.093.676a.5.5 0 0 0-.281.228l-.86 1.51a.5.5 0 0 0-.063.31l.388 3.134a.5.5 0 0 1-.087.348L1.386 12.01a.5.5 0 0 0-.091.277Z\"/>";

export const Ng = /*#__PURE__*/ defineComponent({
  name: 'GeoNg',
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
