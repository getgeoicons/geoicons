// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.675 20.701 2.646 1.777a.5.5 0 0 0 .73-.199l1.735-3.615a.5.5 0 0 1 .127-.165l2.594-2.202a.5.5 0 0 0 .1-.647l-.806-1.283a.5.5 0 0 1-.076-.263l-.04-7.668a.5.5 0 0 1 .106-.31l2.223-2.845-1.692.234a.5.5 0 0 1-.398-.12l-.573-.501a.5.5 0 0 0-.536-.079l-1.398.635a.5.5 0 0 0-.197.161l-.65.894a.5.5 0 0 1-.487.2l-2.624-.44a.5.5 0 0 1-.206-.086L9.924 2.527a.5.5 0 0 0-.289-.092H7.77a.5.5 0 0 1-.286-.09l-1.37-.956a.5.5 0 0 0-.551-.013L3.476 2.684a.5.5 0 0 0-.18.653l2.287 4.43a.5.5 0 0 1-.032.512L3.216 11.68a.5.5 0 0 0 .052.63l.615.64a.5.5 0 0 1 .06.618l-.436.676a.5.5 0 0 0 .173.706l7.281 4.136a.5.5 0 0 1 .237.306l.272 1.023a.5.5 0 0 0 .205.286Z\"/>";

export const Ke = /*#__PURE__*/ defineComponent({
  name: 'GeoKe',
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
