// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.728 6.83a1 1 0 0 0 .69 1.174l2.562.765a1 1 0 0 1 .308.154l1.558 1.151a1 1 0 0 1 .337 1.168l-.861 2.207a1 1 0 0 0-.069.358l-.045 8.29a.6.6 0 0 0 .69.596l8.626-1.322a1 1 0 0 1 .475.042l2.533.867a2 2 0 0 0 .843.098l2.342-.23a.6.6 0 0 0 .54-.585l.216-10.355-.413-3.526a1 1 0 0 0-.562-.786l-.887-.425a1 1 0 0 0-.812-.023l-.545.224a1 1 0 0 1-1.285-.499l-1.213-2.579a1 1 0 0 0-.624-.534l-5.807-1.699a2 2 0 0 0-1.103-.006l-3.47.977-2.78 1.018a1 1 0 0 0-.633.723z\"/>";

export const TtPrincesTown = /*#__PURE__*/ defineComponent({
  name: 'GeoTtPrincesTown',
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
