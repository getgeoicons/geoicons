// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.57 4.033 5.386 8.258a2.5 2.5 0 0 0-.237 1.603l.438 2.362a2.5 2.5 0 0 0 .391.952l1.689 2.48q.02.03.036.063l1.07 2.2a2.5 2.5 0 0 0 .7.871l.97.766c.363.285.796.465 1.253.52l2.362.28a.5.5 0 0 1 .232.09l2.652 1.908a1 1 0 0 0 1.216-.037l.397-.324a1 1 0 0 0 .353-.944l-.482-2.81a2.5 2.5 0 0 1-.027-.634l.235-2.781a.5.5 0 0 0-.053-.269L17.59 12.6a.5.5 0 0 1-.038-.102L15.919 6.14a2.5 2.5 0 0 1 .035-1.367L17.071 1.2s-2.934 1.976-5.087 2.202c-.827.086-1.907-.046-2.716-.185-.683-.116-1.38.2-1.698.816Z\"/>";

export const Pn = /*#__PURE__*/ defineComponent({
  name: 'GeoPn',
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
