// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.954 10.446 5.247 4.96c.245.23.544.397.87.482l1.213.316a2 2 0 0 1 .889.501l2.466 2.397a6 6 0 0 0 1.294.957l4.589 2.518a1 1 0 0 0 .838.058l.575-.22a1 1 0 0 0 .592-1.25L19.85 16.14a3 3 0 0 0-.725-1.172l-4.952-4.952a4 4 0 0 0-.982-.72L10.568 7.93a4 4 0 0 1-1.011-.75l-1.62-1.654a3 3 0 0 1-.493-.668l-.454-.836a3 3 0 0 0-.894-1.012L4.117 1.6a.954.954 0 0 0-1.28 1.394l.4.47a2 2 0 0 1 .367.647l.61 1.776a1 1 0 0 1-.067.801L2.762 9.242a1 1 0 0 0 .192 1.204Z\"/>";

export const Aw = /*#__PURE__*/ defineComponent({
  name: 'GeoAw',
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
