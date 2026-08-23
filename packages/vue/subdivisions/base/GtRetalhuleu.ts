// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.526 3.667a.625.625 0 0 0-.93-.792L18.739 5.06a.6.6 0 0 1-.96-.407l-.199-1.694a.6.6 0 0 0-.988-.385l-.745.644a3 3 0 0 0-.568.656L13.843 6.12a2 2 0 0 0-.244.552l-.547 2.01a1 1 0 0 1-1.273.689L5.238 7.256a.6.6 0 0 0-.533.082l-2.86 2.045a.6.6 0 0 0-.028.956l7.136 5.728 3.728 3.32a8 8 0 0 0 1.768 1.194l2.645 1.31a.6.6 0 0 0 .81-.285l.976-2.1a2 2 0 0 0 .184-.904l-.045-1.484a2 2 0 0 1 .094-.67l1.06-3.318c.108-.337.155-.69.14-1.044l-.15-3.43A2 2 0 0 1 20.4 7.62z\"/>";

export const GtRetalhuleu = /*#__PURE__*/ defineComponent({
  name: 'GeoGtRetalhuleu',
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
