// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.432 2.572a1 1 0 0 1 .075.801l-.466 1.405a1 1 0 0 0-.05.307L3.88 18.58a1 1 0 0 0 1.254.975l4.176-1.1q.127-.032.26-.032l7.018.036a1 1 0 0 1 .442.105l2.073 1.037a1 1 0 0 0 .567.098l2.178-.262a1 1 0 0 0 .879-.937l.048-.849a1 1 0 0 0-.268-.74l-1.793-1.915a1 1 0 0 1-.263-.573l-.366-3.293a1 1 0 0 0-.253-.562l-3.85-4.245a1 1 0 0 0-.48-.294l-1.492-.402a1 1 0 0 1-.498-.313l-.717-.833a1 1 0 0 0-.804-.346l-5.823.264a1 1 0 0 0-.848.55L2.859 9.831a.5.5 0 0 1-.205.213Z\"/>";

export const Senegambia = /*#__PURE__*/ defineComponent({
  name: 'GeoSenegambia',
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
