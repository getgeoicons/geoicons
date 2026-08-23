// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.986 22.8-.36-1.715a3 3 0 0 1-.014-1.153l.83-4.563c.056-.307.159-.603.306-.878l1.85-3.459a1 1 0 0 0 .117-.529l-.092-1.613a1 1 0 0 1 .575-.963l2.159-1.007a1 1 0 0 0 .563-.742l.368-2.212.396-2.382a.3.3 0 0 0-.295-.35L6.212 1.202a.3.3 0 0 0-.298.34l.61 4.494a2 2 0 0 1-.171 1.119l-.877 1.868a2 2 0 0 0-.19.837l-.026 4.105a.6.6 0 0 0 .252.493l.887.632a.6.6 0 0 1 .251.507l-.21 6.725a.3.3 0 0 0 .29.309z\"/>";

export const UsVermont = /*#__PURE__*/ defineComponent({
  name: 'GeoUsVermont',
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
