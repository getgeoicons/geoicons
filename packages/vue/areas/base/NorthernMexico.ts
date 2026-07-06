// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.433 7.443-1.636-.749a.817.817 0 0 1 .665-1.491L6.381 6.9a1 1 0 0 0 .402.082l2.865-.014.214-1.083 1.423.06a1 1 0 0 1 .67.299l1.413 1.437a1 1 0 0 1 .215.33l.473 1.183a1 1 0 0 0 .406.481l.309.19a1 1 0 0 0 1.265-.184l.246-.273a1 1 0 0 1 .823-.328l.19.015a1 1 0 0 1 .626.29l.672.671a1 1 0 0 1 .19.265l1.31 2.663.123.273a1 1 0 0 0 .476.492l.278.135q.132.064.274.088l1.556.257-.652 1.426a1 1 0 0 0-.09.379l-.119 3.157-2.296-.602a1 1 0 0 1-.454-.26l-.134-.134a1 1 0 0 1-.29-.63l-.052-.674a1 1 0 0 0-.589-.837l-.913-.408a1 1 0 0 0-.978.09l-.871.604a1 1 0 0 0-.397.563l-.39 1.449a.6.6 0 0 1-.49.437l-1.199.183a.6.6 0 0 1-.559-.219l-1.77-2.213a1 1 0 0 0-.235-.213l-1.706-1.114a1 1 0 0 1-.45-.93l.045-.471a1 1 0 0 0-.396-.893l-1.247-.936a1 1 0 0 1-.157-.147l-2.008-2.33a1 1 0 0 1-.222-.453l-.185-.903a1 1 0 0 0-.563-.708Z\"/>";

export const NorthernMexico = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernMexico',
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
