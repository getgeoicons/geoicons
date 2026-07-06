// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.966 22.402-2.037-1.253a1 1 0 0 1-.315-1.395l.724-1.12a1 1 0 0 0 .139-.749l-.253-1.2a1 1 0 0 0-1.199-.77l-2.68.605a1 1 0 0 1-.96-.302l-2.313-2.54a.9.9 0 0 1 .256-1.408l2.857-1.46a1 1 0 0 0 .512-1.145l-1.341-5.08a.6.6 0 0 1 .257-.66l3.681-2.352a1 1 0 0 1 1.139.043l.723.542a1 1 0 0 0 .806.179l4.027-.848a1 1 0 0 1 1.082.497l.957 1.741a1 1 0 0 1 .094.725l-.358 1.432a1 1 0 0 0 .089.714l1.506 2.812a1 1 0 0 1-.196 1.201l-.846.795a1 1 0 0 0-.28.468l-.62 2.294a1 1 0 0 0 .303 1.01l.725.64a.6.6 0 0 1 .157.678l-1.543 3.747a1 1 0 0 1-.748.603l-1.682.302a1 1 0 0 0-.502.25l-.958.886a1 1 0 0 1-1.203.118Z\"/>";

export const VisegradRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoVisegradRegion',
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
