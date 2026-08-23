// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.436 1.56a.6.6 0 0 0-.773-.066l-.193.137a.6.6 0 0 0-.19.758l.817 1.633a.6.6 0 0 1-.152.729L4.39 8.55a2 2 0 0 0-.647 1.003l-.392 1.421a2 2 0 0 1-.494.862l-1.445 1.485a.6.6 0 0 0 .142.945l1.933 1.057a1 1 0 0 1 .392 1.367l-.553.985a1 1 0 0 0 .361 1.348l.066.04a1 1 0 0 0 .987.02l1.435-.776a1 1 0 0 1 1.013.037l3.443 2.195a1 1 0 0 1 .46.913l-.014.195a1 1 0 0 0 1.071 1.067l4.621-.34a1 1 0 0 0 .846-.604l1.742-4.071a1 1 0 0 1 .867-.605l.905-.047a1 1 0 0 0 .831-.53l.675-1.27a3 3 0 0 0 .34-1.147l.112-1.292a1 1 0 0 0-.441-.918l-3.592-2.4a1 1 0 0 0-.494-.166l-2.154-.134a1 1 0 0 1-.723-.377l-3.76-4.754z\"/>";

export const VcSaintGeorge = /*#__PURE__*/ defineComponent({
  name: 'GeoVcSaintGeorge',
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
