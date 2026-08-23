// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.61 8.375a.3.3 0 0 0-.185-.437l-1.078-.286a.3.3 0 0 1-.223-.293l.02-1.728a.6.6 0 0 0-.85-.553L16.324 6.9a1 1 0 0 1-1.03-.118l-1.712-1.325a1 1 0 0 0-.483-.2l-5.515-.72a.8.8 0 0 0-.695.255l-.59.648a1 1 0 0 1-1.063.272l-1.294-.443a1 1 0 0 0-1.273.633L1.503 9.44a1 1 0 0 0 .608 1.253l1.289.469a1 1 0 0 1 .618.66l.254.872a1 1 0 0 1-.394 1.102l-.734.506a.863.863 0 0 0 .211 1.529l4.631 1.578a2 2 0 0 0 .932.086l5.47-.793a1 1 0 0 1 1.121.782l.282 1.33a.6.6 0 0 0 .53.473l1.968.191a.6.6 0 0 0 .586-.312l2.006-3.713a1 1 0 0 0-.03-1l-.562-.912a1 1 0 0 1-.02-1.017z\"/>";

export const GtAltaVerapaz = /*#__PURE__*/ defineComponent({
  name: 'GeoGtAltaVerapaz',
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
