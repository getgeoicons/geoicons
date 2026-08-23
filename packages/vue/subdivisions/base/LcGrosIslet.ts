// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.704 14.938a1 1 0 0 1 1.35.982l-.14 3.051a2 2 0 0 1-.158.695l-.842 1.967a.763.763 0 0 0 .987 1.008l2.024-.818a2 2 0 0 1 .96-.134l4.929.524a1 1 0 0 0 .976-.501l.154-.272a2 2 0 0 0 .202-1.461l-.137-.557a2 2 0 0 0-.356-.743l-.5-.652a2 2 0 0 1-.413-1.27l.032-1.273a2 2 0 0 0-.138-.783l-.8-2.036a1 1 0 0 1-.006-.717l.616-1.643a1 1 0 0 0-.288-1.112l-4.08-3.476a1 1 0 0 1-.282-1.126l.253-.646a1 1 0 0 0 .025-.656l-.194-.638a1 1 0 0 0-.728-.682l-2.441-.574a1 1 0 0 0-1.153.592l-.215.52a1 1 0 0 1-1.047.61l-1.08-.133a.897.897 0 1 0-.13 1.787l.704.016a1 1 0 0 1 .841.495l.042.072a1 1 0 0 1 .075.847l-.037.104a1 1 0 0 1-.613.602l-1.007.347a1.98 1.98 0 0 0-1.294 2.257l.305 1.524a3 3 0 0 0 .47 1.112l1.576 2.29a1 1 0 0 0 .194.21l.233.189a1 1 0 0 0 .98.159z\"/>";

export const LcGrosIslet = /*#__PURE__*/ defineComponent({
  name: 'GeoLcGrosIslet',
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
