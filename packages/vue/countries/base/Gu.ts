// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.362 13.272 5.833-4.411a2 2 0 0 0 .578-.694l1.54-3.047a.5.5 0 0 0-.378-.72l-1.863-.262a1 1 0 0 1-.752-.538l-.82-1.61a1 1 0 0 0-.509-.471l-.05-.021a1 1 0 0 0-1.185.326l-.787 1.057a1 1 0 0 0-.198.615l.02 1.227a2 2 0 0 1-.366 1.19L11.059 9.26a3 3 0 0 1-1.564 1.134l-5.408 1.67a.5.5 0 0 0-.237.797l1.216 1.47a1 1 0 0 1 .128 1.077l-1.016 2.08a.5.5 0 0 0-.005.427l.59 1.293c.3.657.457 1.37.702 2.049.082.226.187.445.32.608.474.582.94.845 1.687.92.688.071 1.105-.125 1.71-.46.987-.546 1.076-1.239 1.513-2.28.438-1.043.403-2.636.335-3.554a3.5 3.5 0 0 1 .166-1.405l.143-.408a3 3 0 0 1 1.023-1.406Z\"/>";

export const Gu = /*#__PURE__*/ defineComponent({
  name: 'GeoGu',
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
