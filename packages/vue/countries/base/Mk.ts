// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.245 12.958 3.437 19.5a.5.5 0 0 0 .439.34l6.646.472a.5.5 0 0 0 .396-.151l2.761-2.86a.5.5 0 0 1 .37-.153l5.388.098a.5.5 0 0 0 .503-.42l.198-1.233a.5.5 0 0 1 .456-.42l1.15-.086a.5.5 0 0 0 .457-.423l.579-3.794a.5.5 0 0 0-.03-.258l-1.149-2.923a.5.5 0 0 0-.295-.287l-2.292-.828a.5.5 0 0 1-.219-.156l-2.044-2.53a.5.5 0 0 0-.451-.182l-6.17.78a.5.5 0 0 0-.344.206l-.99 1.391a.5.5 0 0 1-.611.167L6.68 5.579a.5.5 0 0 0-.353-.02l-1.975.62a.5.5 0 0 0-.344.55l.26 1.758a.5.5 0 0 1-.454.572l-1.408.111a.5.5 0 0 0-.448.386l-.727 3.13a.5.5 0 0 0 .013.272Z\"/>";

export const Mk = /*#__PURE__*/ defineComponent({
  name: 'GeoMk',
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
