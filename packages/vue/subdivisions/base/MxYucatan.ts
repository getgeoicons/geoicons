// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.419 9.391a1 1 0 0 0-.217.627l.008 1.887a.6.6 0 0 0 .43.573l2.265.667a1 1 0 0 1 .523.366l4.653 6.318a.6.6 0 0 0 .888.087l3.797-3.464a3 3 0 0 1 .793-.52l3.552-1.596a2 2 0 0 0 .585-.4l2.408-2.375q.202-.199.34-.446l1.095-1.952a2 2 0 0 0 .256-.998l-.03-2.996a.6.6 0 0 0-.46-.578l-3.416-.82a2 2 0 0 0-1.119.051C13.394 5.3 10.602 5.908 5.844 6.574a3 3 0 0 0-.879.262l-1.804.857a3 3 0 0 0-1.062.843z\"/>";

export const MxYucatan = /*#__PURE__*/ defineComponent({
  name: 'GeoMxYucatan',
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
