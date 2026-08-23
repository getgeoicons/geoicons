// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.728 3.11a.6.6 0 0 0-.376.729l.404 1.436a3 3 0 0 0 .38.835l3.057 4.655a3 3 0 0 0 .683.734L7.64 12.85a.8.8 0 0 0 1.123-.15l.875-1.15a1 1 0 0 1 1.248-.286l.612.31a1 1 0 0 1 .547.93l-.084 2.227a.6.6 0 0 0 .55.621l1.56.127a1 1 0 0 1 .92.982l.042 2.882a1 1 0 0 0 .344.74l1.864 1.62a.8.8 0 0 0 .903.1l4.006-2.152a.6.6 0 0 0 .176-.914l-2.576-3.07a2 2 0 0 1-.373-.678l-.99-3.102a1 1 0 0 1 .19-.95l.922-1.09c.223-.265.374-.582.438-.922l.255-1.353a1 1 0 0 0-.576-1.099l-3.708-1.65a1 1 0 0 0-.803-.005l-2.293.988a1 1 0 0 1-1.178-.295L10.62 4.24a1 1 0 0 0-.676-.371L7.815 3.64a2 2 0 0 1-.973-.377L5.464 2.248a1 1 0 0 0-.928-.136z\"/>";

export const HtNord = /*#__PURE__*/ defineComponent({
  name: 'GeoHtNord',
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
