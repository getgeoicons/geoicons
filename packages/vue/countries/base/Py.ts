// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.007 17.243-2.278 4.234a.5.5 0 0 0 .394.735l6.002.565a.5.5 0 0 0 .415-.16l2.216-2.412a.5.5 0 0 0 .123-.244l1.172-6.139a.5.5 0 0 0-.518-.593l-1.83.099a.5.5 0 0 1-.515-.396l-.775-3.646a.5.5 0 0 0-.446-.394l-4.094-.355a.5.5 0 0 1-.455-.453l-.441-4.926a.5.5 0 0 0-.208-.362l-2.071-1.48a.5.5 0 0 0-.36-.088l-6.023.85a.5.5 0 0 0-.407.345L1.921 8.729a.5.5 0 0 0 .126.505l3.61 3.569q.063.062.144.099l7.974 3.65a.5.5 0 0 1 .232.69Z\"/>";

export const Py = /*#__PURE__*/ defineComponent({
  name: 'GeoPy',
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
