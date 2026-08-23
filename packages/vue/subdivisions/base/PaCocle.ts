// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.555 15.606a.3.3 0 0 1-.112.426l-3.196 1.7a3 3 0 0 1-1.358.35l-1.952.033a2 2 0 0 0-1.382.587l-1.014 1.016a2 2 0 0 0-.584 1.405l-.005 1.278a.3.3 0 0 1-.384.287L5.61 21.24a.6.6 0 0 1-.395-.78l.624-1.721a2 2 0 0 0-.134-1.657l-2.18-3.906a.6.6 0 0 1 .162-.77l1.282-.969a2 2 0 0 0 .666-.89l.68-1.807a2 2 0 0 1 1.338-1.22l1.233-.343a1 1 0 0 0 .723-.83l.23-1.7a.6.6 0 0 1 .75-.5l2.807.752a1 1 0 0 0 1.015-.312l2.374-2.743a.6.6 0 0 1 .975.096l.94 1.656a.6.6 0 0 1 .015.563l-.66 1.33a1 1 0 0 0-.015.857l.591 1.31a3 3 0 0 1 .253.952l.44 4.656a2 2 0 0 0 .304.888z\"/>";

export const PaCocle = /*#__PURE__*/ defineComponent({
  name: 'GeoPaCocle',
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
