// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.735 18.654-.49 3.214a.6.6 0 0 1-.926.409l-3.627-2.422a1 1 0 0 1-.264-.257l-3.58-5.102a1 1 0 0 1-.18-.566l-.026-2.89a1 1 0 0 1 .274-.697L3.8 8.355a1 1 0 0 0 .273-.738l-.128-2.56a1 1 0 0 1 .178-.622l1.305-1.873a1 1 0 0 1 .422-.346l1.922-.834a1 1 0 0 1 .832.017l1.956.942a1 1 0 0 0 .493.098l3.052-.181a1 1 0 0 1 .69.222l3.168 2.577a1 1 0 0 0 .524.219l1.816.196a1 1 0 0 1 .392.128l1.667.96-.817 1.562a1 1 0 0 1-.783.532l-3.074.316a1 1 0 0 1-.976-.508l-.86-1.543a.6.6 0 0 0-.913-.165l-2.094 1.785a1 1 0 0 1-.754.234l-2.002-.214a.6.6 0 0 0-.664.6l.018 2.704a1 1 0 0 1-.353.768L7.48 14a1 1 0 0 0 .042 1.559l2.83 2.148a1 1 0 0 1 .384.947Z\"/>";

export const NorthernSouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernSouthAmerica',
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
