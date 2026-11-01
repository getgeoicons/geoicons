// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.877 13.24.43-.338a1 1 0 0 0 .272-1.247L4.982 8.571a3 3 0 0 1-.315-1.734l.197-1.653a2 2 0 0 0-.049-.731l-.152-.596a1 1 0 0 0-.881-.749l-.723-.063a1 1 0 0 0-1.078.859l-.7 5.041a2 2 0 0 0 .174 1.13l.429.907a2 2 0 0 0 .657.781l2.144 1.508a1 1 0 0 0 1.192-.031Zm1.52 5.923.452.755a1 1 0 0 0 .668.467l1.777.344 1.3.19a.899.899 0 0 0 .49-1.714l-3.412-1.488a1 1 0 0 0-1.013.127l-.019.015a1 1 0 0 0-.244 1.304Zm10.344-1.862 4.042 2.728a.6.6 0 0 0 .934-.537l-.269-3.973a.6.6 0 0 0-.786-.53l-3.773 1.245a.6.6 0 0 0-.148 1.067Z\"/>";

export const Km = /*#__PURE__*/ defineComponent({
  name: 'GeoKm',
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
