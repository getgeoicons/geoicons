// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.421 21.019a94 94 0 0 0-.212-1.629c-.04-.287.046-.577.236-.796l1.382-1.592a1 1 0 0 1 1.34-.156l2.936 2.115a1 1 0 0 1 .41.705l.098.918a1 1 0 0 1-.367.885l-.984.793a2 2 0 0 1-1.517.425l-1.369-.18a2 2 0 0 1-.592-.175l-.661-.312c-.382-.18-.65-.582-.7-1.001Zm1.517-14.192 2.185.599a.6.6 0 0 0 .755-.508l.163-1.373a1 1 0 0 0-.202-.73l-2.411-3.117a.6.6 0 0 0-.865-.088l-.678.58a.6.6 0 0 0-.056.857l.863.958a1 1 0 0 1 .202.997l-.364 1.05a.6.6 0 0 0 .408.775Z\"/>";

export const Ag = /*#__PURE__*/ defineComponent({
  name: 'GeoAg',
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
