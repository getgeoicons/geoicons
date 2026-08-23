// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.882 5.008a1 1 0 0 0-.712.252L2.903 7.278a1 1 0 0 0-.332.834l.442 5.048a1 1 0 0 1-.467.935l-.76.474a1 1 0 0 0-.467.763l-.065.747a2 2 0 0 0 .266 1.181l.954 1.632a1 1 0 0 0 1.18.444l.804-.268a1 1 0 0 1 .665.01l1.947.723q.315.117.65.161l1.3.172a.99.99 0 0 0 1.118-.92.99.99 0 0 1 .487-.794l.082-.048a.917.917 0 0 1 1.327.481.917.917 0 0 0 1.32.484l4.197-2.421a3 3 0 0 0 .886-.78l1.61-2.112 2.327-2.3a1 1 0 0 0 .256-.994l-.11-.37a1 1 0 0 0-.61-.655l-4.498-1.667a3 3 0 0 1-.965-.584L12.59 3.981a.6.6 0 0 0-.633-.108L9.324 4.976a2 2 0 0 1-.868.154z\"/>";

export const GdSaintDavid = /*#__PURE__*/ defineComponent({
  name: 'GeoGdSaintDavid',
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
