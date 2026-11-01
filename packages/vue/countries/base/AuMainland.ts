// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.283 17.706.734.407a1 1 0 0 0 .827.067l6.308-2.286a1 1 0 0 1 1.01.198l1.439 1.297a2 2 0 0 0 .748.426l1.04.322a1 1 0 0 1 .604.52l.548 1.137a1 1 0 0 0 .636.53l1.082.297a2 2 0 0 0 1.233-.057l1.902-.716a1 1 0 0 0 .589-.599l1.646-4.592c.112-.312.145-.648.095-.977l-.214-1.396a2 2 0 0 0-.496-1.042l-2.601-2.867a3 3 0 0 1-.588-.962L17.426 3.68a.699.699 0 0 0-1.352.2l-.191 2.863a.6.6 0 0 1-.233.435l-.036.028a.6.6 0 0 1-.623.066l-1.674-.794a.6.6 0 0 1-.206-.923l.443-.539a.6.6 0 0 0-.367-.973l-1.324-.215a1 1 0 0 0-.984.419l-.764 1.108a.6.6 0 0 1-.695.225l-.882-.314a1 1 0 0 0-1.138.346L5.751 7.83a2 2 0 0 1-1.035.724l-2.57.764a1 1 0 0 0-.708.847l-.188 1.666a2 2 0 0 0 .095.869l.782 2.295a1 1 0 0 1-.003.653l-.299.851a1 1 0 0 0 .458 1.206Z\"/>";

export const AuMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoAuMainland',
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
