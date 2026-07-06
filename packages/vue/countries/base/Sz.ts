// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.372 22.8 5.253-.047a.5.5 0 0 0 .494-.474l.305-5.698a.5.5 0 0 1 .591-.464l.5.093a.5.5 0 0 0 .593-.485l.042-3.317a.5.5 0 0 0-.036-.192l-.942-2.355a.5.5 0 0 1-.03-.256l.555-3.938a.5.5 0 0 0-.205-.477l-1.132-.803a.5.5 0 0 0-.461-.062l-1.053.386a.5.5 0 0 1-.456-.059l-4.818-3.338a.5.5 0 0 0-.36-.084l-.97.15a.5.5 0 0 0-.289.152L7.817 3.81a.5.5 0 0 0-.095.145L5.776 8.496a.5.5 0 0 1-.063.108l-1.757 2.28a.5.5 0 0 0-.104.314l.085 4.415a.5.5 0 0 0 .706.446l.272-.123a.5.5 0 0 1 .703.404l.221 2.1a.5.5 0 0 0 .105.256l1.93 2.448a.5.5 0 0 0 .224.162L12.2 22.77a.5.5 0 0 0 .173.03Z\"/>";

export const Sz = /*#__PURE__*/ defineComponent({
  name: 'GeoSz',
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
