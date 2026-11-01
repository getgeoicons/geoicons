// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.976 14.102 2.039-2.071a2 2 0 0 1 1.166-.58l2.74-.358a2 2 0 0 1 .85.073l1.034.32a.748.748 0 0 1-.388 1.443l-.184-.042a1.94 1.94 0 0 0-1.6.341l-.079.06a2 2 0 0 1-1.067.397l-.404.028a2 2 0 0 0-.968.328l-1.083.717a1 1 0 0 1-.804.134l-1.113-.289a.3.3 0 0 1-.139-.5Zm12.452-2.719.627-2.163a.3.3 0 0 1 .297-.217l2.509.079a.3.3 0 0 1 .157.55l-3.136 2.085a.3.3 0 0 1-.454-.334Zm-16.42 1.05 1.769-.216a.735.735 0 0 0 .007-1.458l-.647-.086a1 1 0 0 0-.625.122l-.88.5a.611.611 0 0 0 .375 1.137Z\"/>";

export const Vg = /*#__PURE__*/ defineComponent({
  name: 'GeoVg',
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
