// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.718 10.428a4 4 0 0 0 .35 1.184l1.698 3.583a3 3 0 0 1 .268 1.643l-.341 2.833a1 1 0 0 0 .202.731l.219.283c.254.328.573.6.938.799l1.932 1.051a.6.6 0 0 0 .79-.2l1.566-2.4a3 3 0 0 1 .943-.918l1.982-1.217a3 3 0 0 1 1.452-.441l1.048-.041a2 2 0 0 0 .926-.269l1.753-1.018q.21-.122.4-.277l1.617-1.33a1 1 0 0 0-.023-1.563l-.738-.572a1 1 0 0 1-.307-.396l-.489-1.139a1 1 0 0 0-.77-.594l-.35-.052a1 1 0 0 1-.852-.969l-.02-1.01a1 1 0 0 0-.312-.704L15.458 6.34a5 5 0 0 0-1.582-1.015L9.457 3.552a5 5 0 0 1-.885-.463L6.405 1.664a1 1 0 0 0-1.282.155l-.095.103a1 1 0 0 0-.177 1.097l.977 2.135a1 1 0 0 1-.202 1.123L2.921 8.982a1 1 0 0 0-.284.84z\"/>";

export const UsHawaii = /*#__PURE__*/ defineComponent({
  name: 'GeoUsHawaii',
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
