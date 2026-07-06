// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.476 6.113 5.628 7.12a1 1 0 0 0-.236.644v.145a1 1 0 0 0 .15.527l1.742 2.809a1 1 0 0 1 .134.35l.294 1.63a1 1 0 0 0 .225.475l1.592 1.852a1 1 0 0 1 .238.741l-.46 5.124a1 1 0 0 0 .338.842l.083.072a1 1 0 0 0 1.154.116l.364-.208a1 1 0 0 1 .402-.127l1.384-.13a.6.6 0 0 0 .54-.666l-.087-.762a1 1 0 0 1 .945-1.112l1.253-.06a1 1 0 0 0 .47-.145l1.762-1.07a1 1 0 0 0 .425-1.185l-1.707-4.87a1 1 0 0 0-.994-.668l-3.414.172-.233-6.523a1 1 0 0 0-.018-.155l-.429-2.206a1 1 0 0 0-.673-.76l-2.063-.67a1 1 0 0 0-.632.006l-.932.319a1 1 0 0 0-.567 1.4l.149.292a1 1 0 0 1 .1.585L6.702 5.6a1 1 0 0 1-.226.513Z\"/>";

export const Mo = /*#__PURE__*/ defineComponent({
  name: 'GeoMo',
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
