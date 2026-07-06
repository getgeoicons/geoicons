// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.211 9.026 1.2 8.556l2.675 4.762a.5.5 0 0 0 .195.193l2.23 1.222a.5.5 0 0 1 .244.316l.222.88a.5.5 0 0 0 .485.378h1.094l.637 2.758a.5.5 0 0 0 .258.332l3.217 1.66q.076.038.162.05l5.333.729 3.07-3.16a.5.5 0 0 0 .095-.14l1.588-3.488a.5.5 0 0 0-.002-.42l-.65-1.385a.5.5 0 0 1-.028-.348l.754-2.664a.5.5 0 0 0 .019-.157l-.177-4.339a.5.5 0 0 0-.338-.452l-4.199-1.439a.5.5 0 0 0-.162-.027h-2.34V2.164L11.714 3.17a.5.5 0 0 0-.374.484v1.588a.5.5 0 0 1-.316.465l-2.749 1.09a.5.5 0 0 0-.216.165l-1.4 1.867a.5.5 0 0 1-.447.198Z\"/>";

export const Zw = /*#__PURE__*/ defineComponent({
  name: 'GeoZw',
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
