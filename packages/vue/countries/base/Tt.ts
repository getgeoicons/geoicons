// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.874 9.318-8.367 1.498a.5.5 0 0 0-.164.06l-2.674 1.56 3.258-.08a1 1 0 0 1 .87.467l.506.803a1 1 0 0 1 .12.794L8.1 15.625a1 1 0 0 0 .116.788l.223.357a1 1 0 0 1 .122.765l-.046.188a1 1 0 0 1-1.229.729l-.927-.247a.5.5 0 0 0-.476.124l-.917.89a.5.5 0 0 1-.14.095l-3.215 1.47a.5.5 0 0 0-.265.615l.083.246a.5.5 0 0 0 .633.314l2.522-.845a1 1 0 0 1 .66.008l.87.316a1 1 0 0 0 .45.054l4.218-.466a1 1 0 0 1 .338.02l1.187.277a1 1 0 0 0 .68-.081l1.994-1.012a1 1 0 0 0 .538-.751l.294-2.07a1 1 0 0 0-.013-.35l-.96-4.452a.5.5 0 0 1 .147-.47l2.19-2.047a.25.25 0 0 0-.13-.429l-1.999-.344a.5.5 0 0 0-.173 0Zm5.201-6.628L17.85 4.507a.582.582 0 0 0 .539 1.008l1.432-.439q.072-.022.14-.055l2.224-1.068a.946.946 0 0 0-.674-1.761l-1.082.314a1 1 0 0 0-.354.186Z\"/>";

export const Tt = /*#__PURE__*/ defineComponent({
  name: 'GeoTt',
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
