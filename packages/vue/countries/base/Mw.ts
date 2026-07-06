// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.821 20.754-.015 1.798a.25.25 0 0 1-.25.247h-.637a.25.25 0 0 1-.206-.108l-1.962-2.87a.5.5 0 0 1 .008-.577l.961-1.323a.5.5 0 0 0 .083-.406l-.38-1.66a.5.5 0 0 0-.622-.37l-1.36.38a.5.5 0 0 1-.497-.137l-2.117-2.234a.5.5 0 0 1-.067-.6l1.697-2.86a.5.5 0 0 0 .069-.223l.3-4.65a.5.5 0 0 0-.05-.253L7.946 1.2l3.011 1.008a.5.5 0 0 1 .303.282l.7 1.683q.03.071.037.147l.277 3.095a.5.5 0 0 1-.036.236l-.661 1.597a.5.5 0 0 0-.019.33l.776 2.693a.5.5 0 0 0 .386.353l.948.183a.5.5 0 0 1 .296.179l2.354 2.95a.5.5 0 0 1 .11.327l-.098 3.182a.5.5 0 0 1-.293.44l-.922.418a.5.5 0 0 0-.294.451Z\"/>";

export const Mw = /*#__PURE__*/ defineComponent({
  name: 'GeoMw',
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
