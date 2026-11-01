// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.29 17.889 9.61 16.32a1 1 0 0 1-.387-.41l-.929-1.83a1 1 0 0 0-.917-.548l-.944.025a1 1 0 0 1-.898-.51l-1.236-2.2a2 2 0 0 0-.456-.55l-1.68-1.415a1 1 0 0 1-.347-.63l-.565-4.165a.926.926 0 0 1 1.463-.873L4.31 4.377a2 2 0 0 0 .581.292l.24.075a2 2 0 0 1 1.074.807l.603.912a1 1 0 0 1 .165.524l.033 1.248a3 3 0 0 0 .443 1.49l.398.648a3 3 0 0 0 .676.768l1.845 1.484a3 3 0 0 0 1.401.624l3.981.644a3 3 0 0 1 1.16.45l1.15.75a3 3 0 0 1 .915.938l1.148 1.864q.151.245.347.457l1.93 2.098a.3.3 0 0 1-.186.5l-2.836.329a1 1 0 0 1-.649-.148l-2.256-1.422a3 3 0 0 0-.426-.223z\"/>";

export const Cw = /*#__PURE__*/ defineComponent({
  name: 'GeoCw',
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
