// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z\"/><path d=\"M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z\"/>";

export const Tk = /*#__PURE__*/ defineComponent({
  name: 'GeoTk',
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
