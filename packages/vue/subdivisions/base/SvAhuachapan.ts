// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.358 3.794a1 1 0 0 0-.705-.327l-1.406-.05a2 2 0 0 1-1.094-.375l-.715-.513a2 2 0 0 0-1.711-.3l-2.196.62a2 2 0 0 0-.965.614L10.46 5.886a2 2 0 0 1-.475.4L7.14 8.006a1 1 0 0 0-.423.515l-.531 1.47a1 1 0 0 1-.393.497l-2.031 1.33a2 2 0 0 0-.835 1.15l-.36 1.326a2 2 0 0 0 .107 1.343l.16.355a1 1 0 0 1-.333 1.224l-.878.625a.3.3 0 0 0 .05.517l7.633 3.496a.6.6 0 0 0 .687-.135l1.617-1.721a1 1 0 0 1 1.267-.159l1.762 1.125a1 1 0 0 0 .882.096l.718-.263a1 1 0 0 0 .566-.523l1.193-2.61a1 1 0 0 0 .078-.253l.82-4.986a1 1 0 0 0-.083-.591l-.43-.907a.3.3 0 0 1 .214-.423l2.468-.473a.6.6 0 0 0 .461-.416l1.111-3.69a1 1 0 0 0-.217-.96z\"/>";

export const SvAhuachapan = /*#__PURE__*/ defineComponent({
  name: 'GeoSvAhuachapan',
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
