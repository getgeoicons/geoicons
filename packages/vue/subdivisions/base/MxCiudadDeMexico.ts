// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.079 21.655a.6.6 0 0 0 .698-.483l.86-4.72a1.5 1.5 0 0 0 .015-.44l-.41-3.585a1 1 0 0 0-.399-.69l-2.614-1.932a1 1 0 0 1-.373-1.06l.224-.847a1 1 0 0 0-.011-.551l-.383-1.239a1 1 0 0 0-.528-.608l-1.364-.646A.6.6 0 0 1 13.54 4l.547-.895a.6.6 0 0 0-.088-.737l-.561-.562a.6.6 0 0 0-.968.17l-.754 1.613a1 1 0 0 1-.32.385l-1.114.809a1 1 0 0 0-.409.717l-.166 1.792a2 2 0 0 1-.94 1.517l-2.08 1.287a2 2 0 0 0-.704.742l-1.334 2.44a1 1 0 0 0 .107 1.117l1.342 1.624a3 3 0 0 1 .544.997l.638 1.996a1.5 1.5 0 0 0 .499.72l1.284 1.014c.24.19.533.302.838.32l2.478.153a.6.6 0 0 1 .531.404l.136.397a.6.6 0 0 0 .454.395l1.577.305a.6.6 0 0 0 .633-.286l.285-.49a1 1 0 0 1 1.044-.479z\"/>";

export const MxCiudadDeMexico = /*#__PURE__*/ defineComponent({
  name: 'GeoMxCiudadDeMexico',
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
