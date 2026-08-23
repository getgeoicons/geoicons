// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.795 5.673a.6.6 0 0 0-.207.873l4.77 6.798a2 2 0 0 1 .35.926l.343 3.051a2 2 0 0 1-.157 1.029l-.334.758a2 2 0 0 0-.159 1.01l.086.834a2 2 0 0 0 .546 1.18l.123.128a.8.8 0 0 0 .722.233l.924-.17a2 2 0 0 1 .688-.005l1.656.274c.222.037.449.036.67-.003l1.048-.183a1.42 1.42 0 0 0 1.175-1.457l-.016-.383a1 1 0 0 1 .41-.848l2.209-1.614a1 1 0 0 1 .583-.192l1.798-.013a2 2 0 0 0 1.168-.387l1.036-.758a3 3 0 0 0 .98-1.23l.207-.478a3 3 0 0 0 .175-1.841l-.015-.069a3 3 0 0 0-.412-.982l-.413-.636a2 2 0 0 1-.274-1.524l.837-3.755a4 4 0 0 0 .088-1.132l-.012-.189a4 4 0 0 0-.6-1.86l-.834-1.334a.6.6 0 0 0-.657-.264l-1.433.364a4 4 0 0 0-1.232.548l-3.39 2.256a3 3 0 0 1-2.469.393l-2.811-.786a7 7 0 0 0-2.921-.18l-.514.077a7 7 0 0 0-2.28.76z\"/>";

export const DmSaintPaul = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintPaul',
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
