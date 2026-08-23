// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.11 3.028a.6.6 0 0 0 .351.544L7.16 5.708a1 1 0 0 1 .585.866l.038.842a3 3 0 0 0 .291 1.163l2.242 4.68a4 4 0 0 0 .606.916l2.345 2.662a1 1 0 0 0 .52.312l1.006.238a1 1 0 0 1 .769.988l-.01.67a1 1 0 0 0 .348.774l3.075 2.643a1 1 0 0 0 .896.211l.287-.072a1 1 0 0 0 .569-.387l.819-1.144a1 1 0 0 0 .08-1.03l-1.55-3.096a.6.6 0 0 1 .409-.855l.64-.138a.6.6 0 0 0 .455-.73l-.598-2.425a3 3 0 0 1-.07-1.043l.294-2.698a3 3 0 0 0-.062-1.014l-.499-2.112a.6.6 0 0 0-.586-.462l-5.64.025a3 3 0 0 1-1.041-.182L2.912 1.495a.6.6 0 0 0-.806.565z\"/>";

export const MxSonora = /*#__PURE__*/ defineComponent({
  name: 'GeoMxSonora',
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
