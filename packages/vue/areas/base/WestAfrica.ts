// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.998 8.75-1.77-.041.652 2.098a1 1 0 0 1-.027.67l-.558 1.385a1 1 0 0 0-.066.487l.115 1.002a1 1 0 0 0 .354.655l1.445 1.2a1 1 0 0 1 .265.341l.547 1.153a1 1 0 0 0 .342.399l2.6 1.762a1 1 0 0 0 .955.09l1.073-.459a1 1 0 0 1 .657-.046l1.038.284a1 1 0 0 0 .78-.109l1.15-.694a1 1 0 0 1 .41-.138l1.36-.148a1 1 0 0 1 .9.385l.507.657a1 1 0 0 0 .968.375l.537-.096a1 1 0 0 0 .736-.574l.168-.376a1 1 0 0 1 .95-.589l.395.015a1 1 0 0 0 .902-.496l1.178-2.026a1 1 0 0 0 .054-.898l-.396-.92a1 1 0 0 1 .161-1.049l.922-1.068a1 1 0 0 0 .233-.52l.228-1.687a1 1 0 0 0-.071-.526l-.508-1.192a1 1 0 0 0-.723-.589l-1.314-.263a1 1 0 0 0-.733.135l-3.85 2.44a1 1 0 0 1-1.126-.036l-8.091-5.91.027 1.76-2.099.008-.26 2.263a1 1 0 0 1-1.017.885Z\"/>";

export const WestAfrica = /*#__PURE__*/ defineComponent({
  name: 'GeoWestAfrica',
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
