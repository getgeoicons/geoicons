// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.116 13.904a1 1 0 0 0-.232.96l1.352 4.71a.6.6 0 0 0 .273.353l1.31.77a.6.6 0 0 1 .293.46l.1 1.058a.6.6 0 0 0 .642.541l3.663-.271a2 2 0 0 0 1.208-.525l1.338-1.235a1 1 0 0 0 .322-.772l-.027-.734a1 1 0 0 1 .601-.955l1.838-.796a1 1 0 0 1 .522-.074l1.746.219a3 3 0 0 0 1.126-.072l2.848-.738a1.62 1.62 0 0 0 1.081-2.212l-1.064-2.462a5 5 0 0 0-1.137-1.633L14.444 5.27a3 3 0 0 1-.569-.745L12.35 1.699a.776.776 0 0 0-1.397.064l-.317.74a1 1 0 0 1-.744.591l-1.406.25a1 1 0 0 0-.595.346l-1.45 1.75a2 2 0 0 0-.376 1.856l.212.7a2 2 0 0 1-.454 1.947z\"/>";

export const PaLosSantos = /*#__PURE__*/ defineComponent({
  name: 'GeoPaLosSantos',
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
