// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.798 5.473a.3.3 0 0 0-.432-.27l-2.48 1.22a3 3 0 0 1-1.042.295l-2.816.267a3 3 0 0 1-1.376-.193L9.583 4.809a.6.6 0 0 0-.744.27l-.396.719a1 1 0 0 1-.844.517l-1.577.05a3 3 0 0 0-1.83.698l-.368.308a2 2 0 0 1-.913.432l-.893.169a.8.8 0 0 0-.631.965l.586 2.547a1 1 0 0 0 .886.772l.847.075a.6.6 0 0 1 .548.587l.016.922a.6.6 0 0 0 .345.533l1.203.563a.6.6 0 0 0 .608-.06l4.77-3.48a1 1 0 0 1 .663-.19l.508.037a1 1 0 0 1 .631.288l1.887 1.875a2 2 0 0 0 .73.463l1.349.487c.386.14.72.395.956.73l1.206 1.716a2 2 0 0 0 .526.513l2.633 1.758a.3.3 0 0 0 .466-.249z\"/>";

export const HnColon = /*#__PURE__*/ defineComponent({
  name: 'GeoHnColon',
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
