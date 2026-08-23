// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.343 22.57a.6.6 0 0 0 .789-.417l.265-1.06a1 1 0 0 1 .653-.707l3.81-1.27a2 2 0 0 0 .673-.382l.595-.513a1 1 0 0 0 .128-1.382l-1.001-1.252a1 1 0 0 1-.17-.937l.73-2.227a2 2 0 0 0-.032-1.339l-.312-.812a2 2 0 0 1 .034-1.514l1.207-2.774a.6.6 0 0 0-.27-.77l-1.889-1.002a3 3 0 0 0-.767-.28l-4.538-.989a1 1 0 0 1-.656-.483l-.467-.822a.6.6 0 0 0-.461-.301l-.755-.076a.6.6 0 0 0-.657.538l-.035.346a.6.6 0 0 0 .08.362l.294.503a1 1 0 0 1-.26 1.302L8.29 5.855a.6.6 0 0 0-.232.566l.087.59a.6.6 0 0 1-.406.657l-.576.19a1 1 0 0 1-.713-.034l-.976-.426a1 1 0 0 0-.616-.06l-1.022.226a.6.6 0 0 0-.4.867l.399.752a2 2 0 0 1 .182 1.39l-.379 1.629a1 1 0 0 0 .262.927l2.803 2.849a2 2 0 0 0 .61.423l4.364 1.949a1 1 0 0 1 .586.794l.336 2.805a.6.6 0 0 0 .39.492z\"/>";

export const DoSanJoseDeOcoa = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSanJoseDeOcoa',
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
