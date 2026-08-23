// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.762 19.793-.015-2.956a2 2 0 0 1 .306-1.073l.233-.37a1 1 0 0 0 .08-.904l-.708-1.767a.67.67 0 0 1 .337-.854l.59-.274q.297-.14.548-.354l.043-.036a2.24 2.24 0 0 0 .691-2.348l-.021-.072a2.5 2.5 0 0 0-.787-1.197l-.244-.205a1 1 0 0 1-.21-1.285l.189-.311a2 2 0 0 0 .271-1.323l-.316-2.213a.905.905 0 0 1 .98-1.029l1.963.185a1 1 0 0 1 .504.195l2.523 1.882a1 1 0 0 1 .402.767l.059 1.724a1.007 1.007 0 0 0 1.934.352l.803-1.953a.41.41 0 0 1 .784.09l.352 2.189q.025.157.025.317v4.366a.6.6 0 0 1-.7.591l-.774-.132a.944.944 0 0 0-1.085 1.114l.035.179a2 2 0 0 0 1.085 1.41l.642.312a1 1 0 0 0 .445.101l4.66-.033a.796.796 0 0 1 .281 1.543l-1.65.607a2 2 0 0 1-.69.123h-4.544a.773.773 0 1 0 .115 1.539l1.042-.157a.83.83 0 0 1 .491.078l.037.018a.786.786 0 0 1-.305 1.488l-.884.052a2 2 0 0 0-.632.142l-.85.343a2 2 0 0 0-.84.64l-.822 1.075a1 1 0 0 1-.776.393l-1.647.03a2 2 0 0 1-.846-.17l-1.805-.8a2 2 0 0 1-.966-.908l-.109-.21a2 2 0 0 1-.224-.911Z\"/>";

export const CaQuebec = /*#__PURE__*/ defineComponent({
  name: 'GeoCaQuebec',
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
