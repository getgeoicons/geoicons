// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.04 6.33c-2.553 3.525-2.715 8.59-1.906 12.082.072.31-.001.632-.17.902a3.88 3.88 0 0 0-.538 2.726c3.022-.366 5.587.133 6.902.556.37.119.762.168 1.145.1l1.302-.234a2 2 0 0 0 1.079-.571l4.632-4.745a.3.3 0 0 0 .06-.33l-3.75-8.517a4 4 0 0 0-.708-1.087L9.984 1.627a.6.6 0 0 0-.832-.052l-.561.477a.6.6 0 0 0-.115.784l.24.37a.6.6 0 0 1 .013.63l-.287.488c-.413.704-.924 1.345-1.403 2.006Z\"/>";

export const KnSaintThomasLowland = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintThomasLowland',
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
