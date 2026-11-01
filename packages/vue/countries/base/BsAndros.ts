// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m6.283 10.35 2.993 2.263a9 9 0 0 1 2.044 2.161l1.518 2.259a7.8 7.8 0 0 1 1.325 4.272l.002.131a.946.946 0 0 0 .78.922l1.706.303a1 1 0 0 0 1.094-.59l.058-.136a5 5 0 0 0 .403-2.179l-.024-.586a5 5 0 0 0-.217-1.265l-.39-1.267a5 5 0 0 0-.913-1.703l-.248-.301a3 3 0 0 1-.64-1.414l-.715-4.326a2 2 0 0 0-.444-.963l-.917-1.087a5 5 0 0 1-.697-1.086l-.148-.314a5 5 0 0 1-.472-1.863l-.016-.287a2 2 0 0 0-.286-.927l-.469-.774a.8.8 0 0 0-.697-.385l-1.49.025a.6.6 0 0 0-.528.865l.24.486A3 3 0 0 1 9.42 4.3l-.076.586a3 3 0 0 1-.523 1.341L7.8 7.673a7 7 0 0 1-.638.78l-.954 1.006a.6.6 0 0 0 .074.892Z\"/>";

export const BsAndros = /*#__PURE__*/ defineComponent({
  name: 'GeoBsAndros',
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
