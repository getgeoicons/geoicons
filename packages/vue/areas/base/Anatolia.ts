// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.863 10.056-.463.779a1 1 0 0 0-.118.72l.353 1.648a1 1 0 0 0 .084.238l.909 1.818a1 1 0 0 0 .497.47l2.385 1.032a1 1 0 0 0 .986-.11l.782-.57a1 1 0 0 1 1.112-.044l1.465.897a1 1 0 0 0 .977.037l1.538-.786a1 1 0 0 1 .575-.102l1.418.17a1 1 0 0 0 1.03-.58l.41-.904a1 1 0 0 1 .401-.448l4.003-2.369a1 1 0 0 0 .487-.77l.102-1.119a1 1 0 0 1 .36-.68l.574-.473a1 1 0 0 0 .277-.364l.793-1.772-2.738 1.54a1 1 0 0 1-.392.123l-2.486.244a1 1 0 0 1-.54-.098l-3.103-1.53a1 1 0 0 0-.381-.1l-2.027-.125a1 1 0 0 0-.54.12l-2.407 1.31a1 1 0 0 1-.564.117L6.173 8.25a1 1 0 0 0-.936.47l-.284.457a1 1 0 0 1-.912.47l-1.256-.078a1 1 0 0 0-.922.488Z\"/>";

export const Anatolia = /*#__PURE__*/ defineComponent({
  name: 'GeoAnatolia',
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
