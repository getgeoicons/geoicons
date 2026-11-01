// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.602 8.868.708-.889a2 2 0 0 1 1.5-.753l2.148-.07a4 4 0 0 0 1.046-.174l3.036-.935a1 1 0 0 0 .672-.698l.192-.722a.6.6 0 0 1 1.034-.238l.705.815a1 1 0 0 0 .803.344l1.314-.061a3 3 0 0 1 1.359.255l2.546 1.132a3 3 0 0 1 1.147.896l2.035 2.608c.19.243.341.515.448.805l.268.724a2 2 0 0 1 .031 1.295l-1.004 3.184c-.107.34-.274.658-.493.94l-.274.351a3 3 0 0 1-2.008 1.137l-3.966.478a2 2 0 0 1-.637-.026l-1.517-.308a2 2 0 0 0-1.292.171L9.19 20.235a2 2 0 0 1-.983.21l-1.402-.064a1 1 0 0 1-.912-.707l-.266-.875a1 1 0 0 0-.268-.434L2.963 16.09a3 3 0 0 1-.713-1.045l-.328-.804a3 3 0 0 1-.202-1.478l.19-1.638a1 1 0 0 0-.104-.572l-.311-.606a1 1 0 0 1 .107-1.08Z\"/>";

export const Bv = /*#__PURE__*/ defineComponent({
  name: 'GeoBv',
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
