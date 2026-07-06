// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.4 20.447-.624.443a.5.5 0 0 1-.783-.328l-.206-1.266a.5.5 0 0 0-.472-.42l-.448-.019a.5.5 0 0 0-.521.485l-.02.713a.5.5 0 0 1-.743.423l-1.384-.767a.5.5 0 0 1-.132-.77l.45-.506a.5.5 0 0 0 .127-.336l-.013-1.725a.5.5 0 0 0-.292-.451l-5.532-2.53a.5.5 0 0 1-.28-.345l-.435-1.95a.5.5 0 0 0-.202-.3L6.32 9a.5.5 0 0 0-.61.028l-.27.229a.5.5 0 0 0-.031.734l1.68 1.687a.5.5 0 0 1 .03.672l-.506.61a.5.5 0 0 1-.785-.019l-.99-1.32a.5.5 0 0 0-.315-.193l-1.695-.293a.5.5 0 0 1-.371-.288L1.431 8.564a.5.5 0 0 1 .12-.575l1.19-1.084a.5.5 0 0 0 0-.738L1.562 5.088a.5.5 0 0 1-.037-.7L2.82 2.921a.5.5 0 0 1 .578-.126l3.61 1.609a.5.5 0 0 0 .457-.025l1.234-.723a.5.5 0 0 1 .488-.01l4.055 2.157a.5.5 0 0 0 .52-.031l1.29-.898a.5.5 0 0 1 .72.16l2.97 5.143a.5.5 0 0 0 .126.145l3.059 2.377a.5.5 0 0 1-.213.885l-1.484.284a.5.5 0 0 0-.406.49l-.004.925a.5.5 0 0 0 .15.359l1.045 1.03a.5.5 0 0 1 .019.692l-.726.798a.5.5 0 0 0-.108.485l.387 1.244a.5.5 0 0 1-.188.556Z\"/>";

export const Cr = /*#__PURE__*/ defineComponent({
  name: 'GeoCr',
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
