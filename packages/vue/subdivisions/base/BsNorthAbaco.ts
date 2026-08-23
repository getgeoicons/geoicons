// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"M8.975 9.682 2.18 8.04a.944.944 0 0 1 .406-1.843l5.811 1.157a1 1 0 0 0 .634-.082l1.513-.737a1 1 0 0 1 1.093.143l3.884 3.365a10 10 0 0 1 1.49 1.61l.612.826a10 10 0 0 0 2.075 2.08l2.154 1.6a.994.994 0 0 1-.64 1.791l-1.008-.048a1 1 0 0 1-.721-.358l-.451-.541a1 1 0 0 0-1.097-.305l-.64.223a1 1 0 0 1-1.125-.34l-.847-1.113a1 1 0 0 1-.202-.554l-.114-2.198a1 1 0 0 0-.284-.647l-2.56-2.616a1 1 0 0 0-.99-.262l-1.687.482a1 1 0 0 1-.51.01Z\"/>";

export const BsNorthAbaco = /*#__PURE__*/ defineComponent({
  name: 'GeoBsNorthAbaco',
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
