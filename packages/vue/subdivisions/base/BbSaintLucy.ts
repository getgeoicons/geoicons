// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.914 13.842a1 1 0 0 0 .458-.559l.301-.92a1 1 0 0 0-.052-.752l-.726-1.48a1 1 0 0 0-.637-.524l-1.043-.282a1 1 0 0 1-.462-.274l-3.886-4.065a4 4 0 0 0-.658-.554l-1.441-.97a4 4 0 0 0-.672-.364l-.397-.169a4 4 0 0 0-1.744-.313l-.31.014a4 4 0 0 0-1.454.346L5.57 4.6a2 2 0 0 0-.83.691L1.572 9.897a2 2 0 0 0-.351 1.198l.187 5.842a3 3 0 0 0 .108.704l.781 2.824a.6.6 0 0 0 .99.276L5.62 18.54a1 1 0 0 1 .893-.252l2.46.52a1 1 0 0 0 .916-.275l1.728-1.74a1 1 0 0 1 .691-.294l2.45-.045a2 2 0 0 0 1.177-.41l.608-.465a2 2 0 0 1 1.236-.41l1.485.016a1 1 0 0 0 .504-.13z\"/>";

export const BbSaintLucy = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintLucy',
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
