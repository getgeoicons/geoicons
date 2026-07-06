// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.115 7.315 1.2 7.27l.028 2.29a1 1 0 0 0 .046.287l.292.932a1 1 0 0 0 .54.611l8.995 4.095a1 1 0 0 0 .816.006l1.392-.61a1 1 0 0 1 .815.006l.585.265q.175.08.307.218l.62.645a1 1 0 0 0 1.407.036l.788-.743a1 1 0 0 0 .302-.883l-.207-1.312 2.484-.297a1 1 0 0 0 .768-.53l1.405-2.693a1 1 0 0 0 .035-.85l-.024-.058a1 1 0 0 0-1.094-.598l-2.516.438a1 1 0 0 0-.79.712l-.412 1.446a1 1 0 0 1-.644.675l-2.841.95a1 1 0 0 1-.795-.07l-1.245-.675a1 1 0 0 1-.433-.467z\"/>";

export const SouthernMexico = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthernMexico',
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
