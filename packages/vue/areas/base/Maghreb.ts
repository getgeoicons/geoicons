// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.732 13.555.463 4.754-3.336.32a1 1 0 0 1-.357-.03l-1.305-.354a1 1 0 0 1-.696-1.257l.148-.485a1 1 0 0 0 .022-.5l-.244-1.144a1 1 0 0 1 .117-.717l1.703-2.887a1 1 0 0 1 .288-.312l1.334-.932a1 1 0 0 0 .406-.614l.211-1.004a1 1 0 0 1 .245-.473l1.154-1.249A1 1 0 0 1 7.932 6.4l.9.295a1 1 0 0 0 .838-.1l1.233-.763a1 1 0 0 1 .452-.147l4.45-.331-.402 1.404a1 1 0 0 0 .333 1.052l.131.106a1 1 0 0 0 .244.146l2.842 1.184a.835.835 0 0 0 1.126-.548.84.84 0 0 1 .585-.583l.167-.046a1 1 0 0 1 .657.046l.522.223a1 1 0 0 1 .606.888l.184 5.893-.495.874-3.79-2.215-1.079.554-1.34-.7-2.655 2.086a1 1 0 0 1-.456.2l-.878.144a1 1 0 0 1-.828-.241l-3.263-2.917a.773.773 0 0 0-1.284.651Z\"/>";

export const Maghreb = /*#__PURE__*/ defineComponent({
  name: 'GeoMaghreb',
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
