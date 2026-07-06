// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.315 19.576H1.2l.063-4.22a1 1 0 0 1 .431-.808l1.622-1.12a.89.89 0 0 0 .38-.816.892.892 0 0 1 .988-.97l1.86.21a1 1 0 0 0 1.087-.776l.216-.962a1 1 0 0 1 .34-.553l1.896-1.562 5.027.033a1 1 0 0 0 .62-.21l.965-.748a1 1 0 0 0 .296-.372l1.804-3.924a.6.6 0 0 1 .458-.343l.879-.128a.6.6 0 0 1 .475.136l.763.648a.6.6 0 0 1 .212.457v2.525a1 1 0 0 0 .111.458L22.8 8.68l-4.724 2.195a1 1 0 0 0-.51.541l-.59 1.5a1 1 0 0 0 .108.935l.42.608a1 1 0 0 1-.447 1.495l-4.676 1.893a1 1 0 0 0-.53.501l-1.133 2.41a.6.6 0 0 1-1.046.07l-.519-.797a1 1 0 0 0-.838-.455Z\"/>";

export const NortheastUs = /*#__PURE__*/ defineComponent({
  name: 'GeoNortheastUs',
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
