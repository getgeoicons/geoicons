// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m1.654 4.196-.343-1.47a.5.5 0 0 1 .358-.597l1.608-.428a.5.5 0 0 1 .424.08l.82.598a.5.5 0 0 0 .3.096l6.655-.058a.5.5 0 0 1 .328.119l.63.536a.5.5 0 0 0 .308.118l2.578.09a.5.5 0 0 0 .103-.008l5.35-.923a.5.5 0 0 1 .305.044l1.722.843-2.612 1.65-.426-.831-3.556.659a.5.5 0 0 0-.408.492l.001 4.488a.5.5 0 0 1-.5.5h-.58a.5.5 0 0 0-.5.5V21.07a.5.5 0 0 1-.166.373l-.862.77a.5.5 0 0 1-.389.123l-2.173-.245a.5.5 0 0 1-.377-.248l-.374-.648a.5.5 0 0 0-.771-.119l-.338.31a.5.5 0 0 1-.747-.08l-1.204-1.708a.5.5 0 0 1-.086-.214L5.567 11.56a.5.5 0 0 0-.054-.163L1.7 4.319a.5.5 0 0 1-.047-.123\"/>";

export const Na = /*#__PURE__*/ defineComponent({
  name: 'GeoNa',
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
