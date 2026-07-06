// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.2 10.524-1.183 1.578 1.361.922a1 1 0 0 1 .368.456l.572 1.431a1 1 0 0 0 .418.489l2.392 1.42a1 1 0 0 0 .87.073l1.276-.49a1 1 0 0 1 .549-.05l.775.15a.6.6 0 0 1 .417.87L10.946 19.4a1 1 0 0 0-.062.787l.886 2.613 2.012-2.846a1 1 0 0 1 .205-.214l3.09-2.388a1 1 0 0 0 .27-.32l3.513-6.593a1 1 0 0 0 .117-.491l-.045-2.196L15.283 9.7a1 1 0 0 1-.584.02l-.655-.174a1 1 0 0 1-.718-.747l-.252-1.118a1 1 0 0 0-.346-.557L9.244 4.3a1 1 0 0 1-.355-.601l-.265-1.486a.6.6 0 0 0-.974-.357l-.944.783a1 1 0 0 0-.362.77v2.912a1 1 0 0 1-.12.475l-1.943 3.602q-.036.066-.08.125Z\"/>";

export const HornOfAfrica = /*#__PURE__*/ defineComponent({
  name: 'GeoHornOfAfrica',
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
