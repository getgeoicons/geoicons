// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.273 7.662a2 2 0 0 1 0-1.703l.306-.65a.8.8 0 0 0-.242-.98l-1.389-1.048a1 1 0 0 0-1.111-.062l-.79.466a1 1 0 0 0-.49.838l-.049 2.133a2 2 0 0 1-.438 1.204l-.727.91a2 2 0 0 1-1.42.745l-5.014.357a2 2 0 0 0-.837.25l-1.247.7a1 1 0 0 1-1.157-.128l-2.093-1.88a1 1 0 0 0-1.348.01L2.8 9.22a6 6 0 0 0-1.051 1.287l-.063.104a1 1 0 0 0 .277 1.336l3.75 2.65q.383.271.693.622l2.012 2.284q.358.407.812.703l2.13 1.394 1.385 1.207a1 1 0 0 0 .835.23l2.001-.361a2 2 0 0 0 1.344-.914l2.258-3.64a3 3 0 0 1 1.417-1.197l1.536-.627a1 1 0 0 0 .62-.988l-.154-2.493a2 2 0 0 0-.186-.728z\"/>";

export const NiChinandega = /*#__PURE__*/ defineComponent({
  name: 'GeoNiChinandega',
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
