// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.13 3.79a1 1 0 0 0-.403 1.005l.037.19a2 2 0 0 1-.159 1.24L9.562 8.411a3 3 0 0 1-.866 1.078l-.5.388c-.308.24-.675.396-1.062.451a2.25 2.25 0 0 0-1.39.763l-1.053 1.23a3 3 0 0 0-.616 1.159l-.239.871a3 3 0 0 0-.08 1.197l.313 2.3c.054.395.196.773.415 1.105.18.271.307.572.377.89l.513 2.316a.6.6 0 0 0 .767.442l.267-.085a.6.6 0 0 0 .42-.563l.006-.447a1 1 0 0 1 .57-.888l.886-.423a1 1 0 0 0 .539-.655l.398-1.559a1 1 0 0 1 .825-.742l.248-.036a3 3 0 0 1 1.634.22l.293.128a1 1 0 0 0 .554.072l2.052-.32a3 3 0 0 0 1.116-.413l.983-.608a1 1 0 0 0 .46-.686l.687-4.128a1 1 0 0 1 .44-.675l.496-.322a1 1 0 0 0 .451-.927l-.12-1.339a4 4 0 0 1 .029-.95l.367-2.442c.041-.273.12-.54.234-.792l.234-.517a.6.6 0 0 0-.007-.509l-.658-1.36a.6.6 0 0 0-.682-.322l-6.08 1.475a2 2 0 0 0-.687.313z\"/>";

export const DmSaintPatrick = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintPatrick',
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
