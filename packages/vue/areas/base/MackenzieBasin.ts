// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.438 22.622-1.33.112a1 1 0 0 1-1.03-.674l-.756-2.224a1 1 0 0 0-.426-.531l-1.11-.678a1 1 0 0 1-.44-.579l-.37-1.294a1 1 0 0 1 .068-.722l.282-.564a1 1 0 0 0-.188-1.155l-.707-.707a1 1 0 0 1-.242-1.024l.602-1.805a1 1 0 0 1 .717-.656l.734-.175a1 1 0 0 0 .768-.973v-.996a1 1 0 0 0-.463-.844l-2.16-1.375a.6.6 0 0 1-.279-.516l.008-.48a.6.6 0 0 1 .65-.587l.992.083a1 1 0 0 0 .98-.551l.867-1.745a.913.913 0 0 1 1.652.777l-.254.571a1 1 0 0 0-.053.664l.218.816a1 1 0 0 0 .319.505l1.252 1.064a1 1 0 0 0 1.012.17l.939-.369a1 1 0 0 1 1.19.366l.603.88a1 1 0 0 1 .168.69l-.143 1.138a1 1 0 0 0 .685 1.076l1.882.609a1 1 0 0 1 .69.876l.215 2.87a1 1 0 0 1-.175.644l-.303.437a1 1 0 0 1-1.012.413l-.955-.184a.6.6 0 0 0-.604.242l-.337.475a.6.6 0 0 0 .197.871l1.043.583a.855.855 0 0 1-.188 1.57l-.685.19a1 1 0 0 0-.571.417l-.364.558a1 1 0 0 1-.423.363l-2.835 1.292a1 1 0 0 1-.33.086Z\"/>";

export const MackenzieBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoMackenzieBasin',
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
