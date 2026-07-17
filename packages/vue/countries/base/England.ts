// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.274 20.466-1.1.798a.735.735 0 0 0 .25 1.307l.393.1a1 1 0 0 0 .895-.205l1.065-.904a1 1 0 0 1 .739-.233l.794.074a1 1 0 0 0 .903-.41l.393-.544a1 1 0 0 1 .709-.409l7.35-.748a1 1 0 0 0 .408-.135l1.776-1.052a.5.5 0 0 0 .23-.313l.134-.55a.5.5 0 0 0-.595-.605l-.4.09a.718.718 0 0 1-.645-1.228l1.505-1.397a1 1 0 0 0 .318-.677l.052-.94a1 1 0 0 0-.237-.703l-.31-.365a1 1 0 0 0-.642-.345l-.262-.032a1 1 0 0 0-.906.376l-.493.628a.5.5 0 0 1-.708.08l-.528-.43a.5.5 0 0 1-.058-.72l.333-.374a1 1 0 0 0 .183-1.035l-1.295-3.26a1 1 0 0 0-.662-.593l-.712-.198a1 1 0 0 1-.698-.706l-.62-2.331a1 1 0 0 0-.428-.585l-.564-.362a.5.5 0 0 0-.736.241l-.636 1.65a1 1 0 0 1-.331.438l-.91.686a1 1 0 0 0-.316.404l-.4.932a.5.5 0 0 0 .134.578l.974.83a1 1 0 0 1 .352.758l.016 6.236a1 1 0 0 0 .303.714l.413.402a1 1 0 0 1 .198 1.164l-.378.756a1 1 0 0 1-.85.551l-2.113.096a1 1 0 0 0-.775.428l-1.279 1.834a1 1 0 0 1-.233.238Z\"/>";

export const England = /*#__PURE__*/ defineComponent({
  name: 'GeoEngland',
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
