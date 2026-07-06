// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m22.272 16.199.169 1.829a.5.5 0 0 1-.569.54l-5.615-.798a.5.5 0 0 1-.22-.088l-2.72-1.947a.5.5 0 0 0-.286-.093l-3.137-.03a.5.5 0 0 1-.228-.059l-8.079-4.26a.5.5 0 0 1-.236-.615l1.574-4.276a.5.5 0 0 1 .809-.194l.672.622a.5.5 0 0 0 .778-.126L5.6 5.95a.5.5 0 0 1 .804-.098L9.89 9.617a.5.5 0 0 0 .452.153l1.041-.18a.5.5 0 0 1 .563.344l.28.902a.5.5 0 0 0 .227.284l4.284 2.488a.5.5 0 0 0 .22.067l5.238.324a.5.5 0 0 1 .454.624l-.363 1.405a.5.5 0 0 0-.014.17\"/>";

export const Np = /*#__PURE__*/ defineComponent({
  name: 'GeoNp',
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
