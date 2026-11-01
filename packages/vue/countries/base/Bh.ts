// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.454 16.191.056.351a2 2 0 0 0 .611 1.151l1.388 1.294a3 3 0 0 1 .804 1.257l.655 1.988a.3.3 0 0 0 .53.078l1.032-1.47a2 2 0 0 0 .349-.913l.964-8.166a6 6 0 0 1 .618-2.029l1.711-3.345a1 1 0 0 0 .01-.89l-1.442-2.99a1 1 0 0 0-1.627-.253l-2.231 2.36a1 1 0 0 1-.95.287l-1.468-.337a1 1 0 0 0-.901.24l-.819.753a1 1 0 0 0-.315.853l.196 1.651a5 5 0 0 0 .341 1.315l1.016 2.468a3 3 0 0 1 .006 2.27l-.411 1.012a2 2 0 0 0-.123 1.065ZM7.24 8.904l-.003.533A.817.817 0 0 1 5.6 9.431v-.533a.819.819 0 1 1 1.638.006Z\"/>";

export const Bh = /*#__PURE__*/ defineComponent({
  name: 'GeoBh',
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
