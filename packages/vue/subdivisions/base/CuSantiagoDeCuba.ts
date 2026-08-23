// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.399 16.187a.6.6 0 0 0 .724.465l2.924-.683 6.704-.63 5.78.268c.383.018.763.08 1.132.185l1.69.479c.285.081.582.12.879.113l1.064-.021a.3.3 0 0 0 .255-.448l-1.045-1.842a2 2 0 0 1-.257-1.124l.117-1.706a2 2 0 0 1 .535-1.23l.451-.481a.6.6 0 0 0 .16-.458l-.084-1.073a.6.6 0 0 0-.808-.515l-4.435 1.655a.8.8 0 0 1-.764-.112L14.61 7.654a.8.8 0 0 0-.862-.068l-3.212 1.722a1 1 0 0 0-.513.709l-.47 2.684a1 1 0 0 1-.58.743l-1.365.602a2 2 0 0 1-1.173.137l-1.728-.32a1 1 0 0 0-.583.067l-2.48 1.085a.6.6 0 0 0-.347.67z\"/>";

export const CuSantiagoDeCuba = /*#__PURE__*/ defineComponent({
  name: 'GeoCuSantiagoDeCuba',
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
