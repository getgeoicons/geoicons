// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.968 1.9-.326-.239a1 1 0 0 0-1.229.036l-1.057.876a1 1 0 0 0-.3 1.118l1.82 4.914a1 1 0 0 0 .896.651l2.067.085a1 1 0 0 1 .874.595l1.307 2.958a1 1 0 0 1-.016.842l-.395.811a1 1 0 0 0 .113 1.056l.907 1.156q.222.281.528.469l4.698 2.88a2 2 0 0 1 .619.596l.993 1.49c.22.33.67.407.986.17.368-.276.385-.856.133-1.24-1.024-1.566-1.834-4.83-2.076-6.87-.045-.38-.416-.642-.795-.589-2.864.398-3.949-1.918-4.21-3.627a1.27 1.27 0 0 0-.646-.92C9.265 7.703 7.847 4.37 7.362 2.494a1.06 1.06 0 0 0-.394-.594Z\"/>";

export const BsBerryIslands = /*#__PURE__*/ defineComponent({
  name: 'GeoBsBerryIslands',
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
