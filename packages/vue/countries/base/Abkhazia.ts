// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m21.429 11.166-.727.287a1 1 0 0 0-.623 1.069l.517 3.699a1 1 0 0 1-.353.909l-2.955 2.442a.6.6 0 0 1-.969-.336l-.666-3.107a1 1 0 0 0-.69-.749l-1.842-.55a1 1 0 0 1-.61-.517l-.786-1.593a2 2 0 0 0-.616-.731l-1.31-.954a2 2 0 0 0-.83-.354l-3.864-.68a1 1 0 0 1-.745-.589l-.685-1.589a1 1 0 0 0-.4-.46L1.666 6.39a.6.6 0 0 1-.229-.774l.514-1.065a1 1 0 0 1 .697-.544l.732-.152a1 1 0 0 1 .526.032l2.164.736a1 1 0 0 0 .718-.028l.566-.244a1 1 0 0 1 .914.064l3.334 2.022a1 1 0 0 0 .424.14l2.564.244a2 2 0 0 1 1.153.508l1.04.942a2 2 0 0 0 1.356.518l3.737-.026a.6.6 0 0 1 .554.84l-.451 1.034a1 1 0 0 1-.55.53Z\"/>";

export const Abkhazia = /*#__PURE__*/ defineComponent({
  name: 'GeoAbkhazia',
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
