// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.584 18.993-1.931-3.547a3 3 0 0 1-.36-1.24l-.072-1.115a1 1 0 0 1 .158-.607l1.283-1.99a1 1 0 0 1 .73-.452l3.854-.427a.8.8 0 0 0 .558-.324l.787-1.079a.8.8 0 0 1 .504-.315l1.532-.277a2 2 0 0 0 1.342-.91l1.012-1.624a1 1 0 0 1 .84-.47l.659-.006a1 1 0 0 1 .774.356l.744.886a1 1 0 0 1 .223.796l-.123.797a.8.8 0 0 0 .383.81l2.178 1.288a2 2 0 0 1 .474.39l3.44 3.856a.541.541 0 0 1-.503.892l-2.792-.523a2 2 0 0 0-1.11.11l-3.513 1.404a2 2 0 0 1-1.307.062L9.79 14.69a1 1 0 0 0-1.216.603l-.357.934a.8.8 0 0 1-.728.514l-1.542.038a1 1 0 0 0-.952.782l-.284 1.274a.608.608 0 0 1-1.127.159Z\"/>";

export const Cf = /*#__PURE__*/ defineComponent({
  name: 'GeoCf',
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
