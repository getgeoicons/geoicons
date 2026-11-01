// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.617 22.788-1.838-.06a.3.3 0 0 1-.29-.32l.618-9.143.055-7.013a.6.6 0 0 1 .81-.557l.876.325a.6.6 0 0 0 .732-.268l2.12-3.776a1 1 0 0 1 1.259-.432l1.904.796a1 1 0 0 1 .611 1.001l-.105 1.327a3 3 0 0 1-.238.958l-.882 2.03a2 2 0 0 0-.08 1.373l.245.813a1 1 0 0 1-.008.6l-.336 1.026a2 2 0 0 0 0 1.249l.154.466a3 3 0 0 1-.158 2.26l-1.856 3.78a1 1 0 0 1-.512.482l-.696.29a2 2 0 0 0-.99.9l-.846 1.577a.6.6 0 0 1-.549.316Z\"/>";

export const Bz = /*#__PURE__*/ defineComponent({
  name: 'GeoBz',
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
