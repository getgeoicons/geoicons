// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.536 22.044-.837.044a.5.5 0 0 1-.371-.138l-1.864-1.777a.5.5 0 0 0-.309-.137l-1.288-.094a.5.5 0 0 1-.463-.526l.068-1.252a.5.5 0 0 0-.135-.37L4.011 10.02a.5.5 0 0 1-.13-.265l-.346-2.198a.5.5 0 0 0-.115-.248L1.454 5.02a.5.5 0 0 1-.12-.302l-.108-2.27a.5.5 0 0 1 .52-.524l.944.04a.5.5 0 0 1 .317.131l1.231 1.131a.5.5 0 0 0 .715-.04l.951-1.09a.5.5 0 0 1 .43-.168l10.696 1.12a.5.5 0 0 1 .382.249l.677 1.178a.5.5 0 0 0 .47.25l2.212-.164a.5.5 0 0 1 .489.713L19.967 8.01a.5.5 0 0 0 .112.58l2.116 1.964a.5.5 0 0 1-.174.838l-.866.306a.5.5 0 0 0-.221.787l.913 1.124a.5.5 0 0 1-.262.799l-1.44.375a.5.5 0 0 0-.373.522l.067.872a.5.5 0 0 1-.52.538l-.825-.036a.5.5 0 0 0-.44.226l-1.655 2.528a.5.5 0 0 0-.042.47l.613 1.445a.5.5 0 0 1-.434.695Z\"/>";

export const Ba = /*#__PURE__*/ defineComponent({
  name: 'GeoBa',
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
