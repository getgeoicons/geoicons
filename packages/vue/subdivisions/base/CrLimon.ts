// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.04 9.553a.6.6 0 0 0 .255.814l2.806 1.448a2 2 0 0 0 .911.223l2.208.006a.6.6 0 0 1 .588.71l-.276 1.484a2 2 0 0 1-.333.789l-1.48 2.095a.6.6 0 0 0-.011.675l.803 1.226a.6.6 0 0 0 .427.266l1.658.206a2 2 0 0 1 1.188.592L15.42 22.8l-.077-4.537a1 1 0 0 1 .173-.579l.012-.018a1 1 0 0 1 1.28-.329l1.08.549a1 1 0 0 0 .967-.034l.52-.311a.6.6 0 0 0-.008-1.033l-1.78-1.037a3 3 0 0 1-.688-.55L10.558 8.1a3 3 0 0 1-.488-.708L6.994 1.2l-1.84 2.747a2 2 0 0 0-.339 1.113v2.534a2 2 0 0 1-.233.936z\"/>";

export const CrLimon = /*#__PURE__*/ defineComponent({
  name: 'GeoCrLimon',
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
