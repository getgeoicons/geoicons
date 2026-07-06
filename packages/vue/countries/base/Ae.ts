// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.963 20.54-11.029-1.4a.5.5 0 0 1-.326-.182l-4.298-5.33a.5.5 0 0 1-.111-.314v-.393a.5.5 0 0 1 .802-.4l1.618 1.224a.5.5 0 0 0 .523.05l1.459-.722a.5.5 0 0 1 .28-.048l4.782.558a.5.5 0 0 0 .211-.021l2.765-.89a.5.5 0 0 0 .291-.247l1.255-2.432a.5.5 0 0 1 .093-.127l5.893-5.8a.5.5 0 0 1 .844.273l.695 4.091a.5.5 0 0 1-.442.581l-1.356.14a.5.5 0 0 0-.439.597l.63 3.12a.5.5 0 0 1-.283.556l-1.62.732a.5.5 0 0 0-.269.3l-1.276 3.887a.5.5 0 0 0-.024.122l-.108 1.612a.5.5 0 0 1-.561.463Z\"/>";

export const Ae = /*#__PURE__*/ defineComponent({
  name: 'GeoAe',
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
