// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.732 13.678 6.28 7.626a2 2 0 0 1 .75-.61l.534-.25a2 2 0 0 1 1.458-.094l3.453 1.104a3 3 0 0 0 .914.143h3.961a2 2 0 0 1 1.026.283l.749.447a1 1 0 0 1 .47 1.043l-.185.983a1 1 0 0 0 .196.803l.07.088a1 1 0 0 0 .889.377l.696-.072a1 1 0 0 1 1.095.87l.32 2.554a1 1 0 0 1-.872 1.117l-3.555.43q-.284.035-.57.028l-3.263-.072a4 4 0 0 1-1.23-.223l-.842-.294a1 1 0 0 0-.841.085l-.816.486a3 3 0 0 1-.88.35l-.732.163a3 3 0 0 1-1.767-.142l-1.341-.536a2 2 0 0 0-.794-.142l-1.266.033a1 1 0 0 1-.719-.28L1.838 15a1 1 0 0 1-.106-1.322Z\"/>";

export const Bt = /*#__PURE__*/ defineComponent({
  name: 'GeoBt',
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
