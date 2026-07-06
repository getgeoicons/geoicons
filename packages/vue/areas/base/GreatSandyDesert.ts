// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.677 7.619-2.816.32a.662.662 0 0 0-.104 1.295l2.409.675a1 1 0 0 1 .564.412l1.276 1.931a1 1 0 0 0 .617.425l2.136.476a.6.6 0 0 0 .728-.526l.011-.116a1 1 0 0 1 1.032-.901l1.354.05a1 1 0 0 1 .45.125l2.392 1.333a.6.6 0 0 1 .126.955l-.11.106a.6.6 0 0 0 .138.96l3.672 1.946a.6.6 0 0 0 .88-.574l-.137-1.862a1 1 0 0 1 .834-1.06l2.115-.35a.594.594 0 0 0-.018-1.175l-4.065-.547a1 1 0 0 1-.451-.18l-1.992-1.434a1 1 0 0 1-.258-.273l-1.106-1.727a1 1 0 0 0-.842-.461h-2.474a1 1 0 0 1-.64-.232l-.586-.488a1 1 0 0 0-.608-.231l-2.24-.073a1 1 0 0 0-.601.178l-1.23.851a1 1 0 0 1-.456.172Z\"/>";

export const GreatSandyDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoGreatSandyDesert',
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
