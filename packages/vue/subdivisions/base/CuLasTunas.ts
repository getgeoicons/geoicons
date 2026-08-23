// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.469 16.629a.6.6 0 0 0 .512.803l6.576.562a1 1 0 0 0 .993-.578l.06-.131a1 1 0 0 1 1.05-.57l4.944.713a1 1 0 0 0 .67-.14l.658-.408a1 1 0 0 0 .473-.836l.022-1.635a1 1 0 0 1 .951-.985l.711-.035a1 1 0 0 0 .832-.525l.357-.664a1 1 0 0 1 .463-.434l1.304-.6a1 1 0 0 0 .571-.758l.098-.638a.6.6 0 0 0-.475-.679l-2.95-.595a3 3 0 0 1-.708-.238l-4.455-2.144a1 1 0 0 0-.716-.058l-1.208.356a1 1 0 0 0-.698.767L10.8 10.77a2 2 0 0 1-.705 1.17l-1.031.835a1 1 0 0 1-1.272-.011l-.42-.352a1 1 0 0 0-1.17-.084L2.55 14.6a1.5 1.5 0 0 0-.618.76z\"/>";

export const CuLasTunas = /*#__PURE__*/ defineComponent({
  name: 'GeoCuLasTunas',
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
