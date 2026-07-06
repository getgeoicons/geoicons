// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.288 18.822-1.007 2.57a.5.5 0 0 0 .612.66l1.889-.583a.5.5 0 0 1 .412.054l1.89 1.18a.5.5 0 0 0 .334.072l4.727-.663a.5.5 0 0 0 .409-.639l-.234-.783a.5.5 0 0 1 .234-.58l1.123-.63a.5.5 0 0 0 .142-.753l-2.63-3.208a.5.5 0 0 1 .18-.771l4.715-2.158a.5.5 0 0 0 .249-.657l-1.897-4.29a.5.5 0 0 1-.03-.314l.576-2.487a.5.5 0 0 0-.078-.4l-1.51-2.155a.5.5 0 0 0-.647-.152l-3.161 1.711a.5.5 0 0 1-.47.004L11.29 2.9a.5.5 0 0 1-.24-.278l-.34-.965a.5.5 0 0 0-.447-.333l-1.545-.079a.5.5 0 0 0-.47.731l.568 1.086a.5.5 0 0 1-.025.504l-.923 1.418a.5.5 0 0 1-.415.227l-1.858.016a.5.5 0 0 0-.495.533l.172 2.663a.5.5 0 0 1-.155.396l-1.462 1.385a.5.5 0 0 0-.15.434l.947 6.626a.5.5 0 0 0 .385.417l2.095.472a.5.5 0 0 1 .356.67Z\"/>";

export const De = /*#__PURE__*/ defineComponent({
  name: 'GeoDe',
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
