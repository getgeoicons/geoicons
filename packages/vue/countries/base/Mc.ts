// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.604 19.23 4.928 3.57 2.337-2.138-3.1-2.226a.25.25 0 0 1-.044-.366l.617-.719a.25.25 0 0 1 .31-.056l2.915 1.604a.5.5 0 0 0 .409.033l1.4-.497a.5.5 0 0 0 .262-.214l1.791-2.976-3.598 1.087a.5.5 0 0 1-.632-.369l-.46-2.049a.5.5 0 0 1 .385-.6l3.66-.759a.5.5 0 0 0 .376-.343l.412-1.349a.5.5 0 0 1 .126-.208l1.505-1.495a.5.5 0 0 0 .124-.506l-.604-1.891a.5.5 0 0 1 .152-.532l1.386-1.186a.5.5 0 0 1 .735.095l.357.514a.5.5 0 0 0 .582.184l.639-.233a.5.5 0 0 0 .32-.557l-.545-3.07a.5.5 0 0 0-.293-.371l-.442-.192a.5.5 0 0 0-.671.293l-.277.791a.5.5 0 0 1-.316.31l-2.524.83a.5.5 0 0 0-.235.165l-1.064 1.341a.5.5 0 0 0-.104.246l-.271 2.073a.5.5 0 0 1-.097.237l-1.517 2.004a.5.5 0 0 1-.561.171l-.917-.315a.5.5 0 0 0-.502.107L5.13 14.704a.5.5 0 0 0-.148.473l.364 1.66a.5.5 0 0 1-.204.518l-1.53 1.058a.5.5 0 0 0-.008.816Z\"/>";

export const Mc = /*#__PURE__*/ defineComponent({
  name: 'GeoMc',
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
