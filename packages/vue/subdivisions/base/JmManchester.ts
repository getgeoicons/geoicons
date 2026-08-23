// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.424 1.8a.8.8 0 0 0-.57.796l.169 4.487a3 3 0 0 0 .126.756l1.782 5.888a3 3 0 0 1 .098.443l.978 6.821a1 1 0 0 0 .593.776l2.128.92a1 1 0 0 0 .543.071l6.706-.991a1 1 0 0 0 .829-.768l.25-1.1a1 1 0 0 0-.231-.888l-.667-.745a2 2 0 0 1-.42-.74l-.312-1.002a2 2 0 0 1-.071-.874l.285-2.021a1 1 0 0 0-.105-.605l-4.872-9.27a1 1 0 0 0-.481-.45L8.098 1.5a2 2 0 0 0-1.384-.087z\"/>";

export const JmManchester = /*#__PURE__*/ defineComponent({
  name: 'GeoJmManchester',
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
