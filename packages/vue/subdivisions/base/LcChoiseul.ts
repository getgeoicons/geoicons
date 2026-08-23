// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.355 2.263a.57.57 0 0 0-.905-.663l-5.702 5.393a2 2 0 0 1-1.11.53l-2.94.39a1 1 0 0 0-.66.383l-.86 1.12a2 2 0 0 1-.9.662l-1.24.454a2 2 0 0 0-.882.639l-1.153 1.46a2 2 0 0 0-.425 1.1l-.024.348a2 2 0 0 0 .802 1.744l2.106 1.566a3 3 0 0 1 .942 1.17l.539 1.19a3 3 0 0 0 .698.967l1.787 1.65a.6.6 0 0 0 .874-.064l1.354-1.674a2 2 0 0 0 .4-.839l.89-4.152q.051-.235.156-.452z\"/>";

export const LcChoiseul = /*#__PURE__*/ defineComponent({
  name: 'GeoLcChoiseul',
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
