// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.326 5.67 5.179.052a.6.6 0 0 0 .606-.6l-.004-3.32a.6.6 0 0 1 .603-.6l5.207.017a.8.8 0 0 1 .763 1.03l-.226.755a2 2 0 0 0-.023 1.068l.07.275a.6.6 0 0 0 .745.43l1.904-.54a1 1 0 0 1 1.13.448l.404.673a1 1 0 0 1-.292 1.339l-.811.557a1 1 0 0 0-.383.508l-.387 1.16a1 1 0 0 0 .567 1.24l1.081.447a1 1 0 0 1 .618.963l-.124 3.217a3 3 0 0 1-.427 1.433l-.486.807a1 1 0 0 1-.999.474l-2.424-.348a1 1 0 0 1-.755-.547l-.414-.838a.862.862 0 0 0-1.634.443l.04.56a.6.6 0 0 1-.66.638l-1.5-.154a.8.8 0 0 0-.876.694l-.06.469a1 1 0 0 0 .266.815l.884.932a1 1 0 0 1 .263.838l-.034.222a1 1 0 0 1-.65.79l-1.57.567a1 1 0 0 1-1.047-.233l-4.419-4.416a5 5 0 0 1-.918-1.262l-2.397-4.69a.6.6 0 0 1 .32-.834l.694-.265a1 1 0 0 0 .624-.74l.759-3.83a.8.8 0 0 1 .793-.645Z\"/>";

export const Ga = /*#__PURE__*/ defineComponent({
  name: 'GeoGa',
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
