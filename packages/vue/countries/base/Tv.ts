// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.954 21.933-1.159.654a1 1 0 0 1-.793.082l-.125-.04a1 1 0 0 1-.645-1.277l.291-.851a1 1 0 0 0 .026-.56l-.808-3.338a1 1 0 0 0-.236-.441l-1.28-1.391a1 1 0 0 1-.227-.406l-1.175-4.161a1 1 0 0 1 .25-.974l3.42-3.47a1 1 0 0 0 .283-.594l.23-2.12a1 1 0 0 1 .692-.845l2.942-.934a1 1 0 0 1 .43-.04l4.281.547a1 1 0 0 1 .754.517l1.966 3.644a1 1 0 0 1 .118.418l.08 1.387a1 1 0 0 0 .058.287l.742 2.028a1 1 0 0 1-.372 1.167l-8.532 5.874a1 1 0 0 0-.365.46l-.693 1.776a1 1 0 0 0 .021.778l.245.538a1 1 0 0 1-.419 1.285Z\"/>";

export const Tv = /*#__PURE__*/ defineComponent({
  name: 'GeoTv',
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
