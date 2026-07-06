// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.875 7.655-.408-1.837a.5.5 0 0 1 .348-.588l3.268-.95a.5.5 0 0 0 .258-.178l.768-1.01a.5.5 0 0 1 .242-.172l3.372-1.108a.5.5 0 0 1 .637.337l.34 1.19a.5.5 0 0 0 .294.326l.993.401a.5.5 0 0 0 .412-.016l1.135-.57a.5.5 0 0 1 .227-.052l5.7.035a.5.5 0 0 1 .288.094l1.681 1.21a.5.5 0 0 1 .197.302l.835 3.913a.5.5 0 0 1-.14.463l-1.431 1.387a.5.5 0 0 0-.126.518l1.925 5.733a.5.5 0 0 1-.158.547l-2.484 2.025a.5.5 0 0 0-.181.436L20 21.455a.5.5 0 0 1-.72.497l-2.107-1.043a.5.5 0 0 0-.357-.033l-2.58.723a.5.5 0 0 1-.534-.179l-.628-.827a.5.5 0 0 0-.497-.187l-1.029.207a.5.5 0 0 1-.44-.125L8.33 17.88a.5.5 0 0 0-.635-.04l-.698.505a.5.5 0 0 1-.71-.128l-.844-1.27a.5.5 0 0 0-.33-.215l-2.088-.365a.5.5 0 0 1-.398-.617l.388-1.51a.5.5 0 0 0 .007-.22l-.668-3.488a.5.5 0 0 0-.125-.247l-.786-.843a.5.5 0 0 1-.076-.576l.461-.87a.5.5 0 0 0 .047-.342Z\"/>";

export const Pl = /*#__PURE__*/ defineComponent({
  name: 'GeoPl',
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
