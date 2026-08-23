// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.22 8.1.589-5.273a.3.3 0 0 1 .421-.24l5.177 2.33a.3.3 0 0 0 .416-.21l.261-1.217a.3.3 0 0 1 .406-.215l1.063.43a.3.3 0 0 1 .183.33l-.344 1.958a.3.3 0 0 0 .295.352h1.59a2 2 0 0 1 1.051.299l1.74 1.076a3 3 0 0 0 .845.357l7.38 1.86a.6.6 0 0 1 .45.648l-.068.605a.6.6 0 0 1-.227.407l-3.188 2.484a1 1 0 0 1-.644.21l-1.391-.04a1 1 0 0 0-.864.447l-.816 1.234a2 2 0 0 1-.36.411l-2.263 1.954a3 3 0 0 0-.886 1.326l-.495 1.494a.602.602 0 0 1-1.126.045l-.468-1.111a3 3 0 0 0-1.2-1.395l-.755-.461a1 1 0 0 1-.475-.939l.078-.904a1 1 0 0 0-.129-.582l-1.83-3.201a1 1 0 0 0-.348-.358l-3.042-1.856a2 2 0 0 1-.9-1.225l-.08-.325a2 2 0 0 1-.047-.704Z\"/>";

export const KnSaintAnneSandyPoint = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintAnneSandyPoint',
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
