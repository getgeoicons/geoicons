// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.394 22.17a1 1 0 0 0 .967-.47l.656-1.068a4 4 0 0 0 .56-1.597l.15-1.2c.049-.384.04-.773-.023-1.155l-.46-2.757a.6.6 0 0 0-.8-.464l-1.631.601a.6.6 0 0 1-.665-.174l-3.368-3.96a1 1 0 0 1 .532-1.62l4.813-1.137a1 1 0 0 0 .708-1.319l-.594-1.617a1 1 0 0 0-1.255-.603l-1.03.343a1 1 0 0 1-.774-.059l-3.84-1.972a1 1 0 0 0-.75-.067l-2.452.75a1 1 0 0 0-.705.896l-.095 1.562a1 1 0 0 1-.403.743L6.971 8.022l-5.526 4.934a.6.6 0 0 0-.193.543l.438 2.724a.6.6 0 0 0 .631.503l3.324-.213a1 1 0 0 1 .934.504l1.905 3.357a.6.6 0 0 0 .65.29l5.849-1.288a1 1 0 0 1 1.028.396l1.214 1.699a1 1 0 0 0 .698.412z\"/>";

export const HnLaPaz = /*#__PURE__*/ defineComponent({
  name: 'GeoHnLaPaz',
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
