// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.14 11.022-3.144 1.11a1 1 0 0 0-.403.265L1.737 14.41a.775.775 0 0 0 1.118 1.071l1.784-1.795a1 1 0 0 1 .468-.266l1.887-.469a.93.93 0 0 1 .874.236.93.93 0 0 0 .492.25l.838.143a.595.595 0 0 0 .676-.738.595.595 0 0 1 .621-.744l.537.041a.6.6 0 0 1 .548.517l.01.068a.6.6 0 0 0 .575.519l3.247.104a.6.6 0 0 0 .601-.746l-.058-.233a.6.6 0 0 1 .368-.707l.622-.237a1 1 0 0 1 .32-.065l4.787-.18a.736.736 0 0 0-.009-1.472l-2.678-.068a1 1 0 0 1-.478-.136l-1.49-.868a1 1 0 0 0-.824-.084l-.746.252a1 1 0 0 1-.631.003l-2.081-.681a1 1 0 0 0-.74.047l-.968.46a1 1 0 0 1-.703.058l-.497-.141a1 1 0 0 0-.416-.029l-.58.083a1 1 0 0 0-.813.692l-.101.326a1 1 0 0 1-.138.278l-.534.757a1 1 0 0 1-.484.366Z\"/>";

export const SeaOfMarmara = /*#__PURE__*/ defineComponent({
  name: 'GeoSeaOfMarmara',
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
