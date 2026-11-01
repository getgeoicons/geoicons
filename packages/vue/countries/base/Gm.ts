// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.985 14.686 6.332-.25a.3.3 0 0 0 .288-.305l-.017-1.257a.3.3 0 0 1 .307-.304l2.537.06a1 1 0 0 0 .856-.445l.45-.675a1 1 0 0 1 1.356-.298l3.345 2.057a3 3 0 0 0 2.512.293l2.215-.73a.6.6 0 0 0 .358-.818l-.451-.997a.6.6 0 0 0-.723-.326l-1.622.497a2 2 0 0 1-1.676-.236L15.375 9.21a3 3 0 0 0-1.853-.478l-1.592.116a1 1 0 0 0-.846.603l-.38.884a.3.3 0 0 1-.28.182l-6.844-.103a1 1 0 0 0-.761.334l-1.325 1.484a1 1 0 0 0-.248.769l.119 1.147a.6.6 0 0 0 .62.538Z\"/>";

export const Gm = /*#__PURE__*/ defineComponent({
  name: 'GeoGm',
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
