// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.594 15.848.483 4.04-2.648-1.298a.5.5 0 0 0-.35-.033l-1.68.453a.5.5 0 0 1-.402-.064l-2.536-1.649a.5.5 0 0 1-.223-.48l.425-3.505a.5.5 0 0 1 .298-.399l2.266-.983a.5.5 0 0 0 .299-.505l-.15-1.593a.5.5 0 0 1 .167-.421l.841-.745a.5.5 0 0 1 .407-.12l1.686.259a.5.5 0 0 0 .486-.209L9.479 6.42a.5.5 0 0 1 .21-.172l4.774-2.08a.5.5 0 0 1 .263-.038l1.89.24a.5.5 0 0 1 .433.439l.24 2.077a.5.5 0 0 0 .242.372l1.511.897a.5.5 0 0 1 .24.503l-.108.733a.5.5 0 0 0 .351.552l2.08.62a.5.5 0 0 1 .319.288l.707 1.703a.5.5 0 0 1-.212.625l-3.528 2.033a.5.5 0 0 1-.34.058l-2.46-.455a.5.5 0 0 0-.294.035l-1.305.58a.5.5 0 0 1-.22.042l-5.164-.182a.5.5 0 0 0-.514.559Z\"/>";

export const Bf = /*#__PURE__*/ defineComponent({
  name: 'GeoBf',
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
