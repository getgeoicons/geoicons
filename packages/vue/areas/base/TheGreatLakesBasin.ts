// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.112 17.758-.6-1.599a.98.98 0 0 0-1.11-.616l-.153.03a.626.626 0 0 1-.742-.714l.387-2.364a1 1 0 0 0-.987-1.161H2.791a1 1 0 0 1-.73-.316l-.24-.256a1 1 0 0 1-.02-1.345l.197-.225a.704.704 0 0 1 .902-.13c.283.176.65.131.881-.109l.702-.728a1 1 0 0 0 .271-.824l-.198-1.51a1 1 0 0 1 .32-.871l.442-.4a1 1 0 0 1 1.33-.012l.914.8a1 1 0 0 0 .31.184l2.793 1.037a1 1 0 0 1 .415.292l1.04 1.227a1 1 0 0 0 .894.346l2.194-.291a1 1 0 0 1 1.046.587l.43.972q.083.187.233.328l1.155 1.072a1 1 0 0 0 .43.235l2.321.598a1 1 0 0 0 .156.028l1.095.102a.634.634 0 0 1 .469.981l-1.246 1.884a1 1 0 0 1-.23.244l-.888.676a1 1 0 0 1-1.14.05l-.094-.06a1 1 0 0 0-.571-.154l-.166.006a1 1 0 0 0-.77.407l-1.346 1.833a1 1 0 0 1-.354.3l-2.728 1.383a1 1 0 0 1-1.103-.133l-1.378-1.181a.945.945 0 0 0-1.074-.109.945.945 0 0 1-1.343-.494Z\"/>";

export const TheGreatLakesBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoTheGreatLakesBasin',
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
