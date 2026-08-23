// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.94 22.49a.3.3 0 0 0 .439.115l1.961-1.34a6 6 0 0 0 1.36-1.281l4.975-6.427a4 4 0 0 0 .57-1.011L20.764 8.6a2.8 2.8 0 0 0-.537-2.885l-.701-.774a2 2 0 0 0-1.398-.656L16.84 4.23a1 1 0 0 1-.717-.348L14.221 1.66a.6.6 0 0 0-.85-.062l-.751.657a2 2 0 0 0-.533.745l-.438 1.064a2 2 0 0 1-1.17 1.12L7.145 6.388a1 1 0 0 0-.612.634l-.509 1.574a1 1 0 0 1-.415.537l-1.455.925a1 1 0 0 0-.426.57l-.617 2.168a2 2 0 0 0-.048.882l.077.453a.6.6 0 0 0 .602.5l1.124-.021a.6.6 0 0 1 .608.662l-.116 1.112a1 1 0 0 0 .166.664l1.154 1.706a2 2 0 0 1 .252.52l.588 1.868a.3.3 0 0 0 .358.201l1.098-.272a.3.3 0 0 1 .341.159z\"/>";

export const BbSaintPhilip = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintPhilip',
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
