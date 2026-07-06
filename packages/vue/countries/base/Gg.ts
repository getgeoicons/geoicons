// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.44 18.862-.128.811a1 1 0 0 0 .528 1.044l1.935 1.004a1 1 0 0 0 .535.109l2.95-.221a1 1 0 0 0 .925-1.03l-.058-1.795a1 1 0 0 1 .366-.806l.426-.348a1 1 0 0 0 .365-.726l.039-.811a1 1 0 0 0-.894-1.043l-.723-.075a1 1 0 0 0-.612.132L1.92 18.156a1 1 0 0 0-.48.706ZM20.857 2.227l-2.035 1.184a.986.986 0 1 0 1.011 1.692l2.007-1.232a.958.958 0 0 0-.983-1.644ZM14.154 20.84l.07.207a1 1 0 0 0 1.42.564l.682-.365a1 1 0 0 0 .351-1.448l-.203-.295a1 1 0 0 0-1.461-.204l-.548.454a1 1 0 0 0-.31 1.086Z\"/>";

export const Gg = /*#__PURE__*/ defineComponent({
  name: 'GeoGg',
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
