// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.604 9.53-1.002-.39a.6.6 0 0 1-.381-.588l.1-2.049a.6.6 0 0 1 .248-.456L3.357 4.75a1 1 0 0 1 .974-.112l.722.303a3 3 0 0 0 1.408.224l.933-.077a3 3 0 0 1 .912.064l2.823.64a1 1 0 0 0 .63-.062l3.6-1.614a.6.6 0 0 1 .808.34l1.197 3.233a5 5 0 0 0 .992 1.631l1.758 1.931a.6.6 0 0 1 .123.603l-.198.564a2 2 0 0 0 .175 1.696l.031.051a2 2 0 0 0 .974.825l.693.275a1 1 0 0 1 .617.761l.128.752a7 7 0 0 1 .083 1.677l-.08 1.126a.6.6 0 0 1-.607.557l-1.836-.025a.6.6 0 0 1-.56-.406L19.416 19a2 2 0 0 0-.894-1.085l-.14-.08a2 2 0 0 0-1.18-.259l-1.18.108a.6.6 0 0 1-.584-.313l-1.341-2.503a.6.6 0 0 0-.549-.316l-2.414.08a.6.6 0 0 1-.62-.587l-.013-.613a.6.6 0 0 0-.572-.587l-3.475-.164a3 3 0 0 1-1.027-.234l-1.823-.77a1 1 0 0 1-.61-.91l-.008-.684a.6.6 0 0 0-.381-.551Z\"/>";

export const KnSaintPeterBasseterre = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintPeterBasseterre',
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
