// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.654 10.174v-.83a1 1 0 0 1 .836-.986l.74-.123a1 1 0 0 0 .678-1.526L2.696 3.257a.845.845 0 0 1 1.246-1.111l3.43 2.798a1 1 0 0 0 .631.225h3.28a1 1 0 0 1 .6.2l2.048 1.536a1 1 0 0 1 .345.474l.547 1.585a1 1 0 0 0 1.097.663l1.865-.287a1 1 0 0 1 .844.268l1.664 1.597a1 1 0 0 1-.366 1.667l-4.765 1.643a1 1 0 0 1-1.312-.777l-.613-3.584a1 1 0 0 0-1.543-.662l-4.132 2.774a1 1 0 0 1-.657.165l-1.925-.193a1 1 0 0 1-.5-.195l-1.426-1.07a1 1 0 0 1-.4-.8ZM8.19 21.659l-1.698-1.941a1 1 0 0 1 .225-1.508l1.903-1.182a1 1 0 0 1 1.35.28l.312.452a1 1 0 0 0 .823.431h1.215a1 1 0 0 0 .937-.649l.134-.36a1 1 0 0 1 1.384-.543l.08.04a1 1 0 0 1 .404 1.418l-2.512 4.093a1 1 0 0 1-1.072.452l-2.953-.666a1 1 0 0 1-.532-.317Z\"/>";

export const AtlanticCanada = /*#__PURE__*/ defineComponent({
  name: 'GeoAtlanticCanada',
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
