// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.782 5.696-.185-1.433a1 1 0 0 1 .174-.704l.707-1.003a1 1 0 0 1 .487-.368l1.447-.505a1 1 0 0 1 .654-.002l2.247.769a1 1 0 0 0 .56.025l.91-.22a1 1 0 0 1 .955.276l1.464 1.515a1 1 0 0 0 .704.305l.897.015a1 1 0 0 1 .49.137l.629.369a1 1 0 0 1 .442.546l.382 1.144a1 1 0 0 0 .432.54L18.16 8.3a1 1 0 0 0 .364.132l1.892.295a1 1 0 0 1 .414.165l1.521 1.05a1 1 0 0 1 .431.855l-.02.646a1 1 0 0 1-.302.683l-1.59 1.553a1 1 0 0 0-.286.535l-.364 1.984a1 1 0 0 1-.172.403l-.814 1.132a1 1 0 0 1-.637.401l-1.78.316a1 1 0 0 0-.813.826l-.146.913a1 1 0 0 1-.242.508l-1.415 1.58a.25.25 0 0 1-.314.049l-1.684-1.002a.25.25 0 0 1-.036-.404l1.118-.97a1 1 0 0 0 .225-1.23l-1.159-2.143a1 1 0 0 0-.886-.524l-.316.002a1 1 0 0 0-.927.64l-.221.576a.25.25 0 0 1-.178.154l-1.908.433a.25.25 0 0 1-.293-.168l-.515-1.617a1 1 0 0 0-.542-.608l-2.402-1.083a1 1 0 0 1-.496-.491l-1.063-2.294a1 1 0 0 0-.386-.433l-.521-.319a1 1 0 0 1-.478-.885l.042-1.323a1 1 0 0 1 .176-.535L2.614 6.39a1 1 0 0 0 .168-.694Z\"/>";

export const Amazonia = /*#__PURE__*/ defineComponent({
  name: 'GeoAmazonia',
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
