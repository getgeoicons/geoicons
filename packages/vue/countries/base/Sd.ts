// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.535 3.566-15.37.04.08 2.792-1.335.04.04 5.865-1.091.063a.5.5 0 0 0-.44.322l-1.14 3.006a.5.5 0 0 0 .024.408l1.884 3.628a.5.5 0 0 0 .604.243l2.087-.706a.5.5 0 0 1 .587.212l.376.615a.5.5 0 0 0 .527.229l3.66-.754a.5.5 0 0 1 .243.01l1.409.42a.5.5 0 0 0 .485-.116l1.078-1.015a.5.5 0 0 0 .153-.425l-.116-.95a.5.5 0 0 1 .396-.55l.652-.133a.5.5 0 0 1 .587.373l.777 3.25 2.846-4.032a.5.5 0 0 0 .085-.206l.877-5.261a.5.5 0 0 1 .208-.328L22.8 9.147l-1.5-1.17a.5.5 0 0 1-.187-.324z\"/>";

export const Sd = /*#__PURE__*/ defineComponent({
  name: 'GeoSd',
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
