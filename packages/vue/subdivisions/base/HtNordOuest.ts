// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.829 11.435a1 1 0 0 0 .491-.199l1.152-.88a.761.761 0 0 0-.297-1.348l-4.663-1.043a2 2 0 0 0-.785-.018l-3.65.646a2 2 0 0 1-.434.029l-4-.172a2 2 0 0 0-1.095.27l-3.1 1.811a1 1 0 0 1-.544.136l-.978-.039a1 1 0 0 0-.927.538l-.468.9a2.9 2.9 0 0 0-.324 1.353l.002.12a2.52 2.52 0 0 0 1.217 2.126c.468.28 1.015.4 1.558.341l2.567-.28a3 3 0 0 1 .976.054l.966.215a.6.6 0 0 0 .713-.443l.236-.967a1.744 1.744 0 0 1 1.935-1.313l3.715.517a1 1 0 0 0 .837-.275l1.264-1.235a2 2 0 0 1 1.165-.556z\"/>";

export const HtNordOuest = /*#__PURE__*/ defineComponent({
  name: 'GeoHtNordOuest',
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
