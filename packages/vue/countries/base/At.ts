// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.106 12.678-2.176-.633a.5.5 0 0 0-.278 0L4.46 13.25a.5.5 0 0 1-.285-.003l-2.331-.72a.5.5 0 0 0-.647.466l-.03 1.16a.5.5 0 0 0 .356.49l3.35 1.012a.5.5 0 0 0 .266.006l3.315-.84a.5.5 0 0 1 .61.374l.217.952a.5.5 0 0 0 .39.38l5.615 1.123a.5.5 0 0 0 .448-.133l.79-.773a.5.5 0 0 1 .3-.14l2.443-.239a.5.5 0 0 0 .27-.111l1.36-1.118a.5.5 0 0 0 .181-.351l.155-2.185a.5.5 0 0 1 .442-.461l.693-.08a.5.5 0 0 0 .441-.531l-.236-3.454a.5.5 0 0 0-.512-.465l-1.465.037a.5.5 0 0 1-.185-.03L17.225 6.45a.5.5 0 0 0-.616.241l-.674 1.314a.5.5 0 0 1-.623.238l-1.444-.55a.5.5 0 0 0-.488.075l-2.625 2.077a.5.5 0 0 0-.15.586l.802 1.91a.25.25 0 0 1-.3.337Z\"/>";

export const At = /*#__PURE__*/ defineComponent({
  name: 'GeoAt',
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
