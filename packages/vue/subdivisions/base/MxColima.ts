// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.547 14.741a.6.6 0 0 0 .157-.59l-.591-2.112a1 1 0 0 1-.027-.414l.55-3.783a1 1 0 0 0-.171-.719l-1.588-2.26a1 1 0 0 0-1.264-.32l-2.314 1.153a1 1 0 0 1-.752.057l-3.525-1.131a.6.6 0 0 0-.754.386l-.723 2.234a1 1 0 0 1-.801.681l-6.452.98a1 1 0 0 0-.332.112l-2.18 1.2a.3.3 0 0 0 .041.545l2.992 1.088a1 1 0 0 0 .457.054l1.665-.194a.6.6 0 0 1 .419.108l.374.267a.6.6 0 0 1 .249.533l-.051.685a.6.6 0 0 0 .372.6c3.401 1.406 5.396 2.493 9.184 5.368.42.32 1.017.263 1.365-.133l1.22-1.387a.3.3 0 0 0 .047-.323l-.424-.925a.3.3 0 0 1 .044-.32l.354-.415a.3.3 0 0 1 .328-.089l.693.243a.3.3 0 0 0 .309-.07z\"/>";

export const MxColima = /*#__PURE__*/ defineComponent({
  name: 'GeoMxColima',
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
