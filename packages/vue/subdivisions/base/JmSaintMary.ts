// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.11 13.35a.8.8 0 0 0 .766.411l2.145-.18a.6.6 0 0 1 .597.35l2.334 5.164a1 1 0 0 0 1.112.567l4.023-.824a1 1 0 0 1 .748.142l2.16 1.41a.6.6 0 0 0 .887-.283l2.604-6.634a.6.6 0 0 0-.546-.82l-3.264-.07a1 1 0 0 1-.9-.609L16.77 9.598a2 2 0 0 0-.902-.985l-3.425-1.825a1 1 0 0 1-.53-.89l.006-.734a1 1 0 0 0-1.128-1l-2.775.358a2 2 0 0 1-.68-.028L1.997 3.338a.623.623 0 0 0-.653.95l.815 1.243a2 2 0 0 1 .32.933l.17 2.07a2 2 0 0 0 .242.803z\"/>";

export const JmSaintMary = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintMary',
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
