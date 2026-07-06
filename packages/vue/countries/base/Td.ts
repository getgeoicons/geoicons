// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.973 22.488-1.725-2.084a.5.5 0 0 1 .23-.794l.952-.311a.5.5 0 0 0 .332-.584l-.591-2.663a.5.5 0 0 0-.125-.234L5.43 14.103a.5.5 0 0 1-.038-.641l2.226-2.99a.5.5 0 0 0 .096-.253l.418-4.558a.5.5 0 0 0-.022-.199L7.08 2.268a.5.5 0 0 1 .273-.61l.809-.36a.5.5 0 0 1 .433.013l9.995 5.188a.5.5 0 0 1 .27.444v4.516a.5.5 0 0 1-.5.5h-.975a.5.5 0 0 0-.457.297l-.84 1.894a.5.5 0 0 0-.015.368l1.088 3.108a.5.5 0 0 1-.24.608l-8.329 4.377a.5.5 0 0 1-.618-.123Z\"/>";

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
