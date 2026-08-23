// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.22 18.43a1 1 0 0 0 .556-.925l-.025-.876a1 1 0 0 1 .197-.625l.742-.999a1 1 0 0 0 .01-1.177l-1.08-1.513a2 2 0 0 0-.936-.714l-.819-.302a2 2 0 0 1-.998-.808l-1.068-1.689a1 1 0 0 0-.5-.404l-.877-.322a1 1 0 0 1-.653-.878l-.1-1.666a1 1 0 0 0-.216-.562l-2.606-3.28a.6.6 0 0 0-.863-.08l-.923.801a1 1 0 0 1-1.259.042l-.528-.4a.8.8 0 0 0-.77-.108l-.642.247a.8.8 0 0 0-.486.953l.807 3.019a2 2 0 0 1-.256 1.609L3.19 11.97a1 1 0 0 0-.055.996l1.028 2.038a1 1 0 0 1 .07.723l-.217.765a1 1 0 0 0 .141.844l.562.807a2 2 0 0 0 .5.5l1.678 1.166c.251.174.538.288.84.334l3.826.585a2 2 0 0 1 .627.205l2.962 1.553a1 1 0 0 0 1.113-.124l.563-.479a1 1 0 0 0 .34-.915l-.108-.69a1 1 0 0 1 .545-1.049z\"/>";

export const DoMonsenorNouel = /*#__PURE__*/ defineComponent({
  name: 'GeoDoMonsenorNouel',
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
