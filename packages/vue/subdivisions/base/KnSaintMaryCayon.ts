// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.504 21.346-1.098-.311a1 1 0 0 1-.72-.84l-.453-3.652a2 2 0 0 1 .004-.524l.306-2.187a2 2 0 0 1 .454-1.014l.656-.775a2 2 0 0 1 .857-.593l.503-.179a1 1 0 0 0 .653-.79l.373-2.426a1 1 0 0 1 .225-.494l2.23-2.635a.3.3 0 0 1 .283-.1l.725.133a.3.3 0 0 0 .34-.2l.563-1.708a.6.6 0 0 1 .733-.389l.284.08a.6.6 0 0 1 .368.299l.948 1.803a1 1 0 0 0 .34.374l1.766 1.148a1 1 0 0 1 .452.905l-.011.17a1 1 0 0 0 .283.765L15.735 9.4a2 2 0 0 1 .43.661l.6 1.514a2 2 0 0 0 .372.6l5.387 5.99a.3.3 0 0 1-.101.475l-4.455 1.982a2 2 0 0 1-1.26.122l-4.206-.965a3 3 0 0 0-1.105-.044l-1.29.189a3 3 0 0 1-1.214-.072l-1.783-.48a1 1 0 0 0-.922.216l-1.75 1.545a1 1 0 0 1-.934.213Z\"/>";

export const KnSaintMaryCayon = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintMaryCayon',
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
