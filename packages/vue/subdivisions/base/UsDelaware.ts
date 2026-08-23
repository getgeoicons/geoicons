// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.595 2.967a.3.3 0 0 0-.048.18l1.115 19.236a.3.3 0 0 0 .294.282l6.826.123a.6.6 0 0 0 .608-.661l-.444-4.33a.6.6 0 0 0-.142-.33l-3.367-3.917a1 1 0 0 1-.241-.642l-.024-2.33a1 1 0 0 0-.147-.513L10.31 7.266a1 1 0 0 1-.142-.424l-.17-1.712a1 1 0 0 1 .156-.64l1.601-2.482a.275.275 0 0 0-.135-.406l-.433-.163a2.73 2.73 0 0 0-2.215.134l-.023.012a2.9 2.9 0 0 0-1.069.956z\"/>";

export const UsDelaware = /*#__PURE__*/ defineComponent({
  name: 'GeoUsDelaware',
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
