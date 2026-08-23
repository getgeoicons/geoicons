// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.463 19.211a.6.6 0 0 0 .645.294l.815-.17a2 2 0 0 0 .947-.485l.362-.332a2 2 0 0 0 .607-1.077l.406-2.01a3 3 0 0 1 .223-.676l.745-1.593a1.5 1.5 0 0 1 1.799-.799l1.99.612a2 2 0 0 0 1.203-.01l2.845-.92a2 2 0 0 1 1.567.145l1.372.742a.6.6 0 0 0 .737-.133l.637-.728a1.58 1.58 0 0 1 1.164-.54l.335-.007a1.857 1.857 0 0 0 1.748-2.382l-.19-.64a3 3 0 0 0-.908-1.414l-.427-.37a3 3 0 0 0-1.656-.72l-1.688-.176a2 2 0 0 0-.983.145l-2.854 1.2a2 2 0 0 1-1.197.112l-2.99-.645A2 2 0 0 0 8.64 6.7l-1.115.386a1 1 0 0 1-.847-.09l-3.76-2.283a1 1 0 0 0-1.018-.01l-.011.005a1 1 0 0 0-.493.752l-.137 1.18a3 3 0 0 0 .058 1.021l1.72 7.424a1 1 0 0 1-.375 1.026l-.945.708a.6.6 0 0 0-.163.774z\"/>";

export const NiMadriz = /*#__PURE__*/ defineComponent({
  name: 'GeoNiMadriz',
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
