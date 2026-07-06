// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.5 2.694a.5.5 0 0 0 .445.257l3.034-.05a.5.5 0 0 0 .217-.054l1.675-.848a.5.5 0 0 1 .465.007l2.13 1.164 1.416-.46a.5.5 0 0 1 .623.3l.323.863a.5.5 0 0 1-.302.647l-1.371.483a.5.5 0 0 1-.34-.003l-3.008-1.11-2.407.946a.5.5 0 0 1-.174.035l-2.747.048a.5.5 0 0 0-.49.496l-.015 1.902a.5.5 0 0 0 .627.487l4.871-1.282a.5.5 0 0 1 .13-.016l7.202.036c.076 0 .152.018.22.053l2.312 1.156a.5.5 0 0 0 .284.049l2.743-.33a.5.5 0 0 0 .44-.469l.083-1.48a.5.5 0 0 0-.134-.37l-2.052-2.193a.5.5 0 0 1-.132-.287l-.402-3.62a.5.5 0 0 0-.127-.28l-4.056-4.474a.5.5 0 0 0-.24-.147l-1.783-.48a.5.5 0 0 1-.249-.156l-.976-1.134a.5.5 0 0 0-.402-.173l-6.359.289a.5.5 0 0 0-.423.274L2.859 9.832a.5.5 0 0 1-.205.213Z\"/>";

export const Sn = /*#__PURE__*/ defineComponent({
  name: 'GeoSn',
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
