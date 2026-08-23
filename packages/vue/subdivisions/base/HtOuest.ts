// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.81 14.352a.962.962 0 0 0-.788 1.629l.96.982a1 1 0 0 0 .715.302h1.94a1 1 0 0 0 .467-.116l3.153-1.662a1 1 0 0 1 .67-.094l8.168 1.697 1.482.146a.8.8 0 0 0 .783-.417l.033-.061a.8.8 0 0 0-.376-1.109l-1.619-.73a2 2 0 0 1-.944-.884l-.547-1.03a.6.6 0 0 1 .557-.88l1.093.049a.795.795 0 0 0 .21-1.57l-1.561-.351a2 2 0 0 0-.797-.017l-1.686.307a1 1 0 0 1-.811-.21l-3.334-2.72a2 2 0 0 0-.653-.355l-.687-.22a1 1 0 0 0-1.276.71l-.083.332a1 1 0 0 0 .211.893l.53.617a2 2 0 0 0 .73.537l1.82.78a1 1 0 0 1 .584 1.122l-.07.341a1 1 0 0 1-1.124.787l-1.966-.288a1 1 0 0 0-.926.365l-.858 1.073a1 1 0 0 1-.884.37z\"/>";

export const HtOuest = /*#__PURE__*/ defineComponent({
  name: 'GeoHtOuest',
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
