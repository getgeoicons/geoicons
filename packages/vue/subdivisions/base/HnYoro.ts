// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.75 9.631a.8.8 0 0 0-.618-.737l-3.296-.762a4 4 0 0 0-1.463-.063l-3.768.536a2 2 0 0 0-.735.257l-1.465.864a2 2 0 0 1-1.47.225l-3.52-.821a2 2 0 0 1-.884-.463L3.614 6.938a.6.6 0 0 0-.982.291l-1.304 4.898a1 1 0 0 0 .178.873l1.856 2.38a.8.8 0 0 0 .803.29l1.41-.312a.8.8 0 0 1 .86.373l.658 1.105a.8.8 0 0 0 .542.378l1.961.363a.8.8 0 0 0 .929-.62l.128-.609a1 1 0 0 1 .874-.787l2.115-.223a1 1 0 0 0 .887-.868l.146-1.142a1 1 0 0 1 .603-.794l3.717-1.572a1 1 0 0 1 .98.115l.532.39a.8.8 0 0 0 .917.02l.997-.664a.8.8 0 0 0 .355-.707z\"/>";

export const HnYoro = /*#__PURE__*/ defineComponent({
  name: 'GeoHnYoro',
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
