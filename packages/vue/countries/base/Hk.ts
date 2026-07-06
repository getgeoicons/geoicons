// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.233 6.342 4.11 8.918a1 1 0 0 0-.152 1.387l.48.616a1 1 0 0 0 .598.366l2.19.426a.75.75 0 0 1 .363 1.29l-.877.801a1 1 0 0 1-.675.262H3.904a1 1 0 0 0-.745.332l-1.596 1.78a1 1 0 0 0-.22.931l.118.434a1 1 0 0 0 1.293.681l2.644-.919a.75.75 0 0 1 .877.303l.254.394a1 1 0 0 0 1.28.357l.573-.28a1 1 0 0 0 .556-.99l-.205-2.23a1 1 0 0 1 .306-.814l.684-.653a1 1 0 0 1 .856-.262l.873.146a.75.75 0 0 1 .552 1.065l-.848 1.764a1 1 0 0 0-.098.481l.062 1.302a1 1 0 0 0 .577.86l.136.062a1 1 0 0 0 1.096-.168l1.114-1.017a.75.75 0 0 1 1.134.144l1.25 1.917a1 1 0 0 0 1.413.271l.048-.034a1 1 0 0 0 .373-1.134l-.509-1.527a.75.75 0 0 1 .058-.605l1.34-2.378a1 1 0 0 1 .719-.498l.935-.144a1 1 0 0 0 .823-.767l.479-2.113q.04-.175.138-.326l.393-.603a1 1 0 0 0 .163-.546V8.72a1 1 0 0 0-.221-.627l-.951-1.182a1 1 0 0 0-.37-.285l-1.112-.498a1 1 0 0 1-.588-.823l-.076-.849a1 1 0 0 0-.977-.91l-5.05-.095a1 1 0 0 0-.451.098L7.438 6.212a1 1 0 0 0-.205.13Z\"/>";

export const Hk = /*#__PURE__*/ defineComponent({
  name: 'GeoHk',
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
