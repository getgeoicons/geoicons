// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.038 7.295a1 1 0 0 0-.504-.645l-1.25-.66a1 1 0 0 0-1.089.1l-1.05.832a.6.6 0 0 1-.9-.184L13.868 4.2a1 1 0 0 0-1.286-.436l-2.004.892a.972.972 0 0 1-1.256-.862l-.125-1.802a.3.3 0 0 0-.057-.158l-.27-.366a.3.3 0 0 0-.444-.045l-1.74 1.58a1 1 0 0 0-.304.522l-.498 2.222a5 5 0 0 0-.119.937l-.153 4.88-.858 5.027a5 5 0 0 1-.43 1.343l-.89 1.833a.6.6 0 0 0 .223.772l3.106 1.928a.6.6 0 0 0 .842-.221l2.228-4.049a1 1 0 0 0 .118-.586l-.173-1.66a1 1 0 0 1 .741-1.07l4.387-1.15a1 1 0 0 1 .784.12l1.347.843a.6.6 0 0 1 .264.649l-.427 1.772a.6.6 0 0 0 .472.73l.698.132a.6.6 0 0 0 .687-.422l1.923-6.64a2 2 0 0 0 .021-1.034z\"/>";

export const GtSuchitepequez = /*#__PURE__*/ defineComponent({
  name: 'GeoGtSuchitepequez',
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
