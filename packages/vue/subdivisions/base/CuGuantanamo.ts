// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.811 9.866a1 1 0 0 0-.343.68l-.1 1.3a1 1 0 0 0 .154.613l.474.744a1 1 0 0 1 .013 1.055l-.403.666a1 1 0 0 0 .15 1.226l1.323 1.317a.8.8 0 0 0 .628.23l4.683-.371a2 2 0 0 0 1.147-.479l1.4-1.204a2 2 0 0 1 1.229-.483l7.707-.29a2 2 0 0 0 1.339-.585l1.148-1.147a1 1 0 0 0 .285-.58l.073-.575a1 1 0 0 0-.459-.974l-.797-.502a1 1 0 0 0-.738-.132l-.998.209a2 2 0 0 1-1.056-.065l-1.32-.451a2 2 0 0 1-1.019-.784l-.621-.933a3 3 0 0 0-.717-.751l-1.248-.92a.6.6 0 0 0-.881.191l-.597 1.076a1 1 0 0 1-1.003.507l-4.5-.582a1 1 0 0 0-.902.359l-.268.328a1 1 0 0 1-1.176.283l-.365-.16a1 1 0 0 0-1.056.16z\"/>";

export const CuGuantanamo = /*#__PURE__*/ defineComponent({
  name: 'GeoCuGuantanamo',
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
