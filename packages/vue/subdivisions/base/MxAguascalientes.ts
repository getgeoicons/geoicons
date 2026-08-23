// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.332 12.38a1 1 0 0 0-.432-.659l-2.28-1.51a1 1 0 0 1-.444-.75l-.187-2.27a1 1 0 0 0-.947-.916l-1.26-.063a1 1 0 0 1-.703-.342L13.64 3.076a.6.6 0 0 0-.83-.071L9.173 5.958a1 1 0 0 1-.579.222l-2.32.119a.6.6 0 0 0-.566.546l-.273 3.052a1 1 0 0 1-.434.738l-1.198.813a1 1 0 0 0-.339.391l-1.942 4.005a1 1 0 0 0 .218 1.168l1.907 1.777a1 1 0 0 0 1.153.15l1.054-.563a1 1 0 0 1 .923-.01l5.46 2.764a1 1 0 0 0 .909-.002l2.68-1.374a3 3 0 0 0 1.126-1.003l1.499-2.242a1 1 0 0 1 .552-.404l3.28-.954a.6.6 0 0 0 .422-.681z\"/>";

export const MxAguascalientes = /*#__PURE__*/ defineComponent({
  name: 'GeoMxAguascalientes',
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
