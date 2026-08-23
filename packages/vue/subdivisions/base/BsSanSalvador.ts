// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m8.223 21.157-1.97 1.352a.928.928 0 0 1-1.28-1.306l1.117-1.56c.449-.628.83-1.3 1.139-2.008l2.038-4.675a1 1 0 0 0 .03-.72L8.004 8.42a1 1 0 0 1 .057-.776l2.827-5.52a.6.6 0 0 1 .668-.312l2.102.483a1 1 0 0 0 .643-.066l1.98-.914a.6.6 0 0 1 .498-.003l1.045.47a.6.6 0 0 1 .337.408l1.46 6.124a1 1 0 0 1-.043.601l-2.684 6.747a2 2 0 0 1-.541.766l-.553.483c-.23.202-.411.454-.529.736l-1.397 3.357a1 1 0 0 1-.867.614l-2.125.12a1 1 0 0 1-.49-.096l-1.17-.562a1 1 0 0 0-.999.077Z\"/>";

export const BsSanSalvador = /*#__PURE__*/ defineComponent({
  name: 'GeoBsSanSalvador',
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
