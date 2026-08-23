// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.71 9.376a1 1 0 0 0-.23 1.126l1.313 3.027a1 1 0 0 0 .374.441l1.582 1.025a1 1 0 0 1 .453.915l-.155 2.034a.6.6 0 0 0 .325.58l1.844.942a.6.6 0 0 0 .86-.406l.992-4.562a1 1 0 0 1 1.233-.754l1.88.497a2 2 0 0 0 1.173-.046l6.159-2.159a1 1 0 0 0 .48-.358L22.4 8.342a1 1 0 0 0 .032-1.124L20.87 4.779a1.004 1.004 0 0 0-1.788.202l-.686 1.905a1 1 0 0 1-.472.545l-.3.159a1 1 0 0 1-1.045-.067L13.8 5.56a1 1 0 0 0-.935-.117l-3.85 1.476a4 4 0 0 1-1.183.258l-3.698.23a1 1 0 0 0-.624.271z\"/>";

export const NiBoaco = /*#__PURE__*/ defineComponent({
  name: 'GeoNiBoaco',
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
