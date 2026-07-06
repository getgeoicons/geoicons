// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m11.341 21.268-4.247-.891a.5.5 0 0 1-.397-.49v-.977a.5.5 0 0 0-.317-.466l-1.042-.408a.5.5 0 0 1-.315-.416L3.665 3.86a.5.5 0 0 1 .174-.43l2.33-1.978a.5.5 0 0 1 .614-.025l2.058 1.47a.5.5 0 0 1 .169.208l2.613 6.042a.5.5 0 0 0 .223.242l7.145 3.842q.083.044.143.115l.994 1.16a.5.5 0 0 1 .051.579l-2.353 3.99a.5.5 0 0 1-.146.158l-4.746 3.275a.5.5 0 0 1-.704-.14l-.572-.883a.5.5 0 0 0-.317-.217Z\"/>";

export const Bb = /*#__PURE__*/ defineComponent({
  name: 'GeoBb',
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
