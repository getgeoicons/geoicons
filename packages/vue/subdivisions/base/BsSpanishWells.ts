// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.067 16.678-1.948 1.924a.489.489 0 0 1-.819-.466l.808-3.248a1 1 0 0 1 .29-.49l2.8-2.609a1 1 0 0 1 .587-.264l.314-.03a11 11 0 0 0 2.085-.404l.847-.251a2 2 0 0 0 .916-.578l1.314-1.457a1 1 0 0 1 .456-.288l.137-.041a1 1 0 0 1 .422-.033l3.112.422a1 1 0 0 0 .567-.09l2.808-1.347a11 11 0 0 0 1.97-1.215l.86-.666a.637.637 0 0 1 .89.9L21.432 7.78a7.48 7.48 0 0 1-4.244 2.666l-2.961.66c-.922.205-1.814.528-2.653.961l-1.51.779a2 2 0 0 1-.917.222H6.792a1 1 0 0 0-.876.517l-1.332 2.41a3 3 0 0 1-.517.683Z\"/>";

export const BsSpanishWells = /*#__PURE__*/ defineComponent({
  name: 'GeoBsSpanishWells',
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
