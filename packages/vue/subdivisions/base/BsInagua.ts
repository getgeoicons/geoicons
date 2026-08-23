// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.337 19.967a4 4 0 0 1 1.112-.222l2.64-.145a1 1 0 0 0 .812-.499l3.125-5.422a1 1 0 0 0 .126-.379l.475-3.918a.6.6 0 0 0-.8-.636l-1.11.403a.6.6 0 0 0-.34.314l-1.307 2.855a3 3 0 0 1-1.779 1.597l-.924.308a2.946 2.946 0 0 1-3.52-1.39l-.344-.633a.6.6 0 0 0-.968-.121l-.504.545a2 2 0 0 1-1.146.616l-1.203.197a1 1 0 0 0-.687.458l-.24.385a2 2 0 0 1-1.225.885l-1.069.26a.6.6 0 0 0-.457.615l.035.648a1 1 0 0 1-.63.985l-.609.24a.6.6 0 0 0-.32.82l1.09 2.251a.6.6 0 0 0 .734.307l1.65-.564a3 3 0 0 1 1.378-.134l2.568.352a2 2 0 0 0 .937-.096z\"/>";

export const BsInagua = /*#__PURE__*/ defineComponent({
  name: 'GeoBsInagua',
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
