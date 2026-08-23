// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.373 7.382a1 1 0 0 0-.506.692l-.269 1.41a1 1 0 0 1-.263.509l-1.598 1.653a1 1 0 0 0-.255.468l-.13.555a1 1 0 0 0 .4 1.045l1.952 1.371a3 3 0 0 1 .676.655l1.225 1.634a3 3 0 0 1 .395.71l.727 1.863a.6.6 0 0 0 .797.333l.592-.256a.6.6 0 0 0 .362-.536l.012-.466a1 1 0 0 1 .502-.843l1.524-.874a1 1 0 0 1 .702-.111l1.194.25a1 1 0 0 0 .955-.317l1.938-2.195a1 1 0 0 0 .054-1.257l-.446-.602a.6.6 0 0 1 .354-.943l5.751-1.252a2 2 0 0 0 1.232-.833l.081-.121a2 2 0 0 0 .325-.85l.06-.44a2 2 0 0 0-.192-1.166l-1.832-3.663a.6.6 0 0 0-.537-.331h-3.998a3 3 0 0 0-.49.04l-5.496.91a3 3 0 0 0-.939.323z\"/>";

export const BsCentralAndros = /*#__PURE__*/ defineComponent({
  name: 'GeoBsCentralAndros',
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
