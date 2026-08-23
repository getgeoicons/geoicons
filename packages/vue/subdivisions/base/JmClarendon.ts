// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.109 1.74a.3.3 0 0 0-.232.435l3.686 7.2a1.5 1.5 0 0 1 .16.818l-.12 1.335a1.5 1.5 0 0 0 .132.76l.936 2.035a.6.6 0 0 1-.42.838l-1.111.235a.533.533 0 0 0-.199.956l7.974 5.67q.204.146.436.236l.54.21a1.68 1.68 0 0 0 1.6-.214l.072-.053a1.53 1.53 0 0 0-.043-2.495l-.529-.362a1 1 0 0 1-.4-1.087l.718-2.65a3 3 0 0 0 .076-1.199l-.735-5.275a3 3 0 0 0-.094-.436L15.86 2.944a1 1 0 0 0-.77-.7l-4.96-.956a3 3 0 0 0-.92-.033z\"/>";

export const JmClarendon = /*#__PURE__*/ defineComponent({
  name: 'GeoJmClarendon',
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
