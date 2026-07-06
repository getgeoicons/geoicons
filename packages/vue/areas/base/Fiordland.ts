// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.566 19.885-.162-.727a.6.6 0 0 1 .381-.695l1.178-.427a1 1 0 0 0 .59-1.307L7.08 15.53a1 1 0 0 1-.032-.639l.556-1.967a.6.6 0 0 1 .72-.42l.46.112a.6.6 0 0 0 .739-.638l-.166-1.805a1 1 0 0 1 .172-.658l1.468-2.137a1 1 0 0 1 .147-.17l3.646-3.352a1 1 0 0 0 .252-.366l.623-1.567a1 1 0 0 1 1.06-.622l.049.007a1 1 0 0 1 .728.478l1.03 1.724a1 1 0 0 1 .133.643l-.504 3.833a1 1 0 0 1-.088.298l-.539 1.137a1 1 0 0 1-.433.454l-.808.431a1 1 0 0 0-.523.774l-.159 1.448a1 1 0 0 1-.173.462l-.611.88a1 1 0 0 0-.178.612l.057 1.405a1 1 0 0 1-.116.509l-1.317 2.483c-.069.13-.108.275-.115.422l-.039.826a1 1 0 0 1-.901.948l-.396.04a1 1 0 0 0-.773.503l-.253.448a1 1 0 0 1-.777.505l-2.02.19a.716.716 0 0 1-.609-1.182l.048-.054a.792.792 0 0 0-.814-1.28l-.31.087a.6.6 0 0 1-.748-.447Z\"/>";

export const Fiordland = /*#__PURE__*/ defineComponent({
  name: 'GeoFiordland',
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
