// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.73 1.525a1 1 0 0 0-.754-.312l-1.565.043a1 1 0 0 0-.57.199l-1.512 1.13a1 1 0 0 0-.32.405l-1.502 3.488a2 2 0 0 1-.925.99l-1.463.748a1 1 0 0 0-.463.496l-.63 1.469a2 2 0 0 1-.97 1.014l-1.754.844a1 1 0 0 0-.387.33L1.76 15.465a1 1 0 0 0 .077 1.24l1.326 1.475a2 2 0 0 1 .493 1.055l.427 3.006a.6.6 0 0 0 .642.514l4.933-.398a6 6 0 0 0 1.231-.23l2.713-.809a2 2 0 0 1 1.185.013l3.168 1.023a.6.6 0 0 0 .76-.404l1.166-4.005c.108-.37.258-.727.448-1.063l2.185-3.864a1 1 0 0 0 .115-.664l-.535-3.065a1 1 0 0 0-.284-.54l-3.45-3.394a1 1 0 0 1-.295-.786l.079-1.075a1 1 0 0 0-.271-.761z\"/>";

export const DoLaRomana = /*#__PURE__*/ defineComponent({
  name: 'GeoDoLaRomana',
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
