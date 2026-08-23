// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.834 18.015a1 1 0 0 1 .42-1.094l.224-.146a1 1 0 0 0 .287-1.39l-.854-1.292a2 2 0 0 1-.293-.706l-.56-2.764a1 1 0 0 1 .241-.872l1.513-1.66a1 1 0 0 0 .221-.953l-.58-1.992a2 2 0 0 0-.392-.731L17.735 1.66a.8.8 0 0 0-.937-.215l-2.007.896a1 1 0 0 0-.506.507L13.71 4.14a1 1 0 0 1-.54.521l-1.231.495a1 1 0 0 0-.505.45L9.56 9.036a1 1 0 0 1-.46.43l-4.013 1.84a1 1 0 0 0-.297.21l-1.914 1.95a.6.6 0 0 0-.171.398l-.014.343a.6.6 0 0 0 .245.506l3.324 2.444a1 1 0 0 0 .184.107l5.52 2.47a1 1 0 0 1 .38.298l1.848 2.372a1 1 0 0 0 .808.386l2.682-.051a1 1 0 0 0 .764-.377l1.656-2.081a.8.8 0 0 0 .147-.704z\"/>";

export const GdSaintMark = /*#__PURE__*/ defineComponent({
  name: 'GeoGdSaintMark',
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
