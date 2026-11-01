// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.422 14.23 3.425 3.232a1 1 0 0 0 .76.27l1.341-.1a1 1 0 0 0 .827-.563l.33-.685a.8.8 0 0 1 .933-.424l5.28 1.448a1 1 0 0 0 .625-.032l1.445-.558a4 4 0 0 0 1.196-.725l2.693-2.363a.8.8 0 0 0 .14-1.04l-.634-.967a1 1 0 0 0-.696-.44l-1.128-.16a1 1 0 0 1-.8-.65l-.211-.581a1 1 0 0 0-.642-.614l-1.046-.327a.6.6 0 0 0-.72.312l-.328.68a.6.6 0 0 1-.894.224l-.914-.668a.6.6 0 0 1-.223-.651l.16-.552a.6.6 0 0 0-.316-.708l-2.553-1.226a.6.6 0 0 0-.526.004l-1.162.574a.6.6 0 0 1-.522.005l-1.144-.539a.6.6 0 0 0-.518.003l-5.555 2.7a1 1 0 0 0-.488 1.28l1.15 2.798a3 3 0 0 0 .715 1.042Z\"/>";

export const Cz = /*#__PURE__*/ defineComponent({
  name: 'GeoCz',
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
