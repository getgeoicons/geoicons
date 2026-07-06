// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.017 8.668-.475.613a.701.701 0 0 0 .678 1.12l.227-.041a1 1 0 0 0 .165-.048l1.665-.664a1 1 0 0 1 .672-.025l4.298 1.359a1 1 0 0 1 .58.482l.427.798a1 1 0 0 0 .864.529l2.427.043a1 1 0 0 0 .423-.086l.582-.258a.6.6 0 0 0 .03-1.082L8.077 8.074a1 1 0 0 0-.37-.106l-2.955-.256a1 1 0 0 0-.38.041l-1.859.572a1 1 0 0 0-.496.343Zm17.891 3.804-1.887-.021a.6.6 0 0 0-.534.887l.8 1.468a1 1 0 0 0 1.248.45l.236-.093a1 1 0 0 1 .397-.071l1.649.043a.769.769 0 0 0 .415-1.428l-1.82-1.093a1 1 0 0 0-.504-.142Zm-7.804 2.202-1.298-.329a.91.91 0 1 0-.301 1.79l1.333.115a.802.802 0 0 0 .266-1.576Z\"/>";

export const Caribbean = /*#__PURE__*/ defineComponent({
  name: 'GeoCaribbean',
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
