// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.81 10.458a1 1 0 0 0 .362-.803L20.09 7.22a1 1 0 0 0-.7-.92l-1.348-.425a1 1 0 0 1-.7-.978l.028-1.2a1 1 0 0 0-.13-.518l-.765-1.349a1 1 0 0 0-.91-.505l-3.513.144a.6.6 0 0 0-.545.79l1.29 3.83a1.5 1.5 0 0 1-.803 1.844l-1.598.725a2 2 0 0 0-.919.843l-1.45 2.587a2 2 0 0 1-1.436.998l-2.32.362a.535.535 0 0 0-.22.97l5.778 3.948a4 4 0 0 1 1.284 1.44l1.165 2.213a.6.6 0 0 0 1.026.06l2.722-3.974a.6.6 0 0 0-.236-.88l-1.237-.59a.958.958 0 0 1 .498-1.82l.756.067a2 2 0 0 0 1.321-.352l.906-.632a1 1 0 0 0 .428-.808l.014-1.069a1 1 0 0 1 .361-.757z\"/>";

export const NiLeon = /*#__PURE__*/ defineComponent({
  name: 'GeoNiLeon',
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
