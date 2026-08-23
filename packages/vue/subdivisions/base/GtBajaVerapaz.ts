// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.512 8.129a1 1 0 0 0-1.154.402l-.516.79a.6.6 0 0 1-.96.06l-2.02-2.383a.6.6 0 0 0-.982.096l-.943 1.688a.6.6 0 0 1-.431.3l-.746.116a.6.6 0 0 0-.505.652l.122 1.248a1 1 0 0 0 .301.623l2.924 2.816a1 1 0 0 1 .26.419l.619 1.959a1 1 0 0 0 1.017.696l5.75-.37a1 1 0 0 0 .621-.268l2.374-2.228 4.577-3.397a1 1 0 0 1 .553-.196l1.428-.061a1 1 0 0 0 .956-1.042l-.055-1.277a1 1 0 0 0-.378-.742l-.128-.101a1 1 0 0 0-.985-.147l-1.129.441a1 1 0 0 1-.275.065l-7.332.653a2 2 0 0 1-.81-.094z\"/>";

export const GtBajaVerapaz = /*#__PURE__*/ defineComponent({
  name: 'GeoGtBajaVerapaz',
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
