// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.17 14.844a2 2 0 0 1 1.42-.488l3.757.201a1 1 0 0 0 .864-.412l1.75-2.42a1 1 0 0 1 1.36-.25l3.006 1.976a.8.8 0 0 0 1.225-.52l.107-.56a1 1 0 0 1 .416-.639l1.07-.735a.8.8 0 0 0 .211-1.107L22 9.36a.8.8 0 0 0-.809-.339l-2.516.466a1 1 0 0 1-.828-.22L15.209 7.03a1 1 0 0 0-.96-.187l-1.514.5a1 1 0 0 1-.653-.01L8.576 6.07a1 1 0 0 0-1.079.267L5.033 9.043a1 1 0 0 0-.256.583l-.248 2.761a2 2 0 0 1-.587 1.244l-2.118 2.092a.8.8 0 0 0 .047 1.181l.966.813a.8.8 0 0 0 1.04-.008z\"/>";

export const HnElParaiso = /*#__PURE__*/ defineComponent({
  name: 'GeoHnElParaiso',
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
