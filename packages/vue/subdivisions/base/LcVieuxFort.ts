// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.55 1.243a.42.42 0 0 0-.322.377l-.182 2.546a1 1 0 0 0 .118.548L8.67 9.332a3 3 0 0 1 .338 1.814l-.627 4.87a1 1 0 0 0 .073.522l.764 1.784a1 1 0 0 0 .888.605l1.815.058c.267.008.526.098.742.256l.073.055a1.072 1.072 0 0 1 .138 1.606l-.333.346a.774.774 0 0 0 .435 1.302l.866.14a3 3 0 0 0 1.351-.093l.256-.078a.82.82 0 0 0 .28-1.417l-.205-.168a1.5 1.5 0 0 1-.348-1.914l2.558-4.425a1 1 0 0 0 .066-.864l-.572-1.47a4 4 0 0 0-.751-1.221L9.613 3.398a4 4 0 0 0-.626-.565L6.89 1.312a.42.42 0 0 0-.34-.07Z\"/>";

export const LcVieuxFort = /*#__PURE__*/ defineComponent({
  name: 'GeoLcVieuxFort',
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
