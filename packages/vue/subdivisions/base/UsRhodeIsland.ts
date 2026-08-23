// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.717 20.285-.31 2.085a.3.3 0 0 0 .362.337l8.03-1.762a1 1 0 0 0 .619-.422l1.037-1.556a1 1 0 0 1 .588-.415l3.198-.807a1 1 0 0 1 .794.134l.39.256a1 1 0 0 0 1.167-.05l.94-.738a.3.3 0 0 0 .113-.257l-.339-4.883a.3.3 0 0 0-.172-.251l-1.667-.778a1 1 0 0 1-.365-.29l-1.853-2.374a1 1 0 0 1-.212-.615V4.866l-1.42.16-.029-3.518a.3.3 0 0 0-.31-.297l-8.898.318a.3.3 0 0 0-.29.309l.35 11.568-.225 5.813a.3.3 0 0 1-.2.271l-.903.318a.6.6 0 0 0-.395.477Z\"/>";

export const UsRhodeIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoUsRhodeIsland',
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
