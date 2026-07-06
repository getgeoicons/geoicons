// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.542 19.591-6.858 3.122a.5.5 0 0 1-.386.012l-2.02-.777a.5.5 0 0 1-.293-.304L4.13 16.25a.5.5 0 0 1 .03-.393c.37-.706 1.687-3.22 2.43-4.664a.5.5 0 0 0 .049-.31L5.22 2.368a.5.5 0 0 1 .503-.582l6.886.133a.5.5 0 0 0 .294-.09l.753-.52a.5.5 0 0 1 .347-.085l1.137.143a.5.5 0 0 1 .416.64l-.206.683a.5.5 0 0 0 .203.562l1.066.704a.5.5 0 0 1 .224.426l-.082 4.836a.5.5 0 0 0 .123.337l.76.873a.5.5 0 0 1 .12.38l-.495 4.74a.5.5 0 0 0 .165.426l2.074 1.84a.5.5 0 0 1-.009.756l-1.193 1.011a.5.5 0 0 1-.358.117l-2.164-.15a.5.5 0 0 0-.242.043Z\"/>";

export const Gh = /*#__PURE__*/ defineComponent({
  name: 'GeoGh',
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
