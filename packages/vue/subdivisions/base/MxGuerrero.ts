// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.503 6.162a1 1 0 0 0-1.207-.207l-2.362 1.257a.6.6 0 0 1-.858-.363l-.395-1.367a.6.6 0 0 0-.528-.432l-.74-.06a.6.6 0 0 0-.64.695l.171 1.057a.6.6 0 0 1-.72.683l-4.046-.879a1 1 0 0 0-.888.241l-.018.016a1 1 0 0 0-.31.573l-.08.474a1 1 0 0 1-.634.772l-.364.136a.943.943 0 0 0-.15 1.694l5.768 3.415 5.921 2.573 3.952 1.098q.432.12.825.331l1.436.773a1 1 0 0 0 1.301-.32l1.577-2.326a1 1 0 0 0 .113-.9l-1.652-4.578a1 1 0 0 0-.574-.591l-1.835-.723a2 2 0 0 1-.742-.51z\"/>";

export const MxGuerrero = /*#__PURE__*/ defineComponent({
  name: 'GeoMxGuerrero',
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
