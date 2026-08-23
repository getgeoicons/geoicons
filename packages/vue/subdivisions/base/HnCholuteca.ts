// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.513 9.668a1 1 0 0 1-.23 1.199L1.895 13.86a1 1 0 0 0-.134 1.354l.828 1.09a2 2 0 0 1 .35.736l.401 1.64a2 2 0 0 0 .535.945l2.628 2.604a1 1 0 0 0 .76.288l6.765-.384a1 1 0 0 0 .613-.256l2.074-1.871a1 1 0 0 0 .329-.693l.192-3.88a1 1 0 0 1 .453-.79l.948-.617a1 1 0 0 1 1.078-.009l1.053.662a1 1 0 0 0 1.109-.03l.409-.29a1 1 0 0 0 .409-.982l-1.542-9.156a1 1 0 0 0-1.226-.804l-2.932.724a1 1 0 0 0-.53.332L13.7 7.806a1 1 0 0 1-1.128.294l-2.123-.816a1 1 0 0 1-.615-.706l-.44-1.886a1 1 0 0 0-.825-.761l-2.728-.41a1 1 0 0 1-.804-.684l-.198-.62a1 1 0 0 0-1.04-.691l-.23.02a1 1 0 0 0-.883.759l-.112.459a2 2 0 0 0 .156 1.373z\"/>";

export const HnCholuteca = /*#__PURE__*/ defineComponent({
  name: 'GeoHnCholuteca',
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
