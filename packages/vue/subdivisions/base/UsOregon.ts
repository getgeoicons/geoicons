// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.77 5.249a.6.6 0 0 0-.466-.223l-5.134-.019a1 1 0 0 0-.198.02l-8.107 1.61a1 1 0 0 1-.984-.367l-1.31-1.684a.6.6 0 0 0-.41-.228l-1.846-.194a.6.6 0 0 0-.662.571l-.333 7.908a2 2 0 0 1-.073.458l-.932 3.309a2 2 0 0 0-.055.825l.345 2.41a.3.3 0 0 0 .298.258l19.108-.055a.3.3 0 0 0 .299-.29l.23-6.763a.6.6 0 0 0-.069-.302l-.612-1.155a.6.6 0 0 1-.016-.53l1.803-3.944a.6.6 0 0 0-.079-.626z\"/>";

export const UsOregon = /*#__PURE__*/ defineComponent({
  name: 'GeoUsOregon',
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
