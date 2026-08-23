// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.67 4.047a.3.3 0 0 0-.3-.297H1.742a.3.3 0 0 0-.254.46l1.033 1.645a.3.3 0 0 0 .325.132l1.597-.388a.6.6 0 0 1 .662.285l1.93 3.363a1 1 0 0 0 .377.374l1.009.567a1 1 0 0 1 .494.694l.062.343a1 1 0 0 1-.066.574l-.46 1.067a1 1 0 0 0 .124 1.002l1.974 2.587a1 1 0 0 1 .201.693l-.053.617a1 1 0 0 0 .279.782l1.5 1.546a3 3 0 0 0 .927.649l.53.237a1 1 0 0 0 1.076-.168l.382-.341a1 1 0 0 1 .673-.256l6.308.04a.3.3 0 0 0 .284-.4l-.492-1.382a2 2 0 0 0-.51-.78l-3.587-3.395a1 1 0 0 1-.313-.718z\"/>";

export const CaBritishColumbia = /*#__PURE__*/ defineComponent({
  name: 'GeoCaBritishColumbia',
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
