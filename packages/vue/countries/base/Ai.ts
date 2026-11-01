// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.618 13.235-.047.15a1 1 0 0 1-.853.694l-2.928.298a1 1 0 0 0-.51.203l-3.81 2.933a.582.582 0 0 0 .442 1.036l2.388-.364a2 2 0 0 0 .747-.274l1.757-1.082a1 1 0 0 1 1.33.259l.066.09a.6.6 0 0 0 .69.208l1.715-.629a2 2 0 0 0 .712-.45l.84-.823a2 2 0 0 1 .59-.401l4.002-1.774a2 2 0 0 0 .835-.692l.373-.539a1 1 0 0 1 .39-.333l1.57-.753a1 1 0 0 0 .55-.715l.31-1.626a1 1 0 0 1 .43-.647l1.08-.715a.827.827 0 0 0-.87-1.404l-2.474 1.43a1 1 0 0 1-.468.134l-2.151.07a2 2 0 0 0-.904.249L12.07 9.62a1 1 0 0 0-.432 1.276 1 1 0 0 1-.525 1.32l-.933.398a1 1 0 0 0-.562.62Z\"/>";

export const Ai = /*#__PURE__*/ defineComponent({
  name: 'GeoAi',
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
