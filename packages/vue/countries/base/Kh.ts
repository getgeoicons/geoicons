// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.602 15.336 1.603 9.629a2 2 0 0 1 .437-2.037l1.878-1.98a2 2 0 0 1 1.16-.602l1.517-.223a4 4 0 0 1 .758-.04l3.722.165a3 3 0 0 1 1.173.296l3.616 1.747a.631.631 0 0 0 .887-.718l-.229-.939a.6.6 0 0 1 .385-.709l.585-.204a1 1 0 0 1 .737.03l.679.304a1 1 0 0 0 1.007-.113l1.76-1.32a.629.629 0 0 1 .956.747l-.767 1.825a2 2 0 0 0-.018 1.506l.374.952a2 2 0 0 1 .134.86l-.234 3.641a1 1 0 0 1-.63.866L16.116 15.8a.8.8 0 0 0-.285 1.298l1.173 1.226a.838.838 0 0 1-1.008 1.316l-.74-.404a2 2 0 0 0-1.842-.037l-3.171 1.564a2 2 0 0 1-.844.207l-2.81.058a.608.608 0 0 1-.405-1.075l.404-.339a.741.741 0 0 0-.734-1.263l-.617.229a.8.8 0 0 1-1.064-.6l-.342-1.79a6 6 0 0 0-.23-.854Z\"/>";

export const Kh = /*#__PURE__*/ defineComponent({
  name: 'GeoKh',
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
