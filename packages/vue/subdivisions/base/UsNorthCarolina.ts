// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.09 7.948a.3.3 0 0 0-.238.113l-.779.983a1 1 0 0 1-.401.303L1.79 11.366a.6.6 0 0 0-.36.442l-.09.476a.6.6 0 0 0 .613.711l2.255-.09a2 2 0 0 0 .56-.103l1.392-.47c.229-.078.469-.113.71-.105l2.383.082a.6.6 0 0 1 .472.258l.328.47a.6.6 0 0 0 .477.257l1.94.05a.6.6 0 0 1 .412.179l2.275 2.315a.6.6 0 0 0 .51.174l.967-.135a.6.6 0 0 0 .433-.287l.639-1.072a1 1 0 0 1 .697-.474l1.642-.269a1 1 0 0 0 .837-.926l.024-.39a1 1 0 0 1 .486-.798l.688-.41a1 1 0 0 0 .425-1.21l-.602-1.602a.6.6 0 0 0-.557-.39z\"/>";

export const UsNorthCarolina = /*#__PURE__*/ defineComponent({
  name: 'GeoUsNorthCarolina',
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
