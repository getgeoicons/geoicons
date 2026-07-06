// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.03 20.563 2.43 1.532 3.106-1.326a1 1 0 0 0 .604-1.012l-.15-1.62a.6.6 0 0 1 .537-.653l2.493-.253a1 1 0 0 0 .245-.057l2.612-.962a1 1 0 0 0 .548-.491l.831-1.662a1 1 0 0 0-.138-1.101l-2.055-2.377a.739.739 0 0 1 .836-1.168l3.457 1.395a1 1 0 0 0 .75-.001l1.441-.584a1 1 0 0 0 .346-.234l1.545-1.61a1 1 0 0 0 .247-.44l.869-3.342a1 1 0 0 0-.574-1.171l-2.894-1.24a3 3 0 0 0-1.363-.238l-4.635.281a3 3 0 0 0-.96.22L8.78 3.842a3 3 0 0 0-1.147.835l-5.29 6.246a3 3 0 0 0-.699 1.663l-.41 4.448a3 3 0 0 0 .02.726l.32 2.107a1 1 0 0 0 .456.697Z\"/>";

export const Pampas = /*#__PURE__*/ defineComponent({
  name: 'GeoPampas',
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
