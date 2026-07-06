// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.45 2.43a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0Zm2.109 15.856a1.312 1.312 0 1 1-2.624 0 1.312 1.312 0 0 1 2.624 0ZM10.09 4.814a1.267 1.267 0 1 1-2.534 0 1.267 1.267 0 0 1 2.534 0Zm8.731 16.691a1.295 1.295 0 1 1-2.59 0 1.295 1.295 0 0 1 2.59 0ZM17.336 6.159l-2.285 1.697a1 1 0 0 0-.185 1.428l.06.075a1 1 0 0 0 1.363.19l1.503-1.075 1.888 1.732a1 1 0 0 0 1.3.045l.128-.102a1 1 0 0 0 .063-1.51l-2.553-2.405a1 1 0 0 0-1.282-.075Z\"/>";

export const Ck = /*#__PURE__*/ defineComponent({
  name: 'GeoCk',
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
