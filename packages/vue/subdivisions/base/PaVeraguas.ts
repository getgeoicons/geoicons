// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.775 15.644-.93-2.826a1 1 0 0 1 .043-.736l1.172-2.51a2 2 0 0 0 .18-.67l.1-1.137a1 1 0 0 1 .382-.7l1.297-1.012a1 1 0 0 1 .8-.195l.753.142a.6.6 0 0 0 .71-.597l-.025-2.184a1 1 0 0 1 .727-.974l3.19-.907a1 1 0 0 1 .887.172l1.292 1.002a1 1 0 0 1 .322 1.145l-.587 1.548a1 1 0 0 0 .079.87l1.19 1.973a1 1 0 0 1 .134.658l-.219 1.532a1 1 0 0 1-.365.64l-.87.695a3 3 0 0 0-.73.854l-1.136 1.988a1 1 0 0 0-.044.906l1.093 2.432a1 1 0 0 0 .436.47l.53.288a1 1 0 0 1 .427.449l1.272 2.67a.7.7 0 0 1-.59 1l-2.466.149a1 1 0 0 1-.642-.185l-.025-.018a1 1 0 0 1-.333-1.217l.169-.384a2 2 0 0 0 .052-1.483l-1.504-4.188a.967.967 0 0 0-1.849.096l-.383 1.556a.6.6 0 0 1-.782.422l-3.14-1.104a1 1 0 0 1-.617-.63ZM4.77 17.387l-.618.652a1 1 0 0 0-.17 1.136l.402.804a2 2 0 0 0 1.127.992l1.216.427a.788.788 0 0 0 .947-1.13l-1.526-2.71a.863.863 0 0 0-1.377-.17Z\"/>";

export const PaVeraguas = /*#__PURE__*/ defineComponent({
  name: 'GeoPaVeraguas',
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
