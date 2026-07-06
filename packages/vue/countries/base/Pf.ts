// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.379 9.545 2.013 8.407a1 1 0 0 1-.296-.417l-.07-.187A1 1 0 0 1 2.46 6.46l2.209-.272a1 1 0 0 1 .825.281l.046.046a1 1 0 0 1 .154 1.226L4.75 9.314a.915.915 0 0 1-1.37.231Zm6.106 1.202-.062-1.425a1 1 0 0 1 .403-.846l.913-.678a1 1 0 0 1 .208-.118l1.642-.69a1 1 0 0 1 .59-.058l1.521.314a1 1 0 0 1 .166.05l1.876.742a1 1 0 0 1 .5.432l.724 1.264a1 1 0 0 1 .11.706l-.168.792a1 1 0 0 0-.018.288l.073.907a1 1 0 0 0 .862.91l1.135.154q.107.015.207.051l1.494.544a1 1 0 0 1 .283.16l.48.384a1 1 0 0 1 .376.78v1.047a1 1 0 0 1-.244.654l-.267.308a1 1 0 0 1-.977.32l-1.505-.34a1 1 0 0 1-.458-.242l-.906-.838a1 1 0 0 1-.219-.293l-.574-1.17a1 1 0 0 0-1.126-.532l-2.495.585a1 1 0 0 1-.563-.03l-2.394-.85a1 1 0 0 1-.598-.581l-.922-2.384a1 1 0 0 1-.067-.317Z\"/>";

export const Pf = /*#__PURE__*/ defineComponent({
  name: 'GeoPf',
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
