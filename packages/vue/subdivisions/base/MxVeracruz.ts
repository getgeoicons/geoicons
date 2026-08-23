// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.891 4.222V2.336a1 1 0 0 1 .767-.972l.546-.131a1 1 0 0 1 .786.14l.982.65a1 1 0 0 1 .246.233L6.854 4.43a2 2 0 0 1 .372.854l.448 2.535a2 2 0 0 0 .48.988l2.372 2.641a3 3 0 0 1 .396.558l1.955 3.55a1 1 0 0 0 .825.517l2.084.105a1 1 0 0 1 .737.382l1.015 1.297a1 1 0 0 0 .863.381l1.175-.089a1 1 0 0 1 .855.371l1.549 1.93a1 1 0 0 1 .215.528l.043.436a1 1 0 0 1-.388.893l-.285.219a1 1 0 0 1-.608.205h-3.395a1 1 0 0 1-.746-.334l-.74-.829a1 1 0 0 0-1.015-.297l-.826.23a1 1 0 0 1-.974-.253l-.008-.009a1 1 0 0 1-.267-.946l.107-.44A1 1 0 0 0 12.7 18.8l-1.77-1.254a1 1 0 0 0-1.146-.007l-.141.098a1 1 0 0 1-.954.099l-1.1-.46a1 1 0 0 1-.614-.912l-.055-4.91a1 1 0 0 0-.547-.88l-1.435-.729a1 1 0 0 0-.99.048l-.51.326A.991.991 0 0 1 2.08 8.833l.613-.92a1 1 0 0 0 .105-.906l-.78-2.083a2 2 0 0 1-.128-.702Z\"/>";

export const MxVeracruz = /*#__PURE__*/ defineComponent({
  name: 'GeoMxVeracruz',
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
