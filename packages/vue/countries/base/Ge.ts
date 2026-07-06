// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.907 15.292-3.288.311a.5.5 0 0 1-.48-.746l.6-1.05a.5.5 0 0 0 .042-.401l-.87-2.716a.5.5 0 0 0-.215-.275L1.578 7.901a.5.5 0 0 1-.195-.633l.286-.632a.5.5 0 0 1 .645-.256l4.172 1.711a.5.5 0 0 0 .177.037l3.695.096a.5.5 0 0 1 .31.117l2.827 2.38a.5.5 0 0 0 .473.093l2.546-.81a.5.5 0 0 1 .336.011l2.39.947a.5.5 0 0 1 .295.605l-.156.536a.5.5 0 0 0 .276.597l1.623.723a.5.5 0 0 1 .169.79l-.215.24a.5.5 0 0 0 .056.722l1.183.962a.5.5 0 0 1 .119.636l-.335.587a.5.5 0 0 1-.69.183l-3.061-1.818a.5.5 0 0 0-.598.066l-.773.727a.5.5 0 0 1-.286.132l-4.388.497a.5.5 0 0 1-.39-.126l-1.78-1.602a.5.5 0 0 0-.382-.127Z\"/>";

export const Ge = /*#__PURE__*/ defineComponent({
  name: 'GeoGe',
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
