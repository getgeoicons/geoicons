// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.463 17.974-2.356-2.798a1 1 0 0 1-.234-.602l-.108-2.59a.6.6 0 0 0-.815-.535L7.515 12a2 2 0 0 1-1.253.06l-1.365-.38a1 1 0 0 1-.716-.787l-.202-1.128a1 1 0 0 0-.464-.679l-1.68-1.023a.3.3 0 0 1 .09-.549l2.546-.571a3 3 0 0 1 1.135-.035l2.349.38a2 2 0 0 0 1.344-.259l2.295-1.371a2 2 0 0 1 1.049-.283l9.263.105a.6.6 0 0 1 .585.501l.226 1.352a.6.6 0 0 1-.397.666l-1.565.538a.71.71 0 0 0 .007 1.343l1.3.434a.6.6 0 0 1 .41.59l-.044 1.22a.6.6 0 0 1-.58.58l-2.764.085a3 3 0 0 0-.914.172l-2.064.735a1 1 0 0 0-.533.447l-2.13 3.742a.6.6 0 0 1-.98.09Z\"/>";

export const Gw = /*#__PURE__*/ defineComponent({
  name: 'GeoGw',
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
