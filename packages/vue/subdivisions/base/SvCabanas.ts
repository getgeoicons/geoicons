// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.212 17.06a1 1 0 0 0 .588.014l3.749-1.053a6 6 0 0 1 2.077-.207l1.845.14c.596.046 1.183.18 1.74.399l1.094.43a1 1 0 0 1 .521.468l.412.79a.6.6 0 0 0 .592.319l1.943-.198a.6.6 0 0 0 .51-.412l1.406-4.335a1 1 0 0 0-.02-.675l-.58-1.469a2 2 0 0 1-.094-1.151l.236-1.103a1 1 0 0 0-.333-.974l-.398-.336a1 1 0 0 0-.745-.23l-1.024.102a1 1 0 0 1-.628-.146l-2.095-1.304a2 2 0 0 0-1.788-.163L6.51 9.388a2 2 0 0 1-.72.139l-2.509.015a1 1 0 0 0-.662.257l-.916.824a1 1 0 0 0-.325.627l-.107.918a1 1 0 0 0 .442.95L3.71 14.44a1 1 0 0 1 .445.752l.046.557a1 1 0 0 0 .68.866z\"/>";

export const SvCabanas = /*#__PURE__*/ defineComponent({
  name: 'GeoSvCabanas',
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
