// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.774 9.49-.88-1.21a1 1 0 0 0-.974-.398l-.5.083a.6.6 0 0 1-.694-.665l.127-1.039a1 1 0 0 1 .454-.72L3.98 4.47a1 1 0 0 1 .613-.155l.746.055a1 1 0 0 1 .766.456l.929 1.442a1 1 0 0 0 .302.302l1.805 1.152a1 1 0 0 0 .527.157l3.025.035a.6.6 0 0 1 .54.847l-.68 1.504a1 1 0 0 0 .403 1.274l1.736 1.021a.6.6 0 0 0 .89-.652l-.367-1.583a.6.6 0 0 1 .52-.732l1.712-.183a1 1 0 0 1 .65.155l3.093 2.005a1 1 0 0 1 .069 1.629l-2.097 1.626a1 1 0 0 0-.38.665l-.254 2.004a1 1 0 0 1-.122.368l-.92 1.62a1 1 0 0 0 .02 1.023l.533.857a.6.6 0 0 1-.084.74l-.193.194a.6.6 0 0 1-.819.03l-1.078-.938a1 1 0 0 0-.918-.21l-1.623.44a1 1 0 0 0-.405.221l-.731.656a.6.6 0 0 1-.724.06l-2.41-1.542a1 1 0 0 0-.495-.156l-1.89-.084a1 1 0 0 1-.733-.37l-.639-.79a1 1 0 0 1-.202-.428l-.417-2.038a1 1 0 0 1 .03-.511l.821-2.514a1 1 0 0 0 .036-.473l-.613-3.733a1 1 0 0 0-.178-.426Zm8.869-4.504.864-.237a.6.6 0 0 1 .583.154l1.54 1.54q.105.105.236.175l1.864.994a1 1 0 0 0 .47.118h1.346L19.25 5.308a1 1 0 0 1-.093-.251l-.412-1.822a1 1 0 0 0-.627-.717l-3.361-1.251a1 1 0 0 0-.37-.063l-.527.012a1 1 0 0 0-.896.603l-.276.64a1 1 0 0 0-.065.575l.27 1.481a.6.6 0 0 0 .75.471Z\"/>";

export const NorthernAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernAmerica',
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
