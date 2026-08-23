// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.592 21.492a.6.6 0 0 0 .28-.293l.461-1.037a.6.6 0 0 0-.028-.543L16.22 17.73a2 2 0 0 1-.263-.905l-.679-14.899a.6.6 0 0 0-.74-.556l-.71.171a1 1 0 0 0-.727.693l-1.05 3.609a1 1 0 0 0-.028.427l.211 1.413a1 1 0 0 1-.575 1.058l-1.76.8a.6.6 0 0 0-.35.587l.062.93a2 2 0 0 1-.206 1.027l-1.75 3.509a1 1 0 0 0-.09.269l-.983 5.467a.6.6 0 0 0 .07.404l.308.539a.6.6 0 0 0 .5.301l6.263.217a1 1 0 0 0 .482-.105z\"/>";

export const UsNewHampshire = /*#__PURE__*/ defineComponent({
  name: 'GeoUsNewHampshire',
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
