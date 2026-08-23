// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.428 15.9 1.74 13.748a.6.6 0 0 1-.297-.792l1.23-2.736a1 1 0 0 1 .46-.482l1.382-.698a1 1 0 0 0 .415-.392l.533-.923A7.6 7.6 0 0 1 7.46 5.461l.212-.16a6.1 6.1 0 0 1 1.814-.946l.538-.173c.623-.2 1.286-.24 1.928-.116.568.11 1.154.091 1.714-.055l1.3-.337a1 1 0 0 0 .626-.49l.185-.341a1 1 0 0 1 .72-.51l1.22-.196a.6.6 0 0 1 .696.58l.034 1.763a4 4 0 0 0 .28 1.397l.598 1.509a4 4 0 0 1 .255 1.932l-.078.673a4 4 0 0 1-.467 1.464l-.353.643a3 3 0 0 0-.358 1.18l-.074.84a2 2 0 0 1-.424 1.066l-.562.709a1.166 1.166 0 0 0 .46 1.798l1.7.717 2.744 1.399a1 1 0 0 1 .544.825l.031.483a.6.6 0 0 1-.768.615l-7.504-2.215a2 2 0 0 1-.505-.229l-2.381-1.51a2 2 0 0 0-1.07-.31H9.61a.6.6 0 0 1-.59-.704l.245-1.404a.6.6 0 0 0-.43-.681l-.707-.197a.6.6 0 0 0-.747.454l-.116.545a.6.6 0 0 1-.837.42Z\"/>";

export const KnSaintPaulCapisterre = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintPaulCapisterre',
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
