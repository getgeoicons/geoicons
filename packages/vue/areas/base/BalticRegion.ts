// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.434 12.616.406 4.213a1 1 0 0 0 .71.863l1.852.55a1 1 0 0 1 .707 1.088l-.12.925a1 1 0 0 0 .172.704l.914 1.301a1 1 0 0 0 1.024.405l3.54-.744a1 1 0 0 0 .79-1.083l-.082-.781a1 1 0 0 1 .442-.939l1.053-.697a1 1 0 0 0 .448-.877l-.03-.67a1 1 0 0 1 .876-1.036l.87-.109a1 1 0 0 0 .718-.451l.58-.902a1 1 0 0 0 .071-.949L17.767 9.83a1 1 0 0 1 .067-.94l.321-.512a1 1 0 0 0-.018-1.092L16.71 5.178a.9.9 0 0 1 .767-1.402l.337.008a.6.6 0 0 0 .566-.362l.313-.725a.6.6 0 0 0-.462-.831l-4.208-.63a1 1 0 0 0-.472.043l-1.782.61a1 1 0 0 0-.236.118l-1.522 1.03a1 1 0 0 0-.39 1.135l.454 1.412a1 1 0 0 0 .604.63l.502.187a1 1 0 0 1 .651.958l-.054 2.597a1 1 0 0 1-.353.742l-.495.42a1 1 0 0 1-1.15.101l-.343-.2a1 1 0 0 1-.388-.408l-.916-1.787a.6.6 0 0 0-.757-.283l-.788.316a1 1 0 0 0-.501.44l-1.531 2.735a1 1 0 0 0-.123.584Z\"/>";

export const BalticRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoBalticRegion',
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
