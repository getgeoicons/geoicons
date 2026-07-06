// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.718 21.104-.088.05a1 1 0 0 1-1.09-.072l-.45-.337a1 1 0 0 1-.357-.513l-.185-.616a1 1 0 0 1 .01-.603l.555-1.667a1 1 0 0 0 .036-.142l.65-3.661a1 1 0 0 1 .05-.18l1.005-2.648a1 1 0 0 1 .464-.527l.417-.222a1 1 0 0 0 .286-1.536l-.778-.9a1 1 0 0 0-1.507-.008l-1.313 1.49a1 1 0 0 1-.527.314l-1.666.38a1 1 0 0 1-.362.016L4.724 9.28a1 1 0 0 1-.36-.123l-2.27-1.304a1 1 0 0 1-.355-1.39l.95-1.549a1 1 0 0 1 .495-.41l3.213-1.232a1 1 0 0 1 .358-.066h3.273a1 1 0 0 0 .355-.065l1.233-.468a1 1 0 0 1 .761.021l.962.428a1 1 0 0 1 .489.466l.428.856a1 1 0 0 0 .244.313l7.284 6.227a1 1 0 0 1 .302.45l.634 1.953a1 1 0 0 1 .03.505l-.335 1.672a1 1 0 0 1-.191.418l-.473.607a1 1 0 0 1-.643.376l-1.51.221a1 1 0 0 1-.38-.017l-1.633-.396a1 1 0 0 0-.432-.008l-2.306.46a1 1 0 0 0-.75.655l-.923 2.678a1 1 0 0 1-.455.546Z\"/>";

export const CarpathianRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoCarpathianRegion',
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
