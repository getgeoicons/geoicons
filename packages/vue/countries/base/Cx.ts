// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.37 14.784 1.008-.955a1 1 0 0 1 .755-.273l2.002.134a2 2 0 0 1 1.056.387l.24.178a2 2 0 0 0 1.001.383l2.264.214a2 2 0 0 1 1.443.834l.073.104a3 3 0 0 1 .55 1.581l.08 1.556c.017.329.088.653.21.959l.247.616a1.44 1.44 0 0 0 1.458.902l.965-.08a.93.93 0 0 0 .84-1.08l-.114-.69a2 2 0 0 1-.014-.557l.178-1.547c.038-.332.159-.65.351-.923l.496-.704a1 1 0 0 0 .166-.76l-.172-.92a2 2 0 0 1 .375-1.58l1.258-1.65a2 2 0 0 1 1.05-.712l.873-.246a1 1 0 0 0 .726-1.042l-.173-2.161a1 1 0 0 0-.1-.364l-.723-1.462a2 2 0 0 1-.185-1.186l.078-.51a.564.564 0 0 0-.618-.645l-1.975.212a2 2 0 0 0-1.283.66l-.793.894a2 2 0 0 0-.421.758l-.137.461a3 3 0 0 1-.775 1.286l-.159.156a3 3 0 0 1-.869.594L11.952 8.8a3 3 0 0 1-.818.236l-.462.065a3 3 0 0 1-1.446-.155L6.45 7.928a2 2 0 0 1-1.059-.905l-.166-.298a1 1 0 0 0-.305-.336l-.392-.27a.75.75 0 0 0-1.177.613l-.004.842a1 1 0 0 0 .285.705l.36.368a1.83 1.83 0 0 1 .302 2.145l-.424.786a2 2 0 0 1-.443.556l-1.375 1.203a.98.98 0 1 0 1.319 1.447Z\"/>";

export const Cx = /*#__PURE__*/ defineComponent({
  name: 'GeoCx',
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
