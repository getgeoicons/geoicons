// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.64 13.256-1.498-1.762a1 1 0 0 0-.682-.349l-1.872-.15a.6.6 0 0 1-.54-.72l.156-.751a1 1 0 0 0-.173-.793l-.219-.3a1 1 0 0 1-.162-.344l-.358-1.406a1 1 0 0 1 .075-.694l.222-.444a1 1 0 0 1 .43-.439l1.622-.85a1 1 0 0 1 .695-.086l.708.168a1 1 0 0 0 .782-.138l.624-.41a.796.796 0 0 1 1.116.247c.167.27.48.417.795.37l.857-.127a1 1 0 0 1 .685.146l.658.42a1 1 0 0 0 .668.15l.47-.062a.75.75 0 0 1 .781 1.053l-.217.48a1 1 0 0 0 .384 1.263l2.382 1.474a1 1 0 0 0 .612.146l1.578-.136a1 1 0 0 1 .303.02l1.09.243a1 1 0 0 0 .686-.093l1.39-.74a1 1 0 0 1 1.066.081l.045.034a.75.75 0 0 1-.125 1.28l-.572.272a1 1 0 0 0-.438.405l-1.066 1.86a1 1 0 0 1-.922.502l-1.7-.092a1 1 0 0 0-.761.291l-2.12 2.12a1 1 0 0 1-.275.195l-.742.356a1 1 0 0 0-.559 1.037l.074.537a1 1 0 0 1-.01.327l-.194.996a1 1 0 0 1-.12.316l-.63 1.07a.703.703 0 0 1-1.253-.08l-.769-1.795-.94-2.469a1 1 0 0 1-.05-.175l-.26-1.417a.89.89 0 0 0-.963-.726.89.89 0 0 1-.764-.31Z\"/>";

export const SouthAsiaSimplified = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthAsiaSimplified',
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
