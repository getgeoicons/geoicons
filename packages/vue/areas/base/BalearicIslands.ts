// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.6 6.847 9.778 9.535a.6.6 0 0 0 .169 1.065l1.367.42a1 1 0 0 1 .365.204l1.445 1.266a1 1 0 0 0 1.485-.188l1.613-2.367a1 1 0 0 0-.012-1.144l-1.22-1.707a1 1 0 0 0-1.388-.237ZM2.131 14.285l-.585.946a1 1 0 0 0 .029 1.097l.807 1.16a1 1 0 0 0 .618.408l.337.07a1 1 0 0 0 1.13-1.353l-.167-.415a1 1 0 0 1-.067-.47l.088-.906a1 1 0 0 0-1.238-1.067l-.344.086a1 1 0 0 0-.608.444ZM20.4 5.657H19a.877.877 0 0 0-.865.968c.05.537.518 1.051 1.056 1.027l.448-.02a1 1 0 0 1 .782.325l.572.626a.879.879 0 0 0 1.331-1.147l-1.146-1.41a1 1 0 0 0-.776-.37Z\"/>";

export const BalearicIslands = /*#__PURE__*/ defineComponent({
  name: 'GeoBalearicIslands',
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
