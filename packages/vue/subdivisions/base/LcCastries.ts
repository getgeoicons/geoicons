// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.179 10.868a1 1 0 0 0 .494 1.067l1.3.724a1 1 0 0 1 .378.371l.912 1.569a.6.6 0 0 0 .86.191l.6-.415a.6.6 0 0 1 .91.302l.464 1.379a2 2 0 0 1 .075.98l-.672 3.89a.8.8 0 0 0 .122.58l.406.608a.8.8 0 0 0 1.129.208l.563-.4a.8.8 0 0 0 .334-.592l.222-2.93q.014-.172.084-.331l2.433-5.454q.06-.134.079-.279l.99-7.632a.6.6 0 0 0-.668-.673l-1.058.131a1 1 0 0 1-.985-.485l-1.033-1.755a.6.6 0 0 0-.972-.088l-.948 1.1a1 1 0 0 1-.767.347l-1.339-.012a1 1 0 0 0-.912.57l-.324.68a2 2 0 0 0-.19 1.01l.147 1.936a.6.6 0 0 1-.788.614l-.57-.19a.6.6 0 0 0-.778.454z\"/>";

export const LcCastries = /*#__PURE__*/ defineComponent({
  name: 'GeoLcCastries',
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
