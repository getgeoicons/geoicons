// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.2 14.011.894-9.757H9.14a1 1 0 0 1 .204.02l3.766.788-1.064 1.214a.6.6 0 0 0 .395.993l.865.082a1 1 0 0 0 .616-.143l.757-.462a1 1 0 0 1 .648-.139l2.704.346a1 1 0 0 1 .701.43l1.06 1.562a1 1 0 0 1 .145.326l.33 1.37a1 1 0 0 1-.065.657l-.298.639a.747.747 0 0 0 1.098.934l1.5-1.02.256 2.504a1 1 0 0 1-.207.718l-.713.91a1 1 0 0 1-.984.365l-1.158-.232a1 1 0 0 0-.84.216l-3.611 3.041a1 1 0 0 1-.615.235l-4.642.138-7.001-.67.298-4.916z\"/>";

export const MidwestUs = /*#__PURE__*/ defineComponent({
  name: 'GeoMidwestUs',
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
