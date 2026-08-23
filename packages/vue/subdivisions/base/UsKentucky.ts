// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.251 13.518a.6.6 0 0 0 .118-.884l-.908-1.07a1 1 0 0 1-.236-.588l-.023-.392a2 2 0 0 0-.346-1.011l-.42-.616a1 1 0 0 0-.95-.428l-1.393.174a1 1 0 0 1-.648-.141l-1.784-1.1a1 1 0 0 0-1.032-.01l-1.651.97a1 1 0 0 0-.334.32l-1.228 1.906a1 1 0 0 1-.766.456l-4.595.343a.6.6 0 0 0-.488.323l-1.229 2.374a.6.6 0 0 1-.643.314l-.885-.166a.6.6 0 0 0-.661.353L1.567 16a.6.6 0 0 0 .563.837l15.548-.304a.6.6 0 0 0 .328-.105z\"/>";

export const UsKentucky = /*#__PURE__*/ defineComponent({
  name: 'GeoUsKentucky',
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
