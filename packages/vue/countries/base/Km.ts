// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.469 13.484-4.022-2.772a.5.5 0 0 1-.213-.469l.758-6.658a.5.5 0 0 1 .546-.44l2.325.229a.5.5 0 0 1 .443.587L4.58 7.966a.5.5 0 0 0 .051.325l2.111 3.949a.5.5 0 0 1-.073.575l-.55.596a.5.5 0 0 1-.651.073ZM7.53 19.87l-.796-1.327a.5.5 0 0 1 .121-.652l.607-.471a.5.5 0 0 1 .507-.064l4 1.744a.5.5 0 0 1 .287.569l-.152.675a.5.5 0 0 1-.572.383l-3.658-.622a.5.5 0 0 1-.345-.235Zm14.45.481-4.186-2.825a.5.5 0 0 1 .212-.91l1.896-.259a.5.5 0 0 0 .273-.129l1.549-1.439a.5.5 0 0 1 .84.346l.195 4.781a.5.5 0 0 1-.779.435Z\"/>";

export const Km = /*#__PURE__*/ defineComponent({
  name: 'GeoKm',
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
