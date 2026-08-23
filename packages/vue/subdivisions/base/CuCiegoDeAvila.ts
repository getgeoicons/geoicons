// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.784 10.307a.95.95 0 0 0-.647-.873l-3.62-1.208a2 2 0 0 1-1.108-.911l-.184-.325a2 2 0 0 0-.906-.832l-7.2-3.302a2 2 0 0 0-.741-.18l-1.979-.091a1 1 0 0 0-.959.59L2.963 8.7a.6.6 0 0 0 .243.763l1.283.755a.6.6 0 0 1 .28.65l-.356 1.557a.6.6 0 0 1-.612.466l-.674-.031a.6.6 0 0 0-.591.394l-1.141 3.13a.6.6 0 0 0 .327.756l2.334.999a.6.6 0 0 1 .339.724l-.319 1.06a.3.3 0 0 0 .344.38l3.81-.729a1 1 0 0 1 .866.247L10.373 21a1 1 0 0 0 1.086.177l2.79-1.248a2 2 0 0 0 .715-.54l2.837-3.38a.6.6 0 0 1 .878-.043l.508.495a.6.6 0 0 0 .795.037l.88-.709a.6.6 0 0 0 .076-.861L19.59 13.38a.6.6 0 0 1 .18-.929l2.499-1.276a.95.95 0 0 0 .516-.87Z\"/>";

export const CuCiegoDeAvila = /*#__PURE__*/ defineComponent({
  name: 'GeoCuCiegoDeAvila',
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
