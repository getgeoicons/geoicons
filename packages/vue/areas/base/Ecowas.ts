// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.785 10.44-.318.387a1 1 0 0 0-.221.744l.09.82a1 1 0 0 0 .265.575l1.454 1.551a1 1 0 0 1 .255.508l.194 1.085a1 1 0 0 0 .377.619l2.493 1.906a1 1 0 0 0 .89.165l1.402-.412a1 1 0 0 1 .499-.017l1.192.265a1 1 0 0 0 .501-.018l3.252-.965a1 1 0 0 1 1.15.457l.269.465a1 1 0 0 0 1.061.48l.702-.141a1 1 0 0 0 .7-.535l.2-.402a1 1 0 0 1 .823-.552l.468-.034a1 1 0 0 0 .793-.495l1.315-2.269a1 1 0 0 0 .035-.937l-.38-.786a1 1 0 0 1 .24-1.186l.718-.633a1 1 0 0 0 .33-.62l.234-1.77a1 1 0 0 0-.054-.478l-.364-.983a1 1 0 0 0-.672-.617l-.951-.263a1 1 0 0 0-.725.076l-4.745 2.45a1 1 0 0 1-1.141-.157l-3.912-3.647a.837.837 0 0 0-1.408.62l.056 5.559-3.945.195a1 1 0 0 1-.842-.39l-.467-.606a1 1 0 0 0-.838-.389l-.248.011a1 1 0 0 0-.727.364Z\"/>";

export const Ecowas = /*#__PURE__*/ defineComponent({
  name: 'GeoEcowas',
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
