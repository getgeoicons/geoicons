// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.703 4.312 2.43 2.46a.6.6 0 0 1 .36-.64l1.297-.55a.6.6 0 0 1 .342-.038c4.888.862 11.71.544 14.539.273l.731 9.474 2.133-.152.548 4.753-1.401.122.518 5.88-3.302.258a1 1 0 0 0-.382.109l-1.264.655a1 1 0 0 1-.428.112l-2.438.077a1 1 0 0 1-.44-.087l-3.245-1.45a1 1 0 0 0-.437-.087l-2.297.068-.72-1.321a1 1 0 0 0-.5-.448l-1.46-.594a.6.6 0 0 1-.316-.3l-2.34-4.954a1 1 0 0 1-.094-.382l-.207-4.686a1 1 0 0 1 .038-.321l1.009-3.497a1 1 0 0 0 .029-.422Z\"/>";

export const WestUs = /*#__PURE__*/ defineComponent({
  name: 'GeoWestUs',
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
