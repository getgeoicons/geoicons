// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.972 21.342-.466.905a.6.6 0 0 1-.828.248l-2.79-1.569a1 1 0 0 1-.384-.385L9.129 16.27a1 1 0 0 0-.363-.373l-1.235-.735a.6.6 0 0 1-.266-.336l-.194-.615a.6.6 0 0 1 .114-.566l.48-.57a.6.6 0 0 0 .116-.556l-.397-1.346a1 1 0 0 1 .201-.935L9.319 8.22a1 1 0 0 0 .237-.755l-.217-2.094a1 1 0 0 1 .193-.7l1.382-1.857a1 1 0 0 1 .353-.296l2.159-1.084a.75.75 0 0 1 .782 1.272l-1.174.869a.6.6 0 0 0-.151.8l.489.781a.6.6 0 0 0 .408.273l2.54.43a.6.6 0 0 1 .497.54l.16 1.83a.6.6 0 0 1-.515.647l-.724.1a.6.6 0 0 0-.517.595v2.626a1 1 0 0 1-.8.98l-.704.144a1 1 0 0 0-.676.499l-.337.614a1 1 0 0 0 .05 1.042l.447.66a1 1 0 0 0 .428.355l1.427.622a1 1 0 0 1 .428.354l.506.744a1 1 0 0 1 .172.6l-.08 2.11a1 1 0 0 1-.11.42Z\"/>";

export const WesternSouthAmericaWithoutChile = /*#__PURE__*/ defineComponent({
  name: 'GeoWesternSouthAmericaWithoutChile',
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
