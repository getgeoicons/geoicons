// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.809 17.469-3.458-1.195a1 1 0 0 1-.274-.145l-5.27-3.953a1 1 0 0 0-.886-.158l-1.988.593a.6.6 0 0 1-.726-.344l-.856-2.06a.6.6 0 0 1 .12-.646L3.539 7.41a1 1 0 0 1 1.364-.073l1.21 1.016a1 1 0 0 0 1.387-.1l1.24-1.384a1 1 0 0 1 .932-.316l6.378 1.219a1 1 0 0 0 .45-.017l2.417-.657a1 1 0 0 1 1.045.342l2.53 3.177a1 1 0 0 1 .187.868l-.543 2.15a1 1 0 0 1-.419.59l-4.289 2.83a1 1 0 0 1-.38.15l-1.742.304a1 1 0 0 1-.497-.04Z\"/>";

export const DanubeRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoDanubeRegion',
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
