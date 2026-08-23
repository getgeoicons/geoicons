// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.107 19.202a.3.3 0 0 0 .299.3l14.256.047-.652 2.076 1.993-.02a.6.6 0 0 0 .56-.402l1.113-3.183a1 1 0 0 0-.015-.702l-.98-2.45a1 1 0 0 0-.265-.376l-1.845-1.636a1 1 0 0 1-.257-1.137l.375-.888a1 1 0 0 0-.494-1.293l-1.022-.484a1 1 0 0 1-.407-.354l-1.884-2.859a1 1 0 0 1-.16-.656l.133-1.25a.6.6 0 0 0-.147-.46l-.792-.896a.6.6 0 0 0-.453-.202L1.886 2.45a.3.3 0 0 0-.217.505l2.041 2.18a1 1 0 0 1 .216 1.01l-.135.39a1 1 0 0 0 .164.951L4.982 8.77a.6.6 0 0 1 .131.376z\"/>";

export const UsMissouri = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMissouri',
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
