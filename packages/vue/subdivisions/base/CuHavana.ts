// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.163 6.576a.6.6 0 0 0-.547-.457l-4.243-.258a4 4 0 0 0-.73.023l-3.798.467a4 4 0 0 0-1.322.402l-1.24.63a2 2 0 0 1-.696.205l-.751.079a2 2 0 0 0-1.031.42L6.287 9.284a2 2 0 0 1-1.234.43h-.24a2 2 0 0 0-1.202.407L1.53 11.7a.6.6 0 0 0-.213.649l.043.143a.6.6 0 0 0 .804.384l.77-.317a.6.6 0 0 1 .81.705l-.214.822a1 1 0 0 0 .138.81l.748 1.11a.6.6 0 0 0 .72.223l.49-.196a.6.6 0 0 1 .817.475l.148 1.067a.6.6 0 0 0 .58.518l2.514.055a.6.6 0 0 0 .612-.56l.021-.316a.6.6 0 0 1 .627-.56l3.76.176a1 1 0 0 0 .794-.336l1.262-1.422a1 1 0 0 0 .235-.848l-.273-1.46a1 1 0 0 1 .889-1.18l1.653-.156c.329-.03.66.02.964.148l.967.407a.6.6 0 0 0 .804-.369l.625-1.935a2 2 0 0 0 .04-1.087z\"/>";

export const CuHavana = /*#__PURE__*/ defineComponent({
  name: 'GeoCuHavana',
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
