// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.917 16.574-.22-.268a.6.6 0 0 1 .222-.929l1.477-.656a.6.6 0 0 1 .762.247l.184.316a.6.6 0 0 1-.286.854l-1.441.609a.6.6 0 0 1-.698-.173Zm3.555-3.094.32-1.194a1 1 0 0 1 .557-.653l4.175-1.876a4 4 0 0 1 1.192-.327l4.863-.547a.6.6 0 0 1 .666.62l-.008.195a.6.6 0 0 1-.48.564l-4.7.954c-.398.08-.782.221-1.137.418L6.342 14.16a.6.6 0 0 1-.87-.68Zm15.421-5.896-1.748 2.272a.6.6 0 0 0 .114.844l.053.04a.6.6 0 0 0 .75-.02l2.205-1.866a.6.6 0 0 0 .007-.91l-.511-.446a.6.6 0 0 0-.87.086Z\"/>";

export const HnBayIslands = /*#__PURE__*/ defineComponent({
  name: 'GeoHnBayIslands',
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
