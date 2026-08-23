// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.947 1.678a.6.6 0 0 0-.839-.119l-4.606 3.46q-.4.3-.863.493l-3.883 1.62a1 1 0 0 0-.606.79l-.378 2.85a1 1 0 0 1-.339.625l-.607.523a1 1 0 0 0-.259 1.167l1.471 3.277a1 1 0 0 0 .915.59l2.376-.004a1 1 0 0 1 .855.477l2.844 4.636a1 1 0 0 0 .62.45l.587.14a1 1 0 0 0 1.014-.35l1.656-2.078a.8.8 0 0 0 .049-.929l-.862-1.35a.6.6 0 0 1 .47-.922l2.087-.123a.6.6 0 0 0 .544-.756l-.427-1.574a1 1 0 0 1 .058-.682l.59-1.274a1 1 0 0 0-.272-1.192l-.515-.424A1 1 0 0 1 18.36 9.8l1.066-2.261a2 2 0 0 0 .156-1.223l-.201-1.071a2 2 0 0 0-.37-.836z\"/>";

export const HnCopan = /*#__PURE__*/ defineComponent({
  name: 'GeoHnCopan',
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
