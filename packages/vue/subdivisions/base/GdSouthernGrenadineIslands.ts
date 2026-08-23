// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.876 21.258-.337.837a.757.757 0 0 1-1.433-.478l.43-1.604a2 2 0 0 1 .743-1.09l.361-.267a2 2 0 0 1 1.077-.389l.401-.022a1 1 0 0 0 .617-.258l.132-.12a.95.95 0 0 0-.85-1.628l-.351.08a2 2 0 0 1-1.46-.226l-.046-.027a2 2 0 0 1-.97-1.48l-.206-1.68a.6.6 0 0 1 .383-.633l.094-.036a.6.6 0 0 1 .803.457l.099.56a1 1 0 0 0 .931.825l1.422.077a1 1 0 0 0 .93-.517l.374-.68a1 1 0 0 1 .786-.514l2.215-.2a2 2 0 0 0 1.202-.546l.384-.367a2 2 0 0 0 .6-1.712l-.112-.839a1 1 0 0 1 .262-.817l.52-.553a2 2 0 0 0 .533-1.547l-.162-1.809a1 1 0 0 1 .331-.836l1.726-1.537a1 1 0 0 1 1.169-.117l.993.58a1 1 0 0 1 .479 1.05l-.28 1.463a1.85 1.85 0 0 0 .94 1.974l.539.29a1 1 0 0 1 .38 1.4l-.225.369a1 1 0 0 0-.096.835l.232.698a.6.6 0 0 1-.473.78l-.073.013a1.885 1.885 0 0 0-1.58 1.86v.678a3 3 0 0 0 .112.813l.55 1.951a1 1 0 0 1-.286 1.007l-.193.178a1 1 0 0 1-.675.264l-4.773.012a2 2 0 0 0-1.476.656l-1.233 1.358a1 1 0 0 1-.86.32l-2.192-.262a2 2 0 0 0-1.172.217l-.315.166a2 2 0 0 0-.921 1.023Z\"/>";

export const GdSouthernGrenadineIslands = /*#__PURE__*/ defineComponent({
  name: 'GeoGdSouthernGrenadineIslands',
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
