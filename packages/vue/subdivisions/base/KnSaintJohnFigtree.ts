// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.52 9.822-3.086.415a.3.3 0 0 0-.196.482l3.143 4.01a2 2 0 0 1 .425 1.31l-.034.878a.6.6 0 0 0 .196.468l4.641 4.213a2 2 0 0 0 .67.402l1.822.653a1 1 0 0 0 .796-.052l.896-.463a1 1 0 0 1 .583-.104l.884.11a1 1 0 0 0 .903-.364l.67-.834a1 1 0 0 1 .45-.317l3.553-1.237a.3.3 0 0 0 .195-.345L18.429 1.964a.3.3 0 0 0-.553-.089L14.222 8.17a1 1 0 0 1-.84.498l-2.02.049a2 2 0 0 0-.768.174l-1.933.864a2 2 0 0 1-.97.169l-1.541-.12a3 3 0 0 0-.63.018Z\"/>";

export const KnSaintJohnFigtree = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintJohnFigtree',
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
