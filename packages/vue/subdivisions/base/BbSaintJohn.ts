// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.888 21.499a.8.8 0 0 0 1.078.234l1.709-1.04a1 1 0 0 0 .435-.556l.772-2.475a1 1 0 0 1 .625-.647l4.835-1.686a2 2 0 0 0 1.085-.91l1.021-1.819a3 3 0 0 1 .579-.733l1.397-1.294a.6.6 0 0 0 .092-.773l-.415-.622a.6.6 0 0 0-.85-.154l-.915.66a1 1 0 0 1-.566.188l-.266.005a1 1 0 0 1-.708-.277l-1.994-1.902a1 1 0 0 0-.455-.249l-1.357-.328a1 1 0 0 1-.725-.69l-.118-.403a1 1 0 0 0-.827-.71l-.994-.133a2 2 0 0 1-1.046-.473L8.465 2.265a.6.6 0 0 0-.845.058l-2.647 3.03a2 2 0 0 1-.644.49l-1.994.952a1 1 0 0 0-.561.78l-.519 4.215a1 1 0 0 0 .248.79l2.937 3.28a.6.6 0 0 1 .15.337l.146 1.393a.6.6 0 0 0 .53.534l1.167.132a.6.6 0 0 1 .429.259z\"/>";

export const BbSaintJohn = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintJohn',
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
