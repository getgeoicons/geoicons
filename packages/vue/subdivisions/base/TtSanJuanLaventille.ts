// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.38 11.421a.6.6 0 0 0 .219.875l1.072.554a.6.6 0 0 1 .303.694l-.612 2.188a1 1 0 0 0 .06.698l2.617 5.507a.6.6 0 0 0 1.009.118l.876-1.088a.7.7 0 0 1 .506-.257l1.366-.062a.6.6 0 0 0 .56-.724l-1.015-4.8a1 1 0 0 1-.016-.314l.318-2.923a1 1 0 0 0-.045-.423l-.93-2.807a1 1 0 0 1 .434-1.172l.498-.3a1 1 0 0 1 .656-.132l3.419.489a.6.6 0 0 0 .685-.594V4.47a1 1 0 0 1 .219-.625l.968-1.21a.6.6 0 0 0-.195-.91l-.63-.322a.6.6 0 0 0-.709.121l-1.46 1.538a1 1 0 0 1-.591.302l-1.378.188a1 1 0 0 0-.627.342l-.765.897a1 1 0 0 1-1.1.292L9.246 4.42a1 1 0 0 0-.988.18l-.98.836a1 1 0 0 0-.35.766l.013 2.648a1 1 0 0 1-.177.574z\"/>";

export const TtSanJuanLaventille = /*#__PURE__*/ defineComponent({
  name: 'GeoTtSanJuanLaventille',
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
