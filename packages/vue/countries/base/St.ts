// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.807 22.032-.735-3.948a.5.5 0 0 1 .112-.416l1.994-2.338a1 1 0 0 1 .779-.35l1.11.02a1 1 0 0 1 .85.5l.491.856a1 1 0 0 1 .129.406l.1 1.072a1 1 0 0 1-.172.66l-1.383 2.01a1 1 0 0 1-.245.25l-2.25 1.594a.5.5 0 0 1-.78-.316ZM15.5 3.64c.12-.629.381-1.517.527-1.992a.49.49 0 0 1 .453-.347l1.782-.072a.5.5 0 0 1 .498.648l-.754 2.42a.5.5 0 0 1-.622.329l-1.556-.47a.454.454 0 0 1-.329-.515Z\"/>";

export const St = /*#__PURE__*/ defineComponent({
  name: 'GeoSt',
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
