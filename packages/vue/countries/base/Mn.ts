// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.033 11.336-1.174-.799a.5.5 0 0 1 .033-.847l2.391-1.375a.5.5 0 0 1 .445-.027l2.778 1.18a.5.5 0 0 0 .686-.366l.31-1.606a.5.5 0 0 1 .656-.378l1.423.501a.5.5 0 0 1 .265.219l.528.898a.5.5 0 0 0 .542.234l1.275-.29a.5.5 0 0 1 .304.026l2.754 1.15a.5.5 0 0 0 .391-.004l2.165-.937a.5.5 0 0 1 .328-.024l1.468.391-.823 1.29a.5.5 0 0 0-.005.53l.066.107a.5.5 0 0 0 .585.214l.855-.285a.5.5 0 0 1 .51.12l.759.753a.389.389 0 0 1-.252.664l-1.23.072a.5.5 0 0 0-.239.076L18.81 14.1a.5.5 0 0 1-.321.074l-.72-.077a.5.5 0 0 0-.51.295l-.656 1.485a.5.5 0 0 1-.333.282l-3.44.889a.5.5 0 0 1-.21.009l-5.14-.87a.5.5 0 0 1-.341-.23l-.647-1.048a.5.5 0 0 0-.257-.208l-2.47-.881a.5.5 0 0 1-.33-.417l-.185-1.708a.5.5 0 0 0-.216-.359Z\"/>";

export const Mn = /*#__PURE__*/ defineComponent({
  name: 'GeoMn',
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
