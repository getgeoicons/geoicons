// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.286 7.157.352 1.691a1 1 0 0 0 .373.593l.536.408a.97.97 0 0 0 .99.108.965.965 0 0 1 1.326.59l.195.63a1 1 0 0 0 .843.699l.518.059a1 1 0 0 1 .834.672l.036.106a1 1 0 0 0 .935.679l.672.007a1 1 0 0 1 .988 1.026l-.022.86a1 1 0 0 0 1.068 1.024l.692-.047a1 1 0 0 0 .759-.437l.698-1.029a.81.81 0 0 1 1.46.64l-.412 1.755a1 1 0 0 0 .365 1.02l2.636 2.025a1 1 0 0 0 .717.201l.67-.072a1.395 1.395 0 0 0 1.065-2.073l-.142-.25a2 2 0 0 1-.112-1.737l.303-.748a1 1 0 0 1 .72-.602l.44-.093a2 2 0 0 0 1.088-.636l.455-.517a1 1 0 0 0 .121-1.15l-1.26-2.25a1 1 0 0 0-.755-.503l-1.326-.157a1 1 0 0 1-.809-1.37l.527-1.299a1 1 0 0 0-.634-1.332l-1.416-.433a2 2 0 0 1-.832-.5l-.559-.56a2 2 0 0 0-1.53-.584l-1.952.111a2 2 0 0 0-1.243.528l-.781.722a2 2 0 0 1-2.109.385l-2.056-.833a1 1 0 0 0-.893.07l-3.26 1.967a.6.6 0 0 0-.279.636Z\"/>";

export const Be = /*#__PURE__*/ defineComponent({
  name: 'GeoBe',
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
