// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.316 17.617a.6.6 0 0 0 .428.703l1.544.425a1 1 0 0 0 .78-.107l1.616-.968a1 1 0 0 1 .755-.113l5.26 1.309a3 3 0 0 0 1.098.065l5.778-.725c.346-.044.682-.147.993-.306l2.7-1.383a.6.6 0 0 0 .263-.804l-1.563-3.097a2 2 0 0 1-.195-.619l-.417-2.923a1 1 0 0 0-1.045-.857l-1.386.075a3 3 0 0 1-1.213-.185l-5.45-2.036a2 2 0 0 0-.747-.125l-2.906.07a4 4 0 0 1-1.162-.144l-2.813-.778a.962.962 0 0 0-1.195 1.14l.564 2.486a2 2 0 0 1 .006.854z\"/>";

export const JmSaintAnn = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintAnn',
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
