// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.49 5.438 8.892-2.482a2 2 0 0 1 1.115.012l2.028.612a2 2 0 0 0 .902.059l1.178-.194a.6.6 0 0 0 .502-.617l-.023-.552a.6.6 0 0 1 .894-.547l.863.486a.6.6 0 0 1 .306.51l.016.779a1 1 0 0 1-.183.597l-1.121 1.588a1 1 0 0 1-.974.412l-3.472-.552a2 2 0 0 0-1.283.226l-.722.4a.93.93 0 0 0-.468.937.926.926 0 0 1-.663 1.018l-.5.143a1 1 0 0 1-.896-.177l-.454-.36a1 1 0 0 0-1.539.39l-.062.144a1 1 0 0 0 .07.924l2.12 3.401a2 2 0 0 0 1.235.888l1.032.245a1 1 0 0 1 .628.462l.845 1.418a1 1 0 0 1-.198 1.263l-.607.535a1 1 0 0 1-1.308.012l-.563-.477a.915.915 0 0 0-1.4 1.126l.314.591a.6.6 0 0 1-.157.75l-.639.51a.6.6 0 0 0-.186.685l.641 1.657a.3.3 0 0 1-.353.399l-3.78-.95a1 1 0 0 1-.745-.813l-.234-1.474a1 1 0 0 0-.252-.522l-1.205-1.305a1 1 0 0 1-.237-.916l.222-.908a1 1 0 0 0-.143-.798L2.06 10.737a.6.6 0 0 1 0-.673l2.872-4.225a1 1 0 0 1 .558-.401Z\"/>";

export const Gr = /*#__PURE__*/ defineComponent({
  name: 'GeoGr',
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
