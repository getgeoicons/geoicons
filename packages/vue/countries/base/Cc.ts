// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"M6.412 16.034a.875.875 0 0 1 1.167.59l.91 3.44.125.467.47-.107.965-.221a.874.874 0 1 1 .366 1.71l-1.834.364a1.194 1.194 0 0 1-1.375-.827L5.894 17.1a.875.875 0 0 1 .518-1.066Zm7.162-3.378a.86.86 0 0 1 1.197.316l3.22 5.792a1.19 1.19 0 0 1-.416 1.596l-1.895 1.167a.872.872 0 1 1-.89-1.498l1.169-.67.439-.252-.258-.435-2.86-4.844a.86.86 0 0 1 .294-1.172ZM7.364 1.7a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246Z\"/>";

export const Cc = /*#__PURE__*/ defineComponent({
  name: 'GeoCc',
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
