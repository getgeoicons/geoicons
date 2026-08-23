// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.46 11.697-2.988-.636a.3.3 0 0 1-.229-.363l.232-.973a1 1 0 0 0-.266-.938l-.85-.852a.3.3 0 0 1-.052-.355L2.7 5.007a.3.3 0 0 1 .538.022l1.726 3.925a1 1 0 0 0 1.296.522l1.195-.492a3 3 0 0 1 1.058-.224l2.79-.077a.3.3 0 0 0 .21-.506L9.241 5.78a.928.928 0 0 1 1.346-1.276l5.145 5.419a3 3 0 0 0 1.838.916l2.998.339a1 1 0 0 1 .86.759l1.26 5.227a.3.3 0 0 1-.354.364l-2.544-.534a1 1 0 0 0-.837.203l-2.322 1.891a3 3 0 0 1-1.335.622l-2.157.408a1 1 0 0 1-.758-.162l-1.012-.705a1 1 0 0 0-.715-.17l-1.197.173a1 1 0 0 1-1.077-.632l-.54-1.414a.6.6 0 0 0-.692-.37l-1.07.238a.6.6 0 0 1-.73-.633l.347-4.429a.3.3 0 0 0-.236-.317Z\"/>";

export const PaNgabeBugle = /*#__PURE__*/ defineComponent({
  name: 'GeoPaNgabeBugle',
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
