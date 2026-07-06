// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.216 12.068.787 2.603a.5.5 0 0 0 .294.32l5.624 2.236a.5.5 0 0 1 .145.088l5.707 5.002a.5.5 0 0 0 .282.122l3.439.328a.5.5 0 0 0 .5-.284l.87-1.84a.5.5 0 0 1 .534-.28l3.496.583-2.169-2.653a.5.5 0 0 1-.113-.322l.023-2.046a.5.5 0 0 0-.155-.368l-4.991-4.75a.5.5 0 0 1-.105-.58l2.078-4.282a.5.5 0 0 0-.335-.705l-1.621-.383a.5.5 0 0 1-.342-.284l-1.13-2.552a.5.5 0 0 0-.391-.294L9.947 1.24a.5.5 0 0 0-.472.205L8.347 3.021a.5.5 0 0 1-.257.186l-1.143.36a.5.5 0 0 0-.35.454L6.41 8.086a.5.5 0 0 1-.231.4L1.427 11.5a.5.5 0 0 0-.211.567Z\"/>";

export const Iq = /*#__PURE__*/ defineComponent({
  name: 'GeoIq',
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
