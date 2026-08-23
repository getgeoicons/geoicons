// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.725 22.528 2.373 1.658a.3.3 0 0 1 .36-.353l9.27 2.13a2 2 0 0 1 .84.418l1.462 1.23a1 1 0 0 0 .816.22l1.172-.205a2 2 0 0 1 1.041.096l4.104 1.524a.3.3 0 0 1 .175.39l-.41 1.06a1.6 1.6 0 0 0-.006 1.143c.184.494.201 1.034.05 1.54l-.04.133a2.83 2.83 0 0 1-.868 1.33l-.087.076a3 3 0 0 0-1.019 1.857l-.435 3.077a3 3 0 0 1-.804 1.654l-2.063 2.155a1 1 0 0 1-.882.296l-1.794-.29a3 3 0 0 0-2.031.394l-1.09.658a2 2 0 0 1-.774.272l-2.302.3a.3.3 0 0 1-.333-.235Z\"/>";

export const KnSaintGeorgeGingerland = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintGeorgeGingerland',
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
