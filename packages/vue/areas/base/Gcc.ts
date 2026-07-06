// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.261 12.252-2.9-3.596a.6.6 0 0 1-.127-.455l.119-.905 2.551-.983-.77-1.648 1.628-.326a1 1 0 0 1 .688.11l2.042 1.154a1 1 0 0 1 .15.104l1.907 1.597a1 1 0 0 0 .709.231l.217-.015a1 1 0 0 0 .832-.558l.144-.296a.6.6 0 0 1 .524-.336l.34-.01a.6.6 0 0 1 .492.235l.236.307a.6.6 0 0 1 .096.545l-.063.2a1 1 0 0 0 .101.821l1.765 2.884a1 1 0 0 0 .494.411l.819.315a1 1 0 0 0 .507.056l1.016-.153a1 1 0 0 0 .549-.272l1.736-1.689.467 1.849a1 1 0 0 0 .552.663l.634.292a1 1 0 0 1 .417.358l.667 1.01-1.483 2.69a1 1 0 0 1-.219.27l-1.947 1.696a1 1 0 0 1-.407.214l-1.631.42-1.024-2.353-2.617.731-1.675 1.914L10.07 18.7a.6.6 0 0 0-.63.01l-1.23.784-2.976-3.954a1 1 0 0 1-.174-.369l-.603-2.525a1 1 0 0 0-.195-.395Z\"/>";

export const Gcc = /*#__PURE__*/ defineComponent({
  name: 'GeoGcc',
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
