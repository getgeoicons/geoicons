// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m1.844 12.24-.16.261a1.287 1.287 0 0 0 1.164 1.956l2-.102a1 1 0 0 1 .792.328l.9.995a1 1 0 0 0 .723.328l4.834.095a2 2 0 0 0 .946-.217l2.985-1.52q.376-.19.788-.27l4.092-.796a1 1 0 0 0 .59-.357l.62-.776a1 1 0 0 0-.226-1.457L19.195 8.91a3 3 0 0 0-1.128-.456l-2.195-.4a3 3 0 0 0-1.755.211l-1.094.486a1 1 0 0 1-.603.067l-2.091-.422a3 3 0 0 0-1.44.064l-3.192.94a3 3 0 0 0-.974.494l-2.458 1.878a1.7 1.7 0 0 0-.421.468Z\"/>";

export const BsNewProvidence = /*#__PURE__*/ defineComponent({
  name: 'GeoBsNewProvidence',
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
