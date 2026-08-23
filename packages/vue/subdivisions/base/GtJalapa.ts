// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.74 10.433a3 3 0 0 0-1.903 1.177l-1.302 1.77a3 3 0 0 0-.464.937l-.738 2.526a.6.6 0 0 0 .28.69l1.16.657a1 1 0 0 0 .63.12l3.026-.417a1 1 0 0 1 .72.18l1.89 1.36a1 1 0 0 0 .948.12l2.32-.906a1 1 0 0 1 .879.074l1.223.734a.6.6 0 0 0 .81-.184l1.176-1.786a1 1 0 0 1 1.041-.428l2.945.62a1 1 0 0 0 1.185-.772l1.178-5.596a1 1 0 0 0-.03-.522l-.548-1.646a1 1 0 0 0-1.097-.673l-1.263.19a1 1 0 0 1-.962-.407L16.43 4.875a1 1 0 0 0-1.168-.353l-.9.342a2 2 0 0 0-1.14 1.108l-.063.155a.8.8 0 0 1-.852.487l-.77-.108a.8.8 0 0 0-.8.383l-1.54 2.59a1 1 0 0 1-.688.473z\"/>";

export const GtJalapa = /*#__PURE__*/ defineComponent({
  name: 'GeoGtJalapa',
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
