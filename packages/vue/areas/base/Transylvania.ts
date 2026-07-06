// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.627 10.356-2.427.968 2.246 2.489a1 1 0 0 1 .247.526l.107.738a1 1 0 0 0 .528.743l1.513.787a1 1 0 0 1 .4.378l.894 1.51a1 1 0 0 0 .752.484l5.215.566a1 1 0 0 0 .774-.248l.81-.723a1 1 0 0 1 .449-.23l1.607-.358a1 1 0 0 1 .56.037l2.606.951a.6.6 0 0 0 .793-.44l.417-1.97a1 1 0 0 1 .64-.734l.574-.206a.6.6 0 0 0 .396-.53l.054-.93a.58.58 0 0 0-.212-.484.965.965 0 0 0-1.117-.07l-.319.197a1 1 0 0 1-.336.131l-.37.072a1 1 0 0 1-.875-.253l-.222-.209a1 1 0 0 1-.293-.522l-.121-.576a1 1 0 0 1 .024-.507l.506-1.604a1 1 0 0 0-.114-.844l-2.815-4.357a1 1 0 0 0-1.261-.364l-2.794 1.298a1 1 0 0 1-.666.063L8.678 5.35a1 1 0 0 0-.744.103l-1.61.93a1 1 0 0 0-.366.365l-1.835 3.18a1 1 0 0 1-.496.428Z\"/>";

export const Transylvania = /*#__PURE__*/ defineComponent({
  name: 'GeoTransylvania',
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
