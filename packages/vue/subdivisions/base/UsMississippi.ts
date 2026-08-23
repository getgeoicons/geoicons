// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.97 9.71a4 4 0 0 0 .26 1.145l.696 1.799a1 1 0 0 1-.126.953L6.11 15.91a3 3 0 0 0-.542 1.294l-.226 1.392a.6.6 0 0 0 .594.696l6.542-.018-.387 1.59a.6.6 0 0 0 .063.44l.658 1.144a.6.6 0 0 0 .604.295l3.617-.51a.6.6 0 0 0 .516-.617l-.252-6.671a1 1 0 0 1 .005-.146l1.395-12.887a.6.6 0 0 0-.593-.665l-7.674-.044a1 1 0 0 0-.9.551L7.033 6.721a2 2 0 0 0-.207 1.049z\"/>";

export const UsMississippi = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMississippi',
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
