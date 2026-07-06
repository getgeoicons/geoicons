// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.474 10.626 4 13.903a1 1 0 0 0-.313.778l.187 3.631a.6.6 0 0 0 .347.514l.949.439a.6.6 0 0 0 .591-.05l1.25-.858a.6.6 0 0 1 .86.196l1.848 3.224a1 1 0 0 0 1.5.277l.376-.307a1 1 0 0 0 .364-.855l-.15-1.872a1 1 0 0 1 .29-.787l.814-.814a.6.6 0 0 0-.033-.88l-.852-.73a1 1 0 0 1-.326-.548l-.402-1.86a1 1 0 0 1 .045-.57l1.61-4.17a1 1 0 0 1 .84-.634l.306-.029a1 1 0 0 1 .96.5l.324.566a1 1 0 0 1 .02.957L14.321 12.1a1 1 0 0 0-.1.62l.315 1.969a1 1 0 0 0 .616.77l.9.36a.6.6 0 0 0 .547-.051l2.293-1.468a1 1 0 0 0 .412-.535l.925-2.865a.6.6 0 0 0-.13-.591L17.74 7.75a1 1 0 0 1-.212-.355l-1.481-4.338a1 1 0 0 0-.14-.268l-.729-.994a1 1 0 0 0-1.135-.353l-1.683.585a1 1 0 0 0-.419.28L9.511 5.04a1 1 0 0 0-.202.355l-1.57 4.812a1 1 0 0 1-.265.418Z\"/>";

export const NorthernEuropeSimplified = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernEuropeSimplified',
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
