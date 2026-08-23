// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.95 21.949a.3.3 0 0 0 .238.444l4.708.38a.3.3 0 0 0 .324-.31l-.023-.608a1 1 0 0 1 .633-.968l1.105-.436a2 2 0 0 0 .886-.687l.17-.234a1 1 0 0 0-.258-1.42l-1.249-.828a1 1 0 0 1-.447-.855l.002-.132a1 1 0 0 1 .783-.955l2.526-.56a.8.8 0 0 0 .625-.733l.035-.58a.8.8 0 0 0-.688-.841l-.698-.098a.6.6 0 0 1-.492-.764l2.002-6.78a1 1 0 0 0-.164-.89L15.141 1.7a1 1 0 0 0-.997-.373l-2.306.476a1 1 0 0 0-.795 1.056l.07.924a1 1 0 0 1-.109.537l-.765 1.475a1 1 0 0 0-.094.653l.47 2.395a1 1 0 0 1-.31.935l-1.507 1.36a1 1 0 0 0-.328.696l-.357 7.587a2 2 0 0 1-.248.875z\"/>";

export const SvLaUnion = /*#__PURE__*/ defineComponent({
  name: 'GeoSvLaUnion',
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
