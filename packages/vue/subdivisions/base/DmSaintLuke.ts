// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.976 8.196a.6.6 0 0 0-.384-.6L4.63 1.453a.6.6 0 0 0-.802.433l-1.06 4.902a2 2 0 0 0 .17 1.323l.858 1.7a3 3 0 0 1 .296.962l.165 1.26a3 3 0 0 0 .167.669l.756 2.002a3 3 0 0 1 .192 1.108l-.034 2.095a1 1 0 0 0 .262.69l1.841 2.018 1.825 1.603a.6.6 0 0 0 .96-.247l.79-2.19a1 1 0 0 1 .527-.571l3.76-1.71 5.714-3.353a.6.6 0 0 0 .287-.627l-.34-1.811a7 7 0 0 1-.104-1.741z\"/>";

export const DmSaintLuke = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintLuke',
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
