// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.096 21.075-3.225 1.52a.5.5 0 0 1-.656-.22l-3.221-6.143a.5.5 0 0 1-.055-.281l.352-3.592a.5.5 0 0 0-.373-.533l-.564-.146a.5.5 0 0 1-.368-.573l.385-2.118a.5.5 0 0 0-.159-.464c-.471-.423-1.633-1.477-2.375-2.254a.49.49 0 0 1-.11-.48l.438-1.433a.5.5 0 0 1 .564-.347l1.96.343a.5.5 0 0 1 .406.398l.235 1.23a.5.5 0 0 0 .566.4l4.844-.734a.5.5 0 0 0 .425-.48l.096-3.216a.5.5 0 0 1 .681-.451l1.712.667a.5.5 0 0 0 .378-.006l1.963-.842a.5.5 0 0 1 .516.075l.794.657a.5.5 0 0 1 .172.483l-.762 3.823a.5.5 0 0 0 .357.58l2.912.803a.5.5 0 0 1 .367.49l-.033 2.11a.5.5 0 0 1-.191.385l-3.523 2.77a.5.5 0 0 0-.185.317l-.32 2.06a.5.5 0 0 1-.282.377l-.92.43a.5.5 0 0 0-.22.198l-2.363 3.999a.5.5 0 0 1-.218.198Z\"/>";

export const Bi = /*#__PURE__*/ defineComponent({
  name: 'GeoBi',
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
