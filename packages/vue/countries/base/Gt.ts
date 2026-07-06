// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.975 3.78.04-2.077a.5.5 0 0 1 .499-.49l8.344-.012a.5.5 0 0 1 .5.517l-.314 9.012a.5.5 0 0 0 .505.517l2.583-.025a.5.5 0 0 1 .258.069l1.198.703a.5.5 0 0 1 .025.847l-4.1 2.742a.5.5 0 0 0-.223.433l.078 2.219a.5.5 0 0 1-.172.395l-4.609 3.992a.5.5 0 0 1-.466.102l-2.322-.67a.5.5 0 0 0-.117-.02l-3.392-.15a.5.5 0 0 1-.262-.088l-4.015-2.773a.5.5 0 0 1-.2-.538l.563-2.146a.5.5 0 0 0-.041-.359l-.485-.925a.5.5 0 0 1 .006-.476l2.08-3.736a.5.5 0 0 1 .439-.257l5.968.028a.5.5 0 0 0 .494-.407l.187-.99a.5.5 0 0 0-.169-.475L6.034 4.66a.25.25 0 0 1 .172-.44l1.249.05a.5.5 0 0 0 .52-.49Z\"/>";

export const Gt = /*#__PURE__*/ defineComponent({
  name: 'GeoGt',
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
