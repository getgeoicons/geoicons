// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.037 4.386a.3.3 0 0 0-.325.313l.037.746a.3.3 0 0 1-.373.305l-3.598-.907a.6.6 0 0 0-.493.092l-.492.348a.6.6 0 0 0-.068.923L4.683 9.04a.3.3 0 0 1 .019.414l-.615.706a.3.3 0 0 0 .078.458l5.384 3.063a.3.3 0 0 1 .109.416l-.499.821a.3.3 0 0 0 .114.42l7.27 3.949a.6.6 0 0 0 .864-.36l.982-3.396a.6.6 0 0 1 .815-.384l1.387.604a.6.6 0 0 0 .66-.122l1.124-1.102a.6.6 0 0 0 .012-.845l-1.616-1.674a1 1 0 0 0-1.086-.237l-1.752.69a1 1 0 0 1-.99-.149l-.736-.587a.88.88 0 0 1-.308-.882.88.88 0 0 0-.535-1.012l-3.206-1.259a.6.6 0 0 1-.327-.804l.94-2.093a.6.6 0 0 0-.496-.844z\"/>";

export const DoIndependencia = /*#__PURE__*/ defineComponent({
  name: 'GeoDoIndependencia',
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
