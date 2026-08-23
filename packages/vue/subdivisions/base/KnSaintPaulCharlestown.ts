// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.036 12.956-5.761-.125a.3.3 0 0 0-.307.285l-.092 1.893a.6.6 0 0 1-.502.562l-.472.078a.6.6 0 0 0-.468.79l.394 1.131a.75.75 0 0 0 .812.497l3.345-.468q.293-.04.588-.024l1.709.099c.47.027.942-.057 1.374-.246l2.353-1.029q.52-.226 1.078-.332l1.174-.221q.492-.092.992-.086l1.13.015a.6.6 0 0 0 .511-.273l5.649-8.703a.507.507 0 0 0-.79-.63l-6.446 6.643a2 2 0 0 1-.88.528l-1.206.35a2 2 0 0 1-1.073.01l-2.402-.642a3 3 0 0 0-.71-.102Z\"/>";

export const KnSaintPaulCharlestown = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintPaulCharlestown',
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
