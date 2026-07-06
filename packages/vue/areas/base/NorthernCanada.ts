// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.565 14.377 3.567-4.16a.25.25 0 0 1 .398.025l.63.96a1 1 0 0 0 .82.452l1.006.015a1 1 0 0 0 .946-.632l.922-2.335a1 1 0 0 1 .73-.613l2.574-.527a1 1 0 0 0 .533-.299l2.35-2.533a.865.865 0 0 1 1.481.763l-.52 2.523a1 1 0 0 0-.008.367l.308 1.85a1 1 0 0 0 .497.707l4.094 2.296a1 1 0 0 1 .503.748l.277 2.215a.6.6 0 0 1-.821.63l-1.407-.57a1 1 0 0 1-.618-.826l-.067-.648a1 1 0 0 0-.729-.862l-.469-.13a1 1 0 0 0-1.26.85l-.043.381a1 1 0 0 0 .286.822l.543.543a.905.905 0 0 1-.83 1.525l-.622-.134a1 1 0 0 0-1.055.442l-.741 1.17a.59.59 0 0 1-.455.274c-5.733.39-10.64-2.606-12.774-4.482a.574.574 0 0 1-.046-.807Z\"/>";

export const NorthernCanada = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernCanada',
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
