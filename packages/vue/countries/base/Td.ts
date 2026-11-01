// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.097 20.04 1.543 2.191a1 1 0 0 0 1.073.391l3.243-.857a3 3 0 0 0 .962-.448l4.072-2.87a1 1 0 0 0 .288-1.32l-.809-1.394a1 1 0 0 1-.09-.8l.812-2.602a.6.6 0 0 1 .588-.42l.544.013a.6.6 0 0 0 .615-.6V7.237a1 1 0 0 0-.539-.887L8.734 1.333a.6.6 0 0 0-.52-.016l-.68.303a.6.6 0 0 0-.328.732l.92 2.849a2 2 0 0 1 .093.72l-.223 4.22a1 1 0 0 1-.266.629l-2.32 2.496a.6.6 0 0 0-.032.779l1.547 1.97a1 1 0 0 1 .156.286l.868 2.466a.3.3 0 0 1-.2.389l-1.488.423a.3.3 0 0 0-.164.461Z\"/>";

export const Td = /*#__PURE__*/ defineComponent({
  name: 'GeoTd',
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
