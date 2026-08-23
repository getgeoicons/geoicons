// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.22 18.146a.6.6 0 0 0 .509.585l2.566.394a1 1 0 0 0 .87-.292l2.09-2.153a1 1 0 0 1 1.128-.215l.408.184a1 1 0 0 0 1.05-.143l1.141-.948a1 1 0 0 1 .627-.231l2.413-.031a1 1 0 0 0 .693-.292l2.956-2.943a1 1 0 0 1 .705-.291l1.614-.001a1 1 0 0 0 .577-.184l.889-.63a1 1 0 0 0 .391-.568l.865-3.39a1 1 0 0 0-.062-.668l-.356-.766a1 1 0 0 0-1.17-.544l-4.256 1.163a1 1 0 0 0-.157.058L11.12 8.827a1 1 0 0 0-.18.108l-5.43 4.074a1 1 0 0 0-.232.246l-1.829 2.75a1 1 0 0 1-.685.435l-1.046.156a.6.6 0 0 0-.512.602z\"/>";

export const TtTobago = /*#__PURE__*/ defineComponent({
  name: 'GeoTtTobago',
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
