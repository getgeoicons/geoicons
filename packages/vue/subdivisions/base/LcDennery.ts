// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.567 21.63a.6.6 0 0 0 .843.662l4.83-2.272a1 1 0 0 1 .897.023l2.87 1.534a1 1 0 0 0 1.158-.156l1.946-1.843a1 1 0 0 1 1.085-.191l1.164.504a1 1 0 0 0 .582.066l3.555-.665a1 1 0 0 0 .809-.86l.058-.462a1 1 0 0 0-.263-.807l-.65-.695a1 1 0 0 1-.164-1.13l.383-.768a1 1 0 0 0-.407-1.32l-.316-.177a1 1 0 0 1-.504-1.002l.061-.473a1 1 0 0 1 .549-.767l1.856-.918a1 1 0 0 0 .555-.822l.162-2.197q.045-.607-.016-1.212l-.227-2.272a1 1 0 0 0-.79-.88l-3.12-.656a2 2 0 0 0-1.272.151l-.963.459a1 1 0 0 1-.845.007l-2.317-1.056a2 2 0 0 0-1.08-.164l-2.035.257a2 2 0 0 0-.827.3L7.66 2.77a.6.6 0 0 0-.27.595l.228 1.515a2 2 0 0 1-.127 1.058L6.764 7.71a2 2 0 0 1-.687.867l-1.113.796a1 1 0 0 0-.412.704l-.431 3.895a1 1 0 0 1-.293.603l-1.864 1.833a1 1 0 0 0-.292.83l.252 2.127a2 2 0 0 1-.026.632z\"/>";

export const LcDennery = /*#__PURE__*/ defineComponent({
  name: 'GeoLcDennery',
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
