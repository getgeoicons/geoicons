// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.144 17.439v1.106a1 1 0 0 1-.574.905l-1.685.793a1 1 0 0 1-.267.083l-1.511.243a1 1 0 0 0-.45.194l-1.919 1.47a1 1 0 0 1-1.356-.13l-.469-.529a1 1 0 0 0-.364-.26l-.66-.275a1 1 0 0 1-.49-1.408l1.261-2.27a1 1 0 0 1 .266-.308l3.571-2.741a1 1 0 0 1 .805-.187l1.96.392a1 1 0 0 1 .678.495l1.079 1.94a1 1 0 0 1 .125.486Zm-8.75-7.735L7.187 8.618a1 1 0 0 1-.331-.744v-3.03a1 1 0 0 1 .108-.453l.95-1.876a1 1 0 0 1 .157-.226l.638-.69a1 1 0 0 1 .902-.308l2.455.418a1 1 0 0 1 .403.165l2.53 1.759a1 1 0 0 1 .218.207l1.277 1.643a1 1 0 0 1-.222 1.437l-3.24 2.232a1 1 0 0 1-.384.16l-3.402.632a1 1 0 0 1-.852-.24Z\"/>";

export const Sh = /*#__PURE__*/ defineComponent({
  name: 'GeoSh',
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
