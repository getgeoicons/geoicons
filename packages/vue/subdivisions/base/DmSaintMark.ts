// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.371 6.57-.525 1.684a.6.6 0 0 0 .337.73l.535.228a2 2 0 0 1 1.007.953l.028.057a2 2 0 0 1 .198 1.086l-.162 1.617a5 5 0 0 1-.275 1.204l-.32.882a5 5 0 0 1-.51 1.025l-.93 1.429-.5 1.029a1 1 0 0 1-1.035.554l-.947-.13a1 1 0 0 1-.6-.312l-.37-.402a.86.86 0 0 0-1.485.487l-.01.083a.94.94 0 0 0 .328.824l.22.186a3 3 0 0 0 1.254.631l1.065.25q.372.087.709.263l1.192.625a4 4 0 0 0 .822.32l2.762.74a4 4 0 0 0 .934.135l1.037.027a4 4 0 0 0 1.9-.426l1.3-.654a1 1 0 0 1 .851-.023l.473.208a1 1 0 0 0 1.175-.281l.401-.49a1 1 0 0 1 .69-.361l.215-.018a1 1 0 0 1 .556.116l.303.163a1 1 0 0 0 .878.034l.827-.366a.6.6 0 0 0 .305-.792l-.752-1.69a6 6 0 0 1-.396-1.237l-1.134-5.543a3 3 0 0 0-.723-1.42l-1.013-1.11a3 3 0 0 1-.733-1.47l-.344-1.841-.284-3.393a.6.6 0 0 0-.916-.46l-3.676 2.3q-.601.377-1.25.665L7.92 5.954a1 1 0 0 0-.55.617Z\"/>";

export const DmSaintMark = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintMark',
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
