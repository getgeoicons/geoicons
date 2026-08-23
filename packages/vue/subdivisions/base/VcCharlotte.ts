// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.668 18.12a1 1 0 0 0 .219.937l1.907 2.127a3 3 0 0 0 1.387.875l1.984.584a.6.6 0 0 0 .73-.361l2.308-6.044a4 4 0 0 0 .262-1.503l-.14-7.292a4 4 0 0 0-.353-1.569L14.31 2.187a1 1 0 0 0-.78-.58l-2.543-.339a.3.3 0 0 0-.318.411l1.037 2.534a.3.3 0 0 1-.233.41l-1.225.184a.3.3 0 0 0-.252.344l1.19 7.442a1 1 0 0 1-.562 1.062l-1.552.731a1 1 0 0 0-.537.636z\"/>";

export const VcCharlotte = /*#__PURE__*/ defineComponent({
  name: 'GeoVcCharlotte',
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
