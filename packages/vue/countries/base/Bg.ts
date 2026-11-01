// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.952 18.516 3.956-.455a2 2 0 0 1 .976.131l1.496.602a2 2 0 0 0 1.07.119l2.237-.367a.6.6 0 0 0 .494-.695l-.089-.513a.6.6 0 0 1 .343-.649l3.082-1.404a.6.6 0 0 1 .65.1l.808.728a.6.6 0 0 0 .62.113l.729-.284a.6.6 0 0 0 .27-.908l-.864-1.21a1 1 0 0 1-.013-1.145l.61-.894a1 1 0 0 0 .172-.632l-.054-.791a1 1 0 0 1 .861-1.059l.963-.132a.6.6 0 0 0 .519-.589l.008-.843a.6.6 0 0 0-.388-.567l-3.459-1.31a3 3 0 0 0-1.358-.18l-2.25.224a3 3 0 0 0-1.716.76l-.6.542a2 2 0 0 1-1.562.505L3.857 6.87a.3.3 0 0 1-.264-.34l.116-.812a.3.3 0 0 0-.206-.328l-.99-.315a.3.3 0 0 0-.362.157l-.625 1.315a1 1 0 0 0 .062.97L3.02 9.744a1 1 0 0 1-.351 1.413l-.498.28a1 1 0 0 0-.49.667l-.356 1.704a1 1 0 0 0 .354.985l1.309 1.05a1 1 0 0 1 .372.843l-.075 1.197a.6.6 0 0 0 .667.634Z\"/>";

export const Bg = /*#__PURE__*/ defineComponent({
  name: 'GeoBg',
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
