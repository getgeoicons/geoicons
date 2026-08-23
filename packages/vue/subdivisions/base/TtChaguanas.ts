// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.026 5.244a.6.6 0 0 0-.566-.366l-14.078.303a.6.6 0 0 0-.487.268L3.706 8.753a1 1 0 0 1-.344.32l-1.324.743a.6.6 0 0 0-.298.426l-.439 2.672a.6.6 0 0 0 .518.692l2.566.321a1 1 0 0 1 .58.281l1.503 1.487a1 1 0 0 0 1.143.187l1.301-.638a.6.6 0 0 1 .844.382l.532 1.973a1 1 0 0 0 .476.612l1.246.699a1 1 0 0 0 .82.071l2.915-1.022a2 2 0 0 1 .875-.101l3.87.414a.6.6 0 0 0 .631-.4l.444-1.288a2 2 0 0 0 .104-.799l-.05-.69a.6.6 0 0 0-.606-.557l-.947.011a.6.6 0 0 1-.606-.586l-.027-1.177a.6.6 0 0 1 .334-.552l1.296-.64c.32-.159.593-.4.788-.699l.658-1.006a1 1 0 0 0 .084-.936z\"/>";

export const TtChaguanas = /*#__PURE__*/ defineComponent({
  name: 'GeoTtChaguanas',
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
