// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.243 22.753-1.847-.19a.6.6 0 0 1-.538-.575l-.01-.296a1 1 0 0 0-.292-.668l-1.004-1.009a1 1 0 0 0-.254-.185l-1.01-.516a.6.6 0 0 1-.316-.415l-1.478-7.256a1 1 0 0 1 .167-.783l.442-.616a1 1 0 0 0 .188-.583V8.476a1 1 0 0 1 .129-.491l.812-1.441a1 1 0 0 0 .066-.141l.71-1.901a1 1 0 0 0 .06-.295l.108-1.924a1 1 0 0 1 .794-.924l.537-.112a1 1 0 0 1 .453.011l4.633 1.192-.521 2.689a1 1 0 0 0 .005.404l.166.76a1 1 0 0 1-.148.774L15.37 8.15a1 1 0 0 0-.153.37l-.479 2.475-2.719-.648-.877 3.425 4.259 6.52a.6.6 0 0 1 .057.544l-.594 1.537a.6.6 0 0 1-.621.38Z\"/>";

export const WestCoastUsWithoutAlaska = /*#__PURE__*/ defineComponent({
  name: 'GeoWestCoastUsWithoutAlaska',
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
