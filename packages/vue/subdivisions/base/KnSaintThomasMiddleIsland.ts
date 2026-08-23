// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.541 10.915.327.389a1 1 0 0 0 .117.118l2.268 1.935c.282.242.608.428.96.55l1.338.467q.966.337 1.855.847l4.279 2.457a2 2 0 0 1 .929 1.19l.286 1.01c.066.232.192.442.366.61l.13.124a1.148 1.148 0 0 0 1.834-.341l1.064-2.265a1 1 0 0 1 .586-.522l1.56-.525a3 3 0 0 0 1.174-.732l1.531-1.545a.6.6 0 0 0-.217-.985l-4.7-1.745a.6.6 0 0 1-.382-.665l.162-.93a.6.6 0 0 0-.136-.494l-5.76-6.698a.6.6 0 0 0-.872-.04L7.992 5.3a1 1 0 0 1-.721.28l-.913-.023a1 1 0 0 0-.889.494l-.517.883a2 2 0 0 1-.5.57l-2.775 2.15a.88.88 0 0 0-.136 1.26Z\"/>";

export const KnSaintThomasMiddleIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintThomasMiddleIsland',
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
