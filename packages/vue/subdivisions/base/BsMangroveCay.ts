// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.76 18.418-1.649-1.18a.652.652 0 0 1 .612-1.138l1.836.703a.6.6 0 0 0 .736-.264l.064-.112a.6.6 0 0 0-.077-.701l-2.153-2.362a.663.663 0 0 1 .662-1.088l1.194.319a1 1 0 0 0 .835-.15l1.493-1.056a1 1 0 0 0 .417-.706l.176-1.589a1 1 0 0 1 .21-.51l1.527-1.926a.6.6 0 0 1 .983.062l.178.294a.805.805 0 0 0 1.49-.345l.17-1.923a1 1 0 0 1 .582-.821l5.384-2.452a.6.6 0 0 1 .815.348l1.042 2.983a1 1 0 0 0 .618.616l.849.293a.6.6 0 0 1 .373.758l-2.286 6.802a1 1 0 0 1-.367.495l-2.085 1.49a1 1 0 0 0-.412.695l-.412 3.45a.962.962 0 0 1-1.407.736l-1.272-.675a1 1 0 0 0-.582-.11l-2.272.256a.6.6 0 0 0-.474.855l.305.639a1 1 0 0 1-.068.982l-.14.212a1 1 0 0 1-.93.445l-.377-.036a1 1 0 0 1-.637-.315l-1.574-1.694a.6.6 0 0 1-.141-.56l.127-.49a1 1 0 0 0-.192-.883l-.048-.058a1 1 0 0 0-.94-.356l-1.436.24a1 1 0 0 1-.746-.173Z\"/>";

export const BsMangroveCay = /*#__PURE__*/ defineComponent({
  name: 'GeoBsMangroveCay',
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
