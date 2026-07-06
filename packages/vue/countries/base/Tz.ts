// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.155 1.333-2.244.051L3.6 2.85a.5.5 0 0 1-.028.477l-.65 1.045a.5.5 0 0 0-.027.48l.41.855a.5.5 0 0 1-.096.569L1.362 8.131a.5.5 0 0 0-.144.392l.26 3.263a.5.5 0 0 0 .082.236l2.77 4.188a.5.5 0 0 0 .239.19l5.516 2.113a.5.5 0 0 1 .285.28l1.428 3.52 2.998.36q.082.01.163-.007l5.213-1.107a.5.5 0 0 0 .147-.056l2.48-1.436-1.6-1.17a.5.5 0 0 1-.19-.277l-.69-2.644a.5.5 0 0 1 .005-.27l.64-2.142a.5.5 0 0 0-.148-.518L19.523 11.9a.5.5 0 0 1-.143-.53l.754-2.314a.5.5 0 0 0-.196-.57l-2.411-1.623a.5.5 0 0 1-.213-.326l-.174-.963a.5.5 0 0 0-.246-.346l-6.806-3.843-1.462 2.003a.5.5 0 0 1-.207.165L6.054 4.565a.5.5 0 0 1-.686-.357l-.15-.714a.5.5 0 0 1 .015-.258l.409-1.247a.5.5 0 0 0-.487-.656Z\"/>";

export const Tz = /*#__PURE__*/ defineComponent({
  name: 'GeoTz',
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
