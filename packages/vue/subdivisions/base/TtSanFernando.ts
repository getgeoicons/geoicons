// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.123 2.456a.6.6 0 0 0-.307-.565l-.939-.522a.6.6 0 0 0-.602.012L17.66 2.969a1 1 0 0 1-.957.045l-1.978-.963a1 1 0 0 0-.74-.054l-1.674.53a.6.6 0 0 0-.21 1.027l.572.492a1 1 0 0 0 .557.238l.632.061a1 1 0 0 1 .83.62l.076.188a1 1 0 0 1-.04.836l-.89 1.71a2 2 0 0 1-.456.582l-1.885 1.652a2 2 0 0 0-.429.53l-.83 1.487a1 1 0 0 0-.089.762l.254.888a1 1 0 0 1-.149.858L7.8 17.88a1 1 0 0 1-.29.27l-5.316 3.263a.67.67 0 0 0 .49 1.225l1.774-.379a2 2 0 0 0 .729-.317l3.172-2.221q.25-.175.54-.267l5.066-1.615a2 2 0 0 1 .768-.088l2.56.207a1 1 0 0 0 .776-.278l2.551-2.47a1 1 0 0 0 .297-.593l.564-4.474a.6.6 0 0 0-.22-.543l-.455-.364a.6.6 0 0 1-.14-.776l1.06-1.773a1 1 0 0 0 .14-.445z\"/>";

export const TtSanFernando = /*#__PURE__*/ defineComponent({
  name: 'GeoTtSanFernando',
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
