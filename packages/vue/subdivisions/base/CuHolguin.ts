// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.097 16.32a1 1 0 0 0 1.164-.069l.659-.533a1 1 0 0 1 1.274.014l.892.753a1 1 0 0 0 .954.188l3.414-1.107a1 1 0 0 1 1.023.252l.66.675a1 1 0 0 0 1.05.243l.841-.3a2 2 0 0 1 .71-.116l2.639.051a1 1 0 0 0 .922-.568l.08-.167a1 1 0 0 0-.45-1.323l-1.467-.743a2 2 0 0 0-.673-.202l-5.03-.586a1 1 0 0 1-.613-.308l-.848-.902a.8.8 0 0 1-.112-.945l.12-.21a.8.8 0 0 0-.105-.937l-.205-.224a2 2 0 0 0-1.96-.59l-2.083.52a1 1 0 0 1-.884-.203l-1.99-1.665a.3.3 0 0 0-.472.121l-.352.904a2 2 0 0 1-.535.769l-1.035.92a1 1 0 0 1-.595.251l-.793.055a.8.8 0 0 0-.734.67l-.277 1.694a.8.8 0 0 0 .362.806z\"/>";

export const CuHolguin = /*#__PURE__*/ defineComponent({
  name: 'GeoCuHolguin',
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
