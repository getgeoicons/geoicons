// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.289 8.659a1 1 0 0 0-1.08-.679l-3.798.497a2 2 0 0 1-.971-.114l-.77-.293a2 2 0 0 0-.922-.12l-2.567.27a2 2 0 0 0-.933.347l-5.61 3.905a1 1 0 0 0-.428.84l.034 1.785a.6.6 0 0 0 .527.584l3.32.407a.6.6 0 0 0 .526-.201l1.848-2.122a1 1 0 0 1 .758-.343l5.254.024c.174 0 .344.046.494.133l3.356 1.928a1 1 0 0 0 .416.13l4.424.364a.56.56 0 0 0 .39-1L21.2 13.94a3 3 0 0 1-.755-.868l-1.484-2.575a3 3 0 0 1-.25-.559z\"/>";

export const JmHanover = /*#__PURE__*/ defineComponent({
  name: 'GeoJmHanover',
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
