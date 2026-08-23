// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.58 17.205a.59.59 0 0 0 .776.825l4.117-2.078a1 1 0 0 1 .742-.063l.258.078a1 1 0 0 1 .695 1.123l-.084.495a1 1 0 0 0 .07.565l.218.504a.8.8 0 0 0 1.026.425l1.639-.643c.29-.113.56-.271.8-.468l9.964-8.13a1 1 0 0 0-.04-1.58L17.338 5a.76.76 0 0 0-.99 1.145l.706.716a.921.921 0 0 1-1.095 1.456L12.64 6.51a1 1 0 0 0-.428-.12L5.89 6.07a1 1 0 0 0-.955.572l-2.454 5.21a1 1 0 0 0 .013.88l.544 1.07a1 1 0 0 1-.028.958z\"/>";

export const GtIzabal = /*#__PURE__*/ defineComponent({
  name: 'GeoGtIzabal',
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
