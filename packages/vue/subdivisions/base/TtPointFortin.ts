// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.857 2.272a.61.61 0 0 0-.771 0c-4.5 3.698-8.062 5.029-14.884 6.251-.202.037-.39.134-.536.279l-.787.787a1 1 0 0 0-.27.922l.619 2.819a1 1 0 0 1-.495 1.09l-1.921 1.058a1 1 0 0 0-.506 1.027l.29 1.902a1 1 0 0 0 .457.696l.867.544a.6.6 0 0 1 .28.518l-.019 1.198a.6.6 0 0 0 .669.606l3.366-.39a1 1 0 0 0 .514-.216l3.455-2.796a1 1 0 0 0 .146-.146l3.202-3.936a.6.6 0 0 1 .443-.22l1.876-.07a1 1 0 0 0 .922-.717l.887-2.999q.085-.286.249-.535l1.505-2.278a2 2 0 0 1 .92-.753l.83-.334a1 1 0 0 0 .625-.942l-.02-1.325a1 1 0 0 0-.361-.756z\"/>";

export const TtPointFortin = /*#__PURE__*/ defineComponent({
  name: 'GeoTtPointFortin',
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
