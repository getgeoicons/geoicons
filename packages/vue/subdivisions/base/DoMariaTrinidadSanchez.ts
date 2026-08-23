// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.531 19.59a1 1 0 0 0-.286-.691L19.03 16.64a9 9 0 0 1-1.353-1.773l-1.184-2.033a2 2 0 0 1-.257-1.249l.242-1.99a1 1 0 0 0-.392-.92l-.663-.498a1 1 0 0 1-.371-1.039l.52-2.114a2 2 0 0 0-.079-1.208l-.166-.424a2 2 0 0 0-.867-1.006l-1.549-.888a2 2 0 0 0-1.118-.261l-2.101.129a2 2 0 0 0-1.376.672l-.698.79a1 1 0 0 0-.25.662v1.572a1 1 0 0 1-.57.902l-1.278.61a2 2 0 0 1-.798.195l-1.97.064a.3.3 0 0 0-.29.31l.047 1.314a.3.3 0 0 0 .254.286l1.526.233a1 1 0 0 1 .835.83l.366 2.27a.3.3 0 0 0 .255.25l1.564.213a.3.3 0 0 1 .24.401l-1.08 2.91a.3.3 0 0 0 .202.393l3.28.902a.3.3 0 0 1 .22.316l-.159 1.78a.3.3 0 0 0 .206.312l9.395 3.083a1 1 0 0 0 .92-.156l.62-.476a1 1 0 0 0 .393-.803z\"/>";

export const DoMariaTrinidadSanchez = /*#__PURE__*/ defineComponent({
  name: 'GeoDoMariaTrinidadSanchez',
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
