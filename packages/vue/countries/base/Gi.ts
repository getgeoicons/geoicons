// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.861 16.913v1.774q0 .068-.018.133l-.957 3.484a.5.5 0 0 1-.278.323l-.217.098a.5.5 0 0 1-.346.023l-.629-.186a.5.5 0 0 1-.19-.104l-.378-.334a.5.5 0 0 1-.154-.254l-.143-.572a.5.5 0 0 1-.01-.19l.168-1.221a.5.5 0 0 0-.06-.313l-2.45-4.367a.5.5 0 0 1 .154-.657l.52-.357a.5.5 0 0 0 .2-.544L9.552 8.11a.5.5 0 0 0-.06-.137l-.385-.602a.5.5 0 0 0-.151-.151l-.493-.317a.5.5 0 0 0-.19-.073l-1.768-.29V3.92l2.347-1.156h2.562a.5.5 0 0 0 .5-.5V1.2h2.743a.5.5 0 0 1 .218.05l2.346 1.14-.495 2.414a.5.5 0 0 0 .11.426l.515.6a.5.5 0 0 1 .117.384l-.223 1.89a.5.5 0 0 1-.188.335l-.612.478a.5.5 0 0 0-.189.338l-.382 3.387a.5.5 0 0 0 .033.242l.695 1.737a.5.5 0 0 1-.001.374l-.704 1.73a.5.5 0 0 0-.037.188Z\"/>";

export const Gi = /*#__PURE__*/ defineComponent({
  name: 'GeoGi',
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
