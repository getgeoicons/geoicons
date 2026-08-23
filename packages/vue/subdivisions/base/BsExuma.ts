// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.385 6.44-.851-.925a.721.721 0 0 0-1.229.667l1.017 3.96a1 1 0 0 0 .937.751l.477.015a6.9 6.9 0 0 1 4.534 1.89l.421.4a.78.78 0 0 1-.373 1.328l-4.936 1.058a.698.698 0 0 0 .25 1.374l7.435-1.101a1 1 0 0 1 .61.103l1.578.826q.22.114.459.173l7.937 1.917a.742.742 0 0 0 .438-1.414l-6.57-2.501a2 2 0 0 0-.585-.127l-1.675-.107a1 1 0 0 1-.758-.427l-1.1-1.586a1 1 0 0 0-.708-.423l-.445-.05a1 1 0 0 1-.681-.387L7.614 9.3a3 3 0 0 0-.887-.778L4.097 7.01a3 3 0 0 1-.712-.57Z\"/>";

export const BsExuma = /*#__PURE__*/ defineComponent({
  name: 'GeoBsExuma',
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
