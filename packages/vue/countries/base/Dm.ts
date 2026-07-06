// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.64 22.695-1.527.258a.5.5 0 0 1-.553-.323L5.879 6.907a.5.5 0 0 1 .082-.485l1.292-1.587a.5.5 0 0 0 .108-.38l-.374-2.89A.5.5 0 0 1 7.502 1l1.646.064a.5.5 0 0 1 .407.238L10.69 3.15a.5.5 0 0 0 .358.233l3.527.488a.5.5 0 0 1 .362.24l3.138 5.316a.5.5 0 0 1 .01.49l-.883 1.656a.5.5 0 0 0-.048.338l.995 4.719a.5.5 0 0 1 0 .21l-.811 3.69a.5.5 0 0 1-.474.392l-1.844.056a.5.5 0 0 0-.432.276l-.585 1.17a.5.5 0 0 1-.364.27Z\"/>";

export const Dm = /*#__PURE__*/ defineComponent({
  name: 'GeoDm',
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
