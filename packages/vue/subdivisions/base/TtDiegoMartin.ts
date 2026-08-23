// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.788 8.992a.6.6 0 0 0-.314-.547l-.574-.312a1 1 0 0 0-1.243.236l-.178.212a1 1 0 0 1-.68.354l-5.802.497a1 1 0 0 0-.47.164L9.84 12.055a1 1 0 0 0-.433.992l.103.63a1 1 0 0 0 .944.838l.689.03a.6.6 0 0 1 .57.674l-.019.142a.6.6 0 0 0 .157.485l.182.194a.6.6 0 0 0 .777.085l.587-.403a1 1 0 0 0 .365-.46l.142-.364a1 1 0 0 1 1.048-.629l5.344.626a1 1 0 0 0 .882-.35l1.26-1.499a1 1 0 0 0 .235-.61z\"/>";

export const TtDiegoMartin = /*#__PURE__*/ defineComponent({
  name: 'GeoTtDiegoMartin',
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
