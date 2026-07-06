// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.482 8.504 1.11 3.274a.5.5 0 0 0 .443.338l3.687.224a.5.5 0 0 1 .345.168l2.034 2.31a.5.5 0 0 0 .494.155l1.673-.407a.5.5 0 0 1 .575.281l.53 1.184a.5.5 0 0 0 .457.295h2.996a.5.5 0 0 1 .461.308l2.405 5.784a.5.5 0 0 0 .564.297l1.866-.39a.5.5 0 0 0 .388-.588l-.621-3.09a.5.5 0 0 1 .025-.281l.563-1.429a.5.5 0 0 0-.249-.634l-4.453-2.144a.5.5 0 0 1-.246-.64l1.173-2.875a.5.5 0 0 0-.31-.665l-2.042-.654a.5.5 0 0 1-.248-.177l-1.46-1.956a.5.5 0 0 1 .049-.654l1.2-1.188a.5.5 0 0 0-.014-.723l-3.547-3.27a.5.5 0 0 0-.4-.128L2.25 2.437a.5.5 0 0 0-.326.812l1.617 1.983a.5.5 0 0 1 .066.526L2.502 8.133a.5.5 0 0 0-.02.371Z\"/>";

export const Am = /*#__PURE__*/ defineComponent({
  name: 'GeoAm',
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
