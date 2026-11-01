// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.642 18.619.956-3.633a2 2 0 0 0 .063-.622l-.159-2.808a2 2 0 0 1 .118-.798l.98-2.683a2 2 0 0 0 .083-1.069L8.51 6.12a2 2 0 0 1 .093-1.091l1.182-3.12a1 1 0 0 1 .894-.646l1.053-.044a1 1 0 0 1 .78.326l1.375 1.51a1 1 0 0 0 1.098.26l1.174-.452a.818.818 0 0 1 .717 1.462l-1.624.983a1 1 0 0 0-.456.63l-.39 1.677a1 1 0 0 0 .144.784l.37.55a1 1 0 0 1 .01 1.1l-.148.23a1 1 0 0 1-.72.45l-1.053.13a1 1 0 0 0-.75.5l-2.021 3.574a1 1 0 0 0 .032 1.038l.188.288a1 1 0 0 1-.012 1.11l-.671.982a1 1 0 0 0-.072 1.006l1.262 2.563a.6.6 0 0 1-.548.864l-1.034-.016a.6.6 0 0 1-.59-.605l.01-1.189a1 1 0 0 0-.495-.871l-1.388-.814a.6.6 0 0 1-.278-.67Z\"/>";

export const Ar = /*#__PURE__*/ defineComponent({
  name: 'GeoAr',
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
