// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.485 22.725.498-.042a1 1 0 0 0 .811-.55l.31-.619a1 1 0 0 1 .811-.55l.923-.076a1.5 1.5 0 0 0 1.348-1.214l.399-2.088c.091-.481.112-.974.06-1.46l-.418-3.97a2 2 0 0 1 .065-.754l.358-1.269a1.5 1.5 0 0 0-.12-1.112l-2.488-4.672a1 1 0 0 0-.736-.52l-3.18-.468a1 1 0 0 1-.734-.515l-.597-1.109a1 1 0 0 0-.9-.525l-1.066.02a1 1 0 0 0-.967 1.167l.283 1.666a1 1 0 0 1-.113.654L6.36 5.921a1 1 0 0 0-.112.661L6.427 7.6a4 4 0 0 0 .396 1.164l2.948 5.625c.179.342.307.707.382 1.085l1.267 6.448a1 1 0 0 0 1.065.803Z\"/>";

export const Dm = /*#__PURE__*/ defineComponent({
  name: 'GeoDm',
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
