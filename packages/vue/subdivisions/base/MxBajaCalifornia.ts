// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.68 1.67a.3.3 0 0 0-.302-.42l-8.575.83a.3.3 0 0 0-.246.42l5.366 12.17a1 1 0 0 0 .283.372l5.636 4.595a1 1 0 0 1 .361.665l.247 2.231a.3.3 0 0 0 .299.267h4.507a.3.3 0 0 0 .296-.35l-.207-1.23a1 1 0 0 0-.38-.63l-2.108-1.604a1 1 0 0 1-.351-.505l-.473-1.556a1 1 0 0 0-.28-.445l-3.007-2.761a1 1 0 0 1-.319-.644l-.631-6.751a1 1 0 0 0-.14-.423l-.8-1.329a1 1 0 0 1-.057-.923z\"/>";

export const MxBajaCalifornia = /*#__PURE__*/ defineComponent({
  name: 'GeoMxBajaCalifornia',
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
