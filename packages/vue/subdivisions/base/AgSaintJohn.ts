// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.202 2.116a.3.3 0 0 0-.344-.256l-1.934.304a2 2 0 0 1-1.206-.186l-1.116-.559a1 1 0 0 0-.88-.007l-1.218.585a3 3 0 0 0-1.415 1.426l-1.818 3.862a1 1 0 0 0 .354 1.26l2.037 1.345a.798.798 0 0 1-.743 1.405l-5.87-2.407a1 1 0 0 0-1.223.388L2.456 13a1 1 0 0 0 .073 1.173l.195.236a1 1 0 0 0 1.166.283l4.568-1.964a.3.3 0 0 1 .337.07l1.58 1.683a1 1 0 0 0 .596.306l2.564.343a1 1 0 0 1 .704.444l.12.183a1 1 0 0 1-.037 1.148L13.23 18.36a1 1 0 0 0-.194.486l-.367 3.198a.3.3 0 0 0 .392.32l3.28-1.08a.3.3 0 0 1 .332.104l.899 1.188a.3.3 0 0 0 .404.07l3.195-2.107a1 1 0 0 0 .44-.688l.276-1.867a.3.3 0 0 0-.266-.343l-1.399-.146a1 1 0 0 1-.711-.415l-.645-.907a1 1 0 0 1-.152-.833l.78-2.984c.057-.214.077-.437.06-.658l-.346-4.547a.3.3 0 0 0-.222-.267l-1.162-.309a.3.3 0 0 1-.223-.274l-.07-1.359a.3.3 0 0 1 .277-.314l2.389-.18a.3.3 0 0 0 .274-.34z\"/>";

export const AgSaintJohn = /*#__PURE__*/ defineComponent({
  name: 'GeoAgSaintJohn',
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
