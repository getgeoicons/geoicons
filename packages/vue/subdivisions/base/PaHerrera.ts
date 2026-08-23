// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.831 22.64-2.24-.907a1 1 0 0 1-.468-.39l-3.042-4.77a2 2 0 0 0-1.005-.805l-.688-.249a1 1 0 0 1-.658-.98l.176-4.447a1 1 0 0 1 .722-.921l.654-.189a2 2 0 0 0 .97-.626l1.203-1.414a1 1 0 0 0 .164-1.025l-.337-.828a1 1 0 0 1 .597-1.322l1.146-.398a2 2 0 0 0 .906-.642l.862-1.08a1 1 0 0 1 .922-.367l1.6.227a3 3 0 0 0 .8.006l2.176-.278a1 1 0 0 1 .53.077l3.588 1.58a1 1 0 0 1 .491.468l.667 1.333a2 2 0 0 0 1.046.962l1.057.423a.6.6 0 0 1 .303.846l-.553 1.008a1 1 0 0 1-.945.517l-1.223-.084a2 2 0 0 0-1.197.3l-.113.07a2 2 0 0 0-.894 1.272l-.205.944a1 1 0 0 1-.522.678l-.762.39a1 1 0 0 0-.453 1.307l.87 1.904a1 1 0 0 1 .045.718l-.342 1.08a1 1 0 0 1-.607.636l-1.221.45a1 1 0 0 0-.534.464l-.876 1.624a2 2 0 0 1-.258.37l-1.676 1.908a.6.6 0 0 1-.676.16Z\"/>";

export const PaHerrera = /*#__PURE__*/ defineComponent({
  name: 'GeoPaHerrera',
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
