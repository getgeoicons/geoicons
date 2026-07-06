// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.7 1.236-.877.344a.5.5 0 0 0-.259.7l1.758 3.295a.5.5 0 0 1-.006.48l-.552.978a.5.5 0 0 0-.004.484l1.824 3.366a.5.5 0 0 1-.075.58l-2.57 2.73a.5.5 0 0 0-.126.24L1.52 20.63a.5.5 0 0 0 .484.602l10.622.127a.5.5 0 0 1 .148.024l4.235 1.377a.5.5 0 0 0 .253.014l4.123-.829-2.125-2.2a.5.5 0 0 1-.14-.335L19 14.176a.5.5 0 0 1 .5-.511h2.567a.5.5 0 0 0 .5-.494l.032-2.517a.5.5 0 0 0-.575-.5l-1.717.26a.5.5 0 0 1-.528-.282l-1.095-2.33a.5.5 0 0 1-.045-.257l.307-3.36a.5.5 0 0 0-.418-.54l-3.2-.519a.5.5 0 0 0-.574.421l-.14.951a.5.5 0 0 1-.452.426l-2.41.205a.5.5 0 0 1-.502-.304L9.889 1.59a.5.5 0 0 0-.454-.306L3.89 1.202a.5.5 0 0 0-.19.034Z\"/>";

export const Ao = /*#__PURE__*/ defineComponent({
  name: 'GeoAo',
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
