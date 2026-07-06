// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.953 20.958 7.508 19.11a1 1 0 0 1-.122-1.032l.35-.767a1 1 0 0 1 .596-.534l.479-.158a1 1 0 0 0 .638-.644l.457-1.425a1 1 0 0 0 .038-.443l-.562-4.033a1 1 0 0 0-.473-.718l-.439-.265a1 1 0 0 1-.48-.798l-.14-2.42-.441-2.302a1 1 0 0 1 .377-.984l1.241-.943a.854.854 0 0 1 1.11 1.295l-.589.57a.75.75 0 0 0 .095 1.156l1.336.923a1 1 0 0 0 .29.137l1.363.397a1 1 0 0 1 .718.885l.044.585a1 1 0 0 1-.05.396l-.597 1.762a1 1 0 0 1-.116.236l-1.064 1.587a1 1 0 0 0-.164.667l.224 2.017a1 1 0 0 0 .75.86l.553.138a1 1 0 0 1 .707.661l.256.788a1 1 0 0 1-.069.778l-.428.806a1 1 0 0 1-.261.313l-3.125 2.482a.75.75 0 0 1-1.057-.125Zm5.616-1.217-.89 1.542a.96.96 0 0 0 1.019 1.422l1.362-.269a1 1 0 0 0 .807-.98v-1.413a.938.938 0 0 0-1.184-.906l-.51.138a1 1 0 0 0-.604.466Z\"/>";

export const Pm = /*#__PURE__*/ defineComponent({
  name: 'GeoPm',
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
