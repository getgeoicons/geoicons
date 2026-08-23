// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.432 4.248a3 3 0 0 0-1.021.534l-.65.52a1 1 0 0 0-.345.534l-.017.067a1 1 0 0 0 .52 1.14l1.12.563a3 3 0 0 1 1.303 1.272l.74 1.39q.185.346.453.634l3.708 3.986a3 3 0 0 1 .654 1.107l1.209 3.678a.6.6 0 0 0 .433.396l1.339.314a.6.6 0 0 0 .516-.12l6.042-4.94a2 2 0 0 0 .59-.804l.523-1.303a3 3 0 0 1 .773-1.11l1.246-1.126a.3.3 0 0 0 .012-.433l-4.4-4.474a1 1 0 0 0-.697-.298l-4.26-.068a.6.6 0 0 1-.502-.287l-.756-1.237a.6.6 0 0 0-.475-.286l-5.171-.315a3 3 0 0 0-1.036.118z\"/>";

export const UsSouthCarolina = /*#__PURE__*/ defineComponent({
  name: 'GeoUsSouthCarolina',
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
