// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.146 3.465a2 2 0 0 0-.782.984L5.402 9.793a.6.6 0 0 1-.369.361l-.781.268a.6.6 0 0 0-.39.427l-.598 2.489a1 1 0 0 0-.023.338l.573 5.491a.6.6 0 0 0 .733.523l2.885-.67a.6.6 0 0 1 .473.089l5.104 3.471a1 1 0 0 0 .417.162l1.175.173a1 1 0 0 0 .823-.254l.776-.715a1 1 0 0 0 .32-.677l.075-1.282a1 1 0 0 1 .484-.8l.284-.17a1 1 0 0 0 .427-1.198l-1.284-3.553a2 2 0 0 1-.022-1.296l.336-1.04a1 1 0 0 1 1.025-.69l1.896.14a.842.842 0 0 0 .51-1.554l-.364-.228a1 1 0 0 1-.468-.877l.055-1.87q.018-.572.127-1.133l.699-3.58a.6.6 0 0 0-.468-.702l-1.75-.359a1 1 0 0 0-.583.056l-2.048.847a1 1 0 0 1-.574.057l-3.107-.606a1 1 0 0 0-.74.145z\"/>";

export const GdSaintAndrew = /*#__PURE__*/ defineComponent({
  name: 'GeoGdSaintAndrew',
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
