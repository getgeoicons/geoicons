// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.604 22.8-7.13-7.319.845-1.609a1 1 0 0 0 .106-.592l-.21-1.628a1 1 0 0 0-.148-.408L8.877 9.37a1 1 0 0 1-.155-.551l.061-4.063a1 1 0 0 0-.43-.837l-.703-.486a1 1 0 0 1-.423-.704l-.032-.268a1 1 0 0 1 .714-1.079l.181-.053a1 1 0 0 1 .832.127l1.353.898a1 1 0 0 1 .382.477l1.088 2.858a.6.6 0 0 0 .794.34l1.454-.612a.6.6 0 0 1 .77.286l.165.333a.6.6 0 0 1-.14.719l-1.033.907a.6.6 0 0 0 .026.922l.845.663a1 1 0 0 1 .33.466l.73 2.153a1 1 0 0 1 .05.387l-.188 2.852a1 1 0 0 0 .057.404l1.227 3.413a1 1 0 0 1 .056.42z\"/>";

export const CoromandelPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoCoromandelPeninsula',
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
