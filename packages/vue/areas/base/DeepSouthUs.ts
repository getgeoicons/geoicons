// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.245 13.548 1.2 11.144l3.176.05.081-3.39h2.166v1.388a.6.6 0 0 0 .298.519l.773.45c.15.088.32.135.493.137l1.986.02.024-2.514c1.74.166 8.243-.764 11.65-1.256a.6.6 0 0 1 .631.35l.156.353a.6.6 0 0 1-.12.663l-2.408 2.456a1 1 0 0 0-.285.729l.025.876a1 1 0 0 0 .125.457l1.116 2.012a1 1 0 0 1 .118.358l.12.937a.902.902 0 0 1-1.671.574l-.813-1.375a1 1 0 0 1-.132-.39l-.07-.584a1 1 0 0 0-.261-.563l-.418-.447a1 1 0 0 0-.707-.318l-2.205-.053a1 1 0 0 0-.92.554l-.19.382a.6.6 0 0 1-.673.317l-1.88-.439a1 1 0 0 0-.768.133l-1.57 1.01a1 1 0 0 0-.46.855l.016 1.11a.6.6 0 0 1-.816.568L7 16.769a.6.6 0 0 1-.351-.365l-.7-2.044a1 1 0 0 0-1.245-.63l-.398.125a1 1 0 0 1-1.06-.307Z\"/>";

export const DeepSouthUs = /*#__PURE__*/ defineComponent({
  name: 'GeoDeepSouthUs',
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
