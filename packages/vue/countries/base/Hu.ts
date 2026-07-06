// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.243 16.743-3.567 1.82a.5.5 0 0 1-.374.033l-2.98-.917a.5.5 0 0 1-.212-.13l-3.608-3.736a.5.5 0 0 1-.034-.656l.798-1.02a.5.5 0 0 0 .107-.32l-.05-1.92a.5.5 0 0 1 .544-.512l1.106.098A.5.5 0 0 0 4.47 9.2l.388-.818a.5.5 0 0 1 .809-.135l1.01 1.031a.5.5 0 0 0 .386.15l1.997-.116a.5.5 0 0 0 .448-.349l.29-.922a.5.5 0 0 1 .332-.328l2.013-.609a.5.5 0 0 1 .258-.008l1.22.281a.5.5 0 0 0 .53-.212l.966-1.467a.5.5 0 0 1 .392-.224l2.279-.116a.5.5 0 0 1 .422.195l.541.704a.5.5 0 0 0 .501.185l1.112-.238a.5.5 0 0 1 .426.106l1.73 1.45a.5.5 0 0 1 .14.576l-.232.561a.5.5 0 0 1-.39.303l-1.133.164a.5.5 0 0 0-.367.257l-3.618 6.683a.5.5 0 0 1-.424.262l-4.04.122a.5.5 0 0 0-.212.055Z\"/>";

export const Hu = /*#__PURE__*/ defineComponent({
  name: 'GeoHu',
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
