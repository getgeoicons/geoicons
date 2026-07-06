// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.377 11.663-2.765 2.81 1.832.475a.5.5 0 0 0 .402-.067l1.6-1.06a.5.5 0 0 1 .241-.081l1.245-.085a.5.5 0 0 0 .266-.1l.97-.73a.5.5 0 0 1 .412-.088l1.043.24a.5.5 0 0 0 .576-.3l.18-.447a.5.5 0 0 0-.316-.665l-1.605-.496a.5.5 0 0 0-.213-.018l-3.576.466a.5.5 0 0 0-.292.146Zm10.635-2.294L18.2 12.17l4.6-3.059-3.292-.103a.5.5 0 0 0-.496.36ZM3.856 12.17H1.43l-.085-.233a.5.5 0 0 1 .223-.606l1.09-.619a.5.5 0 0 1 .313-.06l1.865.247-.54 1.008a.5.5 0 0 1-.44.264Z\"/>";

export const Vg = /*#__PURE__*/ defineComponent({
  name: 'GeoVg',
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
