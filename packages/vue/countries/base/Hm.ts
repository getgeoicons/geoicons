// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.002 16.513-.6-.826a1 1 0 0 1-.189-.515l-.159-2.164a1 1 0 0 0-.515-.802l-.23-.127a1 1 0 0 1-.468-1.183l.157-.487a1 1 0 0 0-.15-.907l-.398-.53a1 1 0 0 0-.634-.388L3.181 8.31a1 1 0 0 1-.31-.108l-1.106-.6a1 1 0 0 1-.52-.948l.043-.628a1 1 0 0 1 .59-.844l.838-.374a1 1 0 0 1 .622-.063l.466.102a1 1 0 0 1 .71.596l.33.8a1 1 0 0 0 .115.206l.411.567a.75.75 0 0 0 1.3-.154l.049-.117a.75.75 0 0 1 1-.397l.156.07a.75.75 0 0 1 .422.859l-.04.17a1 1 0 0 0 .832 1.222l.675.096a.98.98 0 0 0 1.096-.781.733.733 0 0 1 .829-.585l2.166.325a1 1 0 0 1 .576.3l.615.644a1 1 0 0 0 .522.29l.984.203a1 1 0 0 1 .724.602l.916 2.251a1 1 0 0 0 .347.44l1.927 1.366a1 1 0 0 0 .222.12l2.112.805-3.897 1.585a.86.86 0 0 1-1-.267l-.064-.082a.768.768 0 0 0-1.287.826l.06.115a.94.94 0 0 1-.138 1.068l-.667.737a1 1 0 0 1-.556.311l-1.216.23a1 1 0 0 1-.61-.077l-5.038-2.36a1 1 0 0 1-.385-.317Z\"/>";

export const Hm = /*#__PURE__*/ defineComponent({
  name: 'GeoHm',
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
