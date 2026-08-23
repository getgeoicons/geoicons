// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.322 1.57a.61.61 0 0 0-.566-.368l-10.338.054a.6.6 0 0 0-.555.82l.53 1.35a1 1 0 0 1 .016.686l-.955 2.816a1 1 0 0 1-.307.448L5.43 8.802a2 2 0 0 0-.721 1.538v.662a1.795 1.795 0 0 0 1.677 1.791l.192.013a.6.6 0 0 1 .513.834l-.237.556a.6.6 0 0 1-.409.347l-1.239.305a.6.6 0 0 0-.395.848l.67 1.359a2 2 0 0 1 .206.907l-.02 1.752a1 1 0 0 0 .227.646l1.664 2.03a.8.8 0 0 0 .846.259l.485-.144a.8.8 0 0 0 .55-.578l.119-.489a1 1 0 0 1 1.183-.742l4.621.998a.679.679 0 0 0 .723-1.018l-.546-.89a3 3 0 0 0-.678-.771l-.455-.366a3 3 0 0 1-.82-1.03l-.344-.712a1 1 0 0 1 .21-1.159l.659-.628a1 1 0 0 1 1.306-.064l1.271.995a.6.6 0 0 0 .921-.235l.534-1.238a.6.6 0 0 0-.446-.828l-2.69-.477a.72.72 0 0 1-.232-1.335l.917-.522a1 1 0 0 0 .437-1.233l-.406-1.038a1 1 0 0 0-.732-.616l-1.32-.27a1 1 0 0 1-.724-.595l-.132-.317a1 1 0 0 1 .033-.84l1.517-2.961a1 1 0 0 1 1.075-.527l1.737.327a1 1 0 0 0 .778-.177l1.167-.86a.614.614 0 0 0 .2-.739Z\"/>";

export const GtQuiche = /*#__PURE__*/ defineComponent({
  name: 'GeoGtQuiche',
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
