// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.456 9.022a1 1 0 0 0-.525 1.497l.087.133a1 1 0 0 0 .909.45l1.639-.116a.74.74 0 0 1 .256 1.45l-.821.234a1.98 1.98 0 0 0-1.316 2.581l.031.084c.163.446.467.826.866 1.083l2.156 1.386a1 1 0 0 1 .01 1.676L3 21.29a.71.71 0 0 0 .708 1.228l3.65-1.825q.125-.063.23-.158l2.451-2.25.59-.457a5.12 5.12 0 0 1 4.315-.929l.063.015a5.4 5.4 0 0 1 2.946 1.852l.935 1.151a3 3 0 0 1 .317.476l.855 1.598a1 1 0 0 0 1.049.514l.665-.113a1 1 0 0 0 .817-.805l.07-.385a1 1 0 0 0-.422-1.009l-.79-.536a2 2 0 0 1-.629-.69l-1.054-1.91a1 1 0 0 0-.502-.445l-2.438-.98a1 1 0 0 1-.627-.928v-10.4a.6.6 0 0 0-.418-.572L8.289 1.355a1 1 0 0 0-.899.15L2.835 4.898A1 1 0 0 0 2.73 6.41l1.28 1.26a.547.547 0 0 1-.214.91z\"/>";

export const UsAlaska = /*#__PURE__*/ defineComponent({
  name: 'GeoUsAlaska',
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
