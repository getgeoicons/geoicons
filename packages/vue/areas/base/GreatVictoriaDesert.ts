// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.13 13.585 1.678 1.172a.6.6 0 0 0 .814-.12l1.935-2.448a1 1 0 0 1 .785-.38h2.176q.173 0 .335.058l6.45 2.3a1 1 0 0 1 .48.364l1.576 2.222a1 1 0 0 0 .554.387l3.887 1.056-.333-2.124a1 1 0 0 0-.439-.68l-3.694-2.43 2.413-.747a.6.6 0 0 0 .41-.69l-.209-1.051a1 1 0 0 0-.338-.571l-1.761-1.475a2 2 0 0 0-.927-.434l-5.97-1.086a2 2 0 0 0-1.304.206L8.022 8.522a1 1 0 0 1-1.096-.1L4.51 6.496a1 1 0 0 0-1.465.242L1.405 9.29a1 1 0 0 0-.147.694l.456 2.934a1 1 0 0 0 .416.666Z\"/>";

export const GreatVictoriaDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoGreatVictoriaDesert',
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
