// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.096 3.695.305-1.722a.6.6 0 0 0-.644-.703l-6.428.58a4 4 0 0 0-1.369.375L8.817 3.251a1 1 0 0 0-.519 1.214l.704 2.147a.8.8 0 0 1-.565 1.025l-1.353.34a1 1 0 0 0-.515.317l-1.7 1.977a1 1 0 0 1-.69.346l-.993.068a2 2 0 0 0-.895.28l-.982.59a.3.3 0 0 0-.145.258v1.325c0 .1.05.194.132.25L12.6 20.986a1 1 0 0 1 .369.454l.366.904a.6.6 0 0 0 .667.365l1.928-.362a2 2 0 0 0 .789-.334l5.58-3.958a.6.6 0 0 0 .106-.882l-1.796-2.08a1 1 0 0 1-.24-.713l.17-2.837c.016-.28-.006-.56-.067-.832l-.561-2.517a3 3 0 0 0-.538-1.16l-.859-1.132a1 1 0 0 1-.025-1.175l.443-.638a1 1 0 0 0 .164-.395Z\"/>";

export const Dz = /*#__PURE__*/ defineComponent({
  name: 'GeoDz',
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
