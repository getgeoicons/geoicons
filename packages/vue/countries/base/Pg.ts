// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.224 15.506 1.2 6.33l5.81 2.23a.5.5 0 0 1 .277.26l.552 1.219a.5.5 0 0 0 .259.253l2.393 1.024c.17.073.205.3.064.42l-1.091.93 5.509 4.194a.5.5 0 0 1 .129.65l-.299.51a.5.5 0 0 1-.683.18l-1.27-.74a.5.5 0 0 0-.18-.063l-2.186-.314a.5.5 0 0 1-.326-.192l-2.006-2.625a.5.5 0 0 0-.347-.194l-2.003-.203a.5.5 0 0 0-.52.329l-.556 1.544a.5.5 0 0 1-.484.33l-2.531-.067a.5.5 0 0 1-.487-.499ZM12.161 10.8l-.005-.01a.5.5 0 0 1 .4-.722l1.977-.184a.5.5 0 0 0 .333-.172l.886-1.033a.5.5 0 0 0-.144-.767l-2.235-1.191a.5.5 0 0 1-.196-.693l.128-.22a.5.5 0 0 1 .453-.247l.794.033a.5.5 0 0 1 .197.05l2.268 1.097a.5.5 0 0 1 .097.062l1.211.98a.5.5 0 0 1 .184.353l.072.992a.5.5 0 0 1-.153.397l-1.064 1.021a.5.5 0 0 1-.128.09l-2.454 1.188a.5.5 0 0 1-.407.013l-1.955-.797a.5.5 0 0 1-.259-.24Zm8.821 1.88L19.77 10.9a.5.5 0 0 1 .032-.604l.37-.437a.5.5 0 0 1 .766.003l1.498 1.802a.5.5 0 0 1-.116.742l-.657.417a.5.5 0 0 1-.681-.141Z\"/>";

export const Pg = /*#__PURE__*/ defineComponent({
  name: 'GeoPg',
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
