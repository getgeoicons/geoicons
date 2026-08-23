// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.17 19.74a1 1 0 0 1 .418.91l-.074.786a1 1 0 0 0 .59 1.007l.416.185a1 1 0 0 0 .78.014l.812-.328a1 1 0 0 0 .59-1.198l-.205-.727a.6.6 0 0 1 .29-.69l.615-.334a.6.6 0 0 0 .31-.467l.267-2.665a.8.8 0 0 1 .49-.66l2.62-1.082a1 1 0 0 0 .55-.561l1.94-4.976a1 1 0 0 1 .687-.606l2.532-.637a.6.6 0 0 0 .431-.746l-1.328-4.669a.6.6 0 0 0-1.04-.218l-1.356 1.637a1 1 0 0 1-1.198.265L13.62 2.707a.6.6 0 0 0-.85.462l-.216 1.58a1 1 0 0 0 .103.594l.198.382a1 1 0 0 1-.78 1.454l-1.648.179a1 1 0 0 0-.872.795L9.2 9.893a1 1 0 0 1-.998.8l-3.691-.064a1 1 0 0 0-.934.599l-.814 1.86a1 1 0 0 0-.02.753l1.31 3.48a1 1 0 0 0 .357.465z\"/>";

export const MxQueretaro = /*#__PURE__*/ defineComponent({
  name: 'GeoMxQueretaro',
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
