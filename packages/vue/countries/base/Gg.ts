// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.516 19.716.055-.346a2 2 0 0 1 .96-1.411l4.482-2.642a2 2 0 0 1 1.225-.265l.394.041a1 1 0 0 1 .895 1.042l-.039.811a1 1 0 0 1-.366.727l-.425.348a1 1 0 0 0-.366.806l.058 1.795a1 1 0 0 1-.925 1.03l-2.667.2c-.37.027-.74-.049-1.07-.22l-1.683-.873a1 1 0 0 1-.528-1.043Zm17.51-16.263L21.06 2.27a.958.958 0 0 1 .983 1.645l-2.006 1.232a.986.986 0 1 1-1.012-1.693Zm-4.6 17.637-.069-.207a1 1 0 0 1 .311-1.087l.547-.453a1 1 0 0 1 1.462.204l.203.295a1 1 0 0 1-.351 1.447l-.681.366a1 1 0 0 1-1.422-.565Z\"/>";

export const Gg = /*#__PURE__*/ defineComponent({
  name: 'GeoGg',
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
