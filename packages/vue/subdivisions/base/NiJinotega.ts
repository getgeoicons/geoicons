// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.242 16.786a1.5 1.5 0 0 0-.857 1.057l-.32 1.497a1.5 1.5 0 0 0 .643 1.566l2.238 1.472a1 1 0 0 0 1.214-.088l3.877-3.448a1 1 0 0 1 .405-.219l1.074-.289a1 1 0 0 0 .71-.724l.678-2.723a2 2 0 0 1 .693-1.08l1.97-1.573a.6.6 0 0 1 .655-.06l1.238.655a.6.6 0 0 0 .755-.163l1.917-2.477a2 2 0 0 0 .393-.905l.616-3.802a.6.6 0 0 0-.6-.696l-.814.011a.6.6 0 0 1-.606-.554l-.152-1.994a1 1 0 0 0-1.124-.915l-.57.072a1 1 0 0 0-.863.847l-.334 2.277a2 2 0 0 1-.909 1.398L9.34 9.623a1 1 0 0 0-.442.628l-1.069 4.82a1 1 0 0 1-.852.776l-1.377.172a6 6 0 0 0-1.697.473z\"/>";

export const NiJinotega = /*#__PURE__*/ defineComponent({
  name: 'GeoNiJinotega',
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
