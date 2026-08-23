// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.157 4.398a1 1 0 0 1-.08.442L6.65 17.447a.6.6 0 0 0 .275.77l1.5.777a3 3 0 0 0 1.226.332l3.512.18a1 1 0 0 1 .924.779l.236 1.044a1 1 0 0 0 .366.573l.825.634a1 1 0 0 0 .771.194l.393-.065a.796.796 0 0 0 .278-1.47l-.222-.132a1 1 0 0 1-.48-.984l.7-5.564a3 3 0 0 0-.018-.88l-.294-1.72a2 2 0 0 0-.625-1.142l-.583-.531a2 2 0 0 1-.604-1.037l-.615-2.716a2 2 0 0 1-.035-.683l.43-3.547a.83.83 0 0 0-1.518-.554l-.815 1.245a1 1 0 0 0-.162.595z\"/>";

export const LcLaborie = /*#__PURE__*/ defineComponent({
  name: 'GeoLcLaborie',
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
