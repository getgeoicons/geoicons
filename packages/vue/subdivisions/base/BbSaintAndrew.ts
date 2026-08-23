// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.651 14.176a1 1 0 0 0-.082-.968L17.02 9.42l-2.554-4.692a7 7 0 0 1-.621-1.567l-.338-1.287a.6.6 0 0 0-.51-.444l-1.548-.183a.6.6 0 0 0-.594.303l-.938 1.68a1 1 0 0 1-1.257.436L6.123 2.613a.6.6 0 0 0-.64.117l-.998.936a.6.6 0 0 0-.095.761l.916 1.429a1 1 0 0 1 .156.592l-.513 9.687a1 1 0 0 0 .177.623l1.1 1.586a.6.6 0 0 1 .052.595l-.313.676a.6.6 0 0 0 .478.849l2.864.318a1 1 0 0 1 .662.36l1.09 1.327a.3.3 0 0 0 .49-.037l.46-.776a2 2 0 0 0 .26-.75l.144-1.044a2 2 0 0 1 .26-.748l1.128-1.902a1 1 0 0 1 .846-.49l2.584-.037a2 2 0 0 0 .85-.202l.034-.017a2 2 0 0 0 .947-.978z\"/>";

export const BbSaintAndrew = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintAndrew',
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
