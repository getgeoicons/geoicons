// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.601 4.335a.6.6 0 0 0-.496.776l2.256 7.163q.074.23.108.469l.988 6.789a.6.6 0 0 0 .776.485l2.824-.902a1 1 0 0 1 1.03.265l.308.325a1 1 0 0 1 .165 1.14l-.37.729a.596.596 0 0 0 .485.865l3.545.279a2.8 2.8 0 0 0 2.759-1.608l2.823-6.044a1 1 0 0 0-.227-1.158L19.18 12.62a1 1 0 0 1-.264-1.07l1.001-2.82a1 1 0 0 0 .043-.505l-.312-1.804a1 1 0 0 0-.542-.727l-.683-.338a2 2 0 0 1-.95-.999l-1.14-2.638a.8.8 0 0 0-.71-.482l-.943-.03a1 1 0 0 0-.455.094l-4.53 2.115a3 3 0 0 1-.89.257z\"/>";

export const JmSaintCatherine = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintCatherine',
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
