// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.184 14.875a2 2 0 0 0-.418 1l-.092.753a1 1 0 0 0 .267.809l1.107 1.169a2 2 0 0 0 .923.553l1.03.282a.6.6 0 0 1 .385.833l-.472 1.011a.933.933 0 0 0 1.655.857l3.292-5.77c.58-1.018.994-2.12 1.226-3.268l.632-3.12a.6.6 0 0 0-.313-.653L15.4 8.812a.6.6 0 0 1-.182-.92l1.01-1.192a4 4 0 0 0 .654-1.08l.306-.755a.6.6 0 0 0-.25-.742l-4.495-2.658a.6.6 0 0 0-.774.143L9.716 4.056a2 2 0 0 0-.401.873l-.406 2.13a1 1 0 0 0 .218.83l2.261 2.686a.9.9 0 0 1-.1 1.261l-1.636 1.415a2 2 0 0 1-.618.364l-.675.248a2 2 0 0 0-.876.635z\"/>";

export const UsNewJersey = /*#__PURE__*/ defineComponent({
  name: 'GeoUsNewJersey',
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
