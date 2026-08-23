// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.953 7.617a.3.3 0 0 0-.297.22l-1.25 4.542a.6.6 0 0 0 .57.76l11.113.15a.6.6 0 0 1 .552.386l1.193 3.124a.6.6 0 0 0 .895.283l1.08-.727a.6.6 0 0 1 .906.314l.115.353a.6.6 0 0 0 .72.397l3.022-.772a1.497 1.497 0 0 0 1.075-1.846l-.519-1.894a.79.79 0 1 0-1.514.448l.127.396a1 1 0 0 1-.666 1.261l-.039.012a1 1 0 0 1-1.082-.351l-.142-.186a1 1 0 0 1-.128-.223l-.704-1.695a1 1 0 0 0-.463-.505l-1.095-.567a.947.947 0 0 1-.13-1.6l1.098-.817a1 1 0 0 0 .25-1.333l-.326-.52a1 1 0 0 0-1.312-.355l-1.685.884a1 1 0 0 1-.488.115z\"/>";

export const UsMassachusetts = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMassachusetts',
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
