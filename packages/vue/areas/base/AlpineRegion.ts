// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.04 19.036-1.107-.134a1 1 0 0 1-.652-.358l-.778-.945a1 1 0 0 1-.207-.836l.493-2.407a1 1 0 0 1 .307-.54l1.11-1.007q.162-.149.249-.352l.655-1.558a1 1 0 0 1 .307-.4l2.282-1.781a1 1 0 0 1 .286-.156L10.6 7.3a1 1 0 0 1 .196-.047l7.708-1.042a1 1 0 0 0 .393-.141l1.495-.927a1 1 0 0 1 .831-.103l.73.233a1 1 0 0 1 .694.868l.122 1.458a1 1 0 0 1-.18.662l-1.551 2.19a1 1 0 0 1-.524.378l-2.292.7a1 1 0 0 1-.562.007l-1.26-.356a1 1 0 0 0-.862.158l-1.97 1.448a1 1 0 0 1-.828.167l-3.84-.927a1 1 0 0 0-.717.096l-1.034.568a1 1 0 0 0-.375.362l-.403.672a1 1 0 0 0-.133.656l.054.373a1 1 0 0 0 1.106.852l.039-.005a.6.6 0 0 1 .614.85l-.083.177a1 1 0 0 1-.64.542l-1.162.32a1 1 0 0 0-.5.32l-.74.878a1 1 0 0 1-.885.348Z\"/>";

export const AlpineRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoAlpineRegion',
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
