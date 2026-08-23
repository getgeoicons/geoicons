// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.098 10.925a.6.6 0 0 0-.459-.647L18.205 9.7a3 3 0 0 0-.879-.075l-2.376.148a4 4 0 0 1-.857-.039L9.95 9.098a3 3 0 0 0-.977.01l-3.8.67a.742.742 0 0 1-.279-1.456l2.03-.421a.841.841 0 0 0-.297-1.655l-2.778.422a2 2 0 0 0-.849.34l-.136.096a2 2 0 0 0-.797 1.176l-.718 3.04a.6.6 0 0 0 .493.732l1.444.22a1 1 0 0 0 .68-.14l.477-.297a1 1 0 0 1 .766-.123l1.59.388a1 1 0 0 1 .743 1.173l-.06.294a.6.6 0 0 0 .617.72l4.07-.203a1 1 0 0 0 .634-.268l.441-.413a1 1 0 0 1 .775-.265l4.787.44a1 1 0 0 1 .776.499l1.983 3.46a.6.6 0 0 0 .494.302l.061.003a.6.6 0 0 0 .627-.59l.045-2.716a1 1 0 0 0-.31-.74l-1.178-1.122a1 1 0 0 1-.305-.83z\"/>";

export const HtNippes = /*#__PURE__*/ defineComponent({
  name: 'GeoHtNippes',
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
