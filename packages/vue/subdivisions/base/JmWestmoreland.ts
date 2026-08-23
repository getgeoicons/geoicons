// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.403 7.917a1 1 0 0 0-.837-.549l-3.67-.207a.6.6 0 0 1-.27-.082l-2.83-1.668a.6.6 0 0 0-.3-.083L8.44 5.277a.6.6 0 0 0-.46.208l-1.51 1.75a.6.6 0 0 1-.542.2L3.302 7.05a1 1 0 0 0-.965.415l-.82 1.17a1 1 0 0 0-.104.96l.363.87a1 1 0 0 0 .696.588l1.97.457q.576.135 1.106.4l1.21.605a1 1 0 0 0 .782.048l1.546-.55a3 3 0 0 1 1.11-.172l3.588.126a2.27 2.27 0 0 1 2.176 2.015l.126 1.125a1 1 0 0 0 .46.733l.783.496c.314.199.588.454.81.753l.555.753a.6.6 0 0 0 1.044-.144l.764-2.013a.6.6 0 0 0-.033-.497l-.374-.693a.6.6 0 0 1 .069-.671l2.211-2.63a1 1 0 0 0 .128-1.094z\"/>";

export const JmWestmoreland = /*#__PURE__*/ defineComponent({
  name: 'GeoJmWestmoreland',
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
