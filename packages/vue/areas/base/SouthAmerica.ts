// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.749 10.504-.973-.508a1 1 0 0 1-.355-.312L4.835 7.428a1 1 0 0 1-.182-.555l-.025-1.247a1 1 0 0 1 .226-.654l.404-.494a1 1 0 0 0 .225-.684l-.046-.899a1 1 0 0 1 .53-.935l1.054-.557a1 1 0 0 1 .792-.063l.796.273a1 1 0 0 0 .343.054l1.558-.029a1 1 0 0 1 .646.22l1.213.977a1 1 0 0 0 .475.21l.894.137a1 1 0 0 1 .806.7l.162.54a1 1 0 0 0 .62.653l2.29.82a1 1 0 0 1 .255.135l1.213.892a.6.6 0 0 1 .237.58l-.112.69a1 1 0 0 1-.385.64l-.716.539a1 1 0 0 0-.337.453l-.723 1.969a1 1 0 0 1-.672.619l-.99.273a1 1 0 0 0-.704.725l-.16.651a1 1 0 0 1-.195.392l-1.771 2.182a1 1 0 0 1-.124.127l-1.337 1.154a1 1 0 0 0-.254.337l-.877 1.891a1 1 0 0 0 .143 1.065l.363.43a.6.6 0 0 1-.295.964l-.492.14a.6.6 0 0 1-.396-.024l-.65-.273a1 1 0 0 1-.531-.524l-.334-.767a1 1 0 0 1-.081-.453l.197-3.604a1 1 0 0 1 .03-.197l.335-1.288a1 1 0 0 0 .032-.252v-3.97a1 1 0 0 0-.536-.887Z\"/>";

export const SouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthAmerica',
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
