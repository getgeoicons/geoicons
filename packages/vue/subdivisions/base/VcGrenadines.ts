// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.887 15.036-5.389 5.37a1 1 0 0 0 .17 1.551l.6.382a1 1 0 0 0 1.288-.184l4.93-5.629a1 1 0 0 0-.098-1.416l-.142-.122a1 1 0 0 0-1.36.048Zm2.14-10.424.295 1.3a1 1 0 0 0 1.083.774l.323-.035a1 1 0 0 0 .779-.533l1.879-3.61a.79.79 0 0 0-1.173-1.001l-2.806 2.08a1 1 0 0 0-.38 1.025Zm4.118 3.928-.657 1.84a.885.885 0 0 0 1.633.678l.842-1.773a.98.98 0 0 0-.487-1.313.99.99 0 0 0-1.331.569Zm3.657-2.652-.424.381a.84.84 0 1 1-1.123-1.252l.425-.38a.84.84 0 0 1 1.122 1.251Z\"/>";

export const VcGrenadines = /*#__PURE__*/ defineComponent({
  name: 'GeoVcGrenadines',
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
