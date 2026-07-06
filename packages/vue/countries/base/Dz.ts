// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.937 21.292 1.41 13.225a.5.5 0 0 1-.214-.403l-.015-1.208a.5.5 0 0 1 .32-.473l4.766-1.849a.5.5 0 0 0 .306-.581l-.125-.527a.5.5 0 0 1 .451-.614l1.574-.112a.5.5 0 0 0 .438-.659l-.918-2.728a.5.5 0 0 1 .307-.63l6.149-2.173a.5.5 0 0 1 .162-.029l4.065-.033a.5.5 0 0 1 .47.683l-1.037 2.637a.5.5 0 0 0 .047.457l1.555 2.367q.066.102.08.222l.801 7.606a.5.5 0 0 0 .149.306l1.658 1.613a.5.5 0 0 1-.054.762L16.9 21.834a.5.5 0 0 1-.165.08l-2.8.754a.5.5 0 0 1-.615-.36l-.186-.73a.5.5 0 0 0-.198-.286Z\"/>";

export const Dz = /*#__PURE__*/ defineComponent({
  name: 'GeoDz',
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
