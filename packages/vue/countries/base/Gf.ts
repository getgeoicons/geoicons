// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.417 2.704.28-1.001a.5.5 0 0 1 .636-.342l5.976 1.944a.5.5 0 0 1 .199.122l2.501 2.501a.5.5 0 0 0 .133.095l3.436 1.694a.5.5 0 0 1 .242.26l.967 2.373a.5.5 0 0 1-.053.474l-3.751 5.38a.5.5 0 0 0-.056.104l-1.44 3.675a.5.5 0 0 1-.125.184l-2.442 2.266a.5.5 0 0 1-.596.063l-1.385-.826a.5.5 0 0 0-.376-.056l-1.178.291a.5.5 0 0 1-.314-.024l-.885-.373a.5.5 0 0 0-.49.057l-1.49 1.091a.5.5 0 0 1-.43.078L4.55 22.39a.5.5 0 0 1-.118-.05l-1.322-.775 1.06-.646a.5.5 0 0 0 .178-.184l1.114-2.007a.5.5 0 0 0 .06-.288l-.152-1.667a.5.5 0 0 1 .065-.297l1.203-2.073a.5.5 0 0 0-.088-.613l-1.266-1.207a.5.5 0 0 1-.122-.183L4.06 9.523a.5.5 0 0 1-.033-.166L3.93 5.783a.5.5 0 0 1 .126-.346l2.253-2.535a.5.5 0 0 0 .108-.198Z\"/>";

export const Gf = /*#__PURE__*/ defineComponent({
  name: 'GeoGf',
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
