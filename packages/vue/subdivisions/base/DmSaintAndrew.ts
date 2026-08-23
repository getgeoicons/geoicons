// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.458 13.416a1 1 0 0 0-.724-1.016l-.995-.283a1 1 0 0 1-.7-.732l-.789-3.34a1 1 0 0 0-.674-.724l-5.622-1.763a2 2 0 0 0-1.053-.04l-1.706.399A1 1 0 0 1 8.14 5.5L5.634 1.78a1 1 0 0 0-.77-.44l-1.881-.112a.3.3 0 0 0-.294.417l.86 2.02a2 2 0 0 1 .153.938l-.11 1.405a.6.6 0 0 0 .264.545l1.7 1.14a1 1 0 0 1 .44.908L5.73 11.96a1 1 0 0 0 .313.808l.527.494a1 1 0 0 1 .301.557l.559 3.187a1 1 0 0 0 .325.579L9.022 18.7a1 1 0 0 0 1.05.17l.964-.41a1 1 0 0 1 .736-.017l1.56.576a7 7 0 0 1 1.695.906l.9.654a1 1 0 0 1 .37.525l.377 1.275a.3.3 0 0 0 .471.152l.906-.699a1 1 0 0 0 .333-.46l.287-.818a1 1 0 0 1 .483-.555l1.497-.779a1 1 0 0 0 .537-.833z\"/>";

export const DmSaintAndrew = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintAndrew',
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
