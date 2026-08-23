// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.503 3.91a1 1 0 0 0-.497-.691l-3.362-1.875a.3.3 0 0 0-.406.112l-.563.978a2 2 0 0 1-.575.632l-1.249.888a2 2 0 0 1-.937.358l-1.871.207a2 2 0 0 0-.872.313l-1.98 1.292a1 1 0 0 0-.453.795l-.05 1.183a1 1 0 0 1-.567.859l-.193.093a2 2 0 0 1-1.027.19l-4.293-.348a.6.6 0 0 0-.646.543l-.304 3.332a1 1 0 0 0 .417.906l2.023 1.435a2 2 0 0 1 .825 1.366l.467 3.478a.6.6 0 0 0 .378.48l5.81 2.244a.3.3 0 0 0 .397-.201l.541-1.99a2 2 0 0 1 .464-.835l2.55-2.749a2 2 0 0 1 .562-.424l2.878-1.458a2 2 0 0 0 .907-.934l2.38-5.072a1 1 0 0 0 .079-.607z\"/>";

export const DmSaintGeorge = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintGeorge',
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
