// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m10.537 17.604-.373-1.257a1 1 0 0 1 .615-1.224l6.773-2.478a4 4 0 0 1 1.815-.22l1.967.218a1 1 0 0 1 .821.628l.316.803a3 3 0 0 1 .145 1.714l-.378 1.8a1 1 0 0 1-.505.676l-1.863 1a1 1 0 0 1-1.035-.053l-2.245-1.524a1 1 0 0 0-.743-.156l-4.17.772a1 1 0 0 1-1.14-.699ZM2.713 9.208 1.594 7.486a1 1 0 0 1 .06-1.17l.89-1.109a1 1 0 0 1 1.384-.17l.896.68a1 1 0 0 1 .279 1.264L3.954 9.152a.72.72 0 0 1-1.24.056Z\"/>";

export const BsRumCay = /*#__PURE__*/ defineComponent({
  name: 'GeoBsRumCay',
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
