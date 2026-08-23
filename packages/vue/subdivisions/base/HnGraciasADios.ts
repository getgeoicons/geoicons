// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.2 18.295V4.442c0-.211.213-.356.41-.28 2.722 1.034 4.388 1.43 7.081 1.735.22.025.427.121.587.273 3.118 2.954 5.334 4.372 10.016 6.132.176.066.333.182.448.332.908 1.188 1.49 1.926 2.595 2.282.258.083.44.326.41.595a.523.523 0 0 1-.548.465l-3.355-.177a2 2 0 0 0-1.143.287l-2.938 1.782a2 2 0 0 1-1.005.29l-1.754.028a2 2 0 0 0-.705.14L7.71 19.75a2 2 0 0 1-1.263.071l-.955-.26a2 2 0 0 1-1.02-.66l-.428-.52a1 1 0 0 0-1.126-.301l-1.312.496a.3.3 0 0 1-.406-.281Z\"/>";

export const HnGraciasADios = /*#__PURE__*/ defineComponent({
  name: 'GeoHnGraciasADios',
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
