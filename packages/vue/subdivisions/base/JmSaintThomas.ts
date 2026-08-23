// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.955 7.109a.6.6 0 0 0-.979.396l-.17 1.528a1 1 0 0 0 .068.487l.537 1.318a1 1 0 0 1-.042.843l-.882 1.671a1 1 0 0 0 .07 1.047l1.697 2.383a1 1 0 0 0 .72.415l3.57.341c.425.041.854.013 1.27-.082l3.425-.781a2 2 0 0 1 1.104.061l1.92.67a1 1 0 0 0 .65.003l4.299-1.454a3 3 0 0 1 1.023-.158l.35.007a1 1 0 0 0 1.005-1.172l-.016-.095a1 1 0 0 0-.91-.824l-.448-.034a1 1 0 0 1-.826-.567l-.665-1.393a1 1 0 0 0-1.058-.558l-1.193.188a2 2 0 0 1-1.019-.104l-5.733-2.168a2 2 0 0 0-.88-.122l-3.804.331a1 1 0 0 1-.724-.226z\"/>";

export const JmSaintThomas = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintThomas',
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
