// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.35 11.226a1 1 0 0 0 .018.767l.799 1.8a.89.89 0 0 0 1.36.342l.58-.451a1 1 0 0 1 1.127-.069l4.433 2.651a2 2 0 0 0 1.465.235l2.26-.508a2 2 0 0 1 1.116.069l5.79 2.08a2 2 0 0 0 .966.097l.695-.102a.6.6 0 0 0 .443-.874L19.1 11.02a1 1 0 0 0-.555-.476l-5.526-1.927a1 1 0 0 0-.367-.055l-2.873.109a1 1 0 0 1-.78-.33l-.618-.685a1 1 0 0 0-.908-.317l-1.06.178a1 1 0 0 1-.811-.223L4.19 6.1a.6.6 0 0 0-.947.24z\"/>";

export const JmPortland = /*#__PURE__*/ defineComponent({
  name: 'GeoJmPortland',
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
