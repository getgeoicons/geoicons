// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.604 15.443a1 1 0 0 0-.29-.979l-.536-.496a1.5 1.5 0 0 1-.478-1.178l.041-.804a1.5 1.5 0 0 1 .464-1.009l1.147-1.091a1 1 0 0 0 .19-.25l.5-.925a.857.857 0 0 0-.967-1.238l-1.836.47a2 2 0 0 1-1.828-.446l-2.689-2.4a1 1 0 0 0-.784-.247l-1.482.178a1 1 0 0 0-.607.305l-4.44 4.682a2 2 0 0 1-1.828.588l-1.373-.264a1 1 0 0 0-.91.29l-2.507 2.61a.6.6 0 0 0-.164.474L1.547 17a.6.6 0 0 0 .399.508l4.288 1.502a1 1 0 0 0 .993-.193l1.195-1.055a2 2 0 0 1 .91-.457l6.727-1.418a1 1 0 0 1 .736.13l2.498 1.561a1 1 0 0 0 .956.057l.482-.227a1 1 0 0 0 .543-.66z\"/>";

export const NiMatagalpa = /*#__PURE__*/ defineComponent({
  name: 'GeoNiMatagalpa',
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
