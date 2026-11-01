// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.081 12.178 1.322.385a.6.6 0 0 0 .721-.809l-.367-.873a1 1 0 0 1 .302-1.172l2.092-1.655a1 1 0 0 1 .977-.15l1.085.414a.6.6 0 0 0 .748-.287l.46-.895a1 1 0 0 1 1.155-.507l4.036 1.114a1 1 0 0 1 .726.834l.39 2.965a.6.6 0 0 1-.476.666l-.77.157a.6.6 0 0 0-.48.558l-.066 1.33a2 2 0 0 1-.67 1.398l-.39.344a2 2 0 0 1-1.132.494l-1.61.157a2 2 0 0 0-.922.33l-.565.381a1 1 0 0 1-.748.152l-4.33-.836a2 2 0 0 1-1.348-.954l-.304-.52a.6.6 0 0 0-.671-.277l-2.666.706a2 2 0 0 1-1.09-.019l-2.852-.861a.6.6 0 0 1-.427-.59l.024-.942a.6.6 0 0 1 .777-.558l1.765.545a2 2 0 0 0 1.143.01l3.606-1.036a1 1 0 0 1 .555.001Z\"/>";

export const At = /*#__PURE__*/ defineComponent({
  name: 'GeoAt',
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
