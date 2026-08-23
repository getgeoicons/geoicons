// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.154 9.027a1 1 0 0 0-.193.54l-.677 12.527a.6.6 0 0 0 .664.63l2.283-.25a8 8 0 0 1 1.617-.012l2.71.254a.6.6 0 0 0 .632-.762l-.299-1.049a1 1 0 0 1 .304-1.026l3.962-3.466a1 1 0 0 0 .333-.619l.18-1.328a1 1 0 0 1 .483-.728l1.522-.895a1 1 0 0 1 1.039.015l.566.355a.6.6 0 0 0 .802-.152l4.52-6.138a.616.616 0 0 0-.504-.982l-3.115.043a.6.6 0 0 1-.607-.649l.062-.764a1.5 1.5 0 0 0-.252-.959L16.864 1.65a1 1 0 0 0-.846-.441l-2.238.037a2 2 0 0 0-.884.223l-.751.388a.84.84 0 0 0-.452.78 1.67 1.67 0 0 1-.882 1.546l-2.798 1.5a6 6 0 0 1-.819.362l-3.28 1.168a2 2 0 0 0-.94.699z\"/>";

export const BzToledo = /*#__PURE__*/ defineComponent({
  name: 'GeoBzToledo',
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
