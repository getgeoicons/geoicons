// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.72 2.747a.6.6 0 0 0-.492-.67L17.17 1.55a15 15 0 0 0-4.048-.146l-.467.047A12.4 12.4 0 0 0 8.79 2.487a1.65 1.65 0 0 0-.934 1.17l-.19.926A2 2 0 0 1 5.652 6.18l-1.274-.035a.8.8 0 0 0-.786.562l-.21.679a.8.8 0 0 0 .318.902l1.098.736a2 2 0 0 1 .737.903l.977 2.386a3 3 0 0 0 .614.942l1.862 1.937a3 3 0 0 1 .542.782l1.664 3.468a1 1 0 0 1-.137 1.078l-.626.741a.6.6 0 0 0-.094.62l.17.407a.6.6 0 0 0 .742.338l6.817-2.25a.6.6 0 0 0 .407-.49z\"/>";

export const JmSaintJames = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintJames',
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
