// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.256 13.902a1 1 0 0 1 .916.034l1.109.626a.6.6 0 0 0 .5.041l4.478-1.623a.6.6 0 0 0 .367-.745l-1.178-3.729a1.5 1.5 0 0 0-.766-.892l-.767-.38a1.5 1.5 0 0 0-1.09-.093l-.865.256a1.5 1.5 0 0 0-.896.729l-1.335 2.485a5.37 5.37 0 0 1-5.227 2.806l-.482-.045a3.3 3.3 0 0 1-2.248-1.195l-.4-.49a10.6 10.6 0 0 0-2.333-2.112L3.034 8.242a.92.92 0 0 0-1.103 1.47l2.434 2.052q.661.559 1.228 1.213l.695.804c.632.73 1.362 1.367 2.17 1.894l.032.02a10 10 0 0 0 2.555 1.19.55.55 0 0 0 .658-.297l.433-.956a1 1 0 0 1 .486-.492z\"/>";

export const BsWestGrandBahama = /*#__PURE__*/ defineComponent({
  name: 'GeoBsWestGrandBahama',
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
