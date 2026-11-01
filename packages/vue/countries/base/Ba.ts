// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.326 20.38-.057-.121a2 2 0 0 1 .097-1.884l.726-1.206a.92.92 0 0 1 .872-.442.928.928 0 0 0 1-1.002.942.942 0 0 1 .977-1.02l.897.042a.735.735 0 0 0 .547-1.26l-1.18-1.146a.56.56 0 0 1 .542-.94l.678.19a.825.825 0 0 0 .745-1.435L20.1 8.468a1 1 0 0 1-.212-1.312l1.002-1.574a.899.899 0 0 0-.988-1.352l-1.546.408a1 1 0 0 1-1.122-.468l-.29-.503a1 1 0 0 0-.762-.497L6.928 2.2a2 2 0 0 0-1.716.675l-.048.055a1 1 0 0 1-1.43.08l-.654-.602a1 1 0 0 0-.634-.262l-.153-.007a1 1 0 0 0-1.04 1.047l.051 1.098a2 2 0 0 0 .481 1.209l1.272 1.48a2 2 0 0 1 .459.993l.193 1.226a2 2 0 0 0 .52 1.062l6.581 6.982a1 1 0 0 1 .27.74l-.025.477a1 1 0 0 0 .926 1.052l.533.038a1 1 0 0 1 .636.291l1.628 1.632a.96.96 0 0 0 1.548-1.087Z\"/>";

export const Ba = /*#__PURE__*/ defineComponent({
  name: 'GeoBa',
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
