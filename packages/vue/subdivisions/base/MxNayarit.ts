// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.352 22.405a.6.6 0 0 1-.7.184l-1.274-.522a.6.6 0 0 1-.201-.974l1.411-1.448a2 2 0 0 0 .557-1.186l.252-2.379a1 1 0 0 0-.487-.966l-.842-.497a3 3 0 0 1-1.156-1.234l-1.11-2.202a3 3 0 0 1-.321-1.364l.004-.765a3 3 0 0 0-.176-1.025l-.382-1.07a.6.6 0 0 1 .672-.792l1.04.19a.6.6 0 0 0 .702-.675l-.376-2.66a1 1 0 0 1 .176-.721l.329-.46a1 1 0 0 1 1.184-.349l2.501.997a.6.6 0 0 1 .354.39l.255.874a.6.6 0 0 1-.346.722l-.584.242a.6.6 0 0 0-.333.76l.309.842a.6.6 0 0 0 .933.266l.755-.591a.6.6 0 0 1 .794.048l1.064 1.064a2 2 0 0 0 1.139.567l.425.059a1 1 0 0 1 .834 1.228l-.347 1.415a1 1 0 0 0 .472 1.105l2.894 1.667a1 1 0 0 1 .388.403l1.04 1.989a1 1 0 0 1 .027.868l-.274.619a1 1 0 0 1-.794.588l-1.701.207a1 1 0 0 0-.866.827l-.51 3.044a.6.6 0 0 1-1.004.337l-2.366-2.235a1 1 0 0 0-1.103-.182l-1.226.562a2 2 0 0 0-.74.584z\"/>";

export const MxNayarit = /*#__PURE__*/ defineComponent({
  name: 'GeoMxNayarit',
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
