// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.681 6.533-.43 3.44a.6.6 0 0 0 .31.603l2.932 1.579a1 1 0 0 0 .546.117l3.994-.287a1 1 0 0 1 .86.381l2.095 2.68a.6.6 0 0 0 .859.089l.505-.425a1 1 0 0 1 .906-.2l.484.131a1 1 0 0 1 .6.458l1.75 2.973a1 1 0 0 0 .708.48l1.646.256-.379-1.512a1 1 0 0 1 .05-.633l.037-.087a1 1 0 0 1 .251-.353l.39-.351a1 1 0 0 1 .128-.098l2.328-1.499a.6.6 0 0 0 .275-.49l.03-1.294a.6.6 0 0 0-.04-.23L21.49 9.59a1 1 0 0 1-.058-.228l-.417-3.153a.604.604 0 0 0-.644-.521c-7.953.58-14.546-.022-17.181-.445a.6.6 0 0 0-.516.16l-.81.77a.6.6 0 0 0-.182.36Z\"/>";

export const SouthwestUs = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthwestUs',
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
