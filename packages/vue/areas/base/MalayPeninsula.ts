// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.555 3.245.49-1.614a.6.6 0 0 1 .581-.425l.965.011a.6.6 0 0 1 .552.817l-.58 1.5a1 1 0 0 0-.067.35l-.018 1.703a.6.6 0 0 0 .354.554l.531.238a.6.6 0 0 1 .327.366l1.078 3.407a1 1 0 0 0 .658.654l1.02.315a1 1 0 0 1 .44.278l2.506 2.722c.165.179.284.396.346.631l.352 1.328q.045.171.03.345l-.187 2.095a1 1 0 0 0 .234.736l.527.62q.075.087.127.19l.757 1.467a.6.6 0 0 1-.359.849l-1.06.322a.6.6 0 0 1-.563-.116l-3.509-2.983a1 1 0 0 1-.273-.372l-1.771-4.193a1 1 0 0 1-.07-.52l.175-1.319a1 1 0 0 0-.167-.699L7.593 9.034a1 1 0 0 0-.392-.335l-.653-.312a1 1 0 0 1-.53-1.175l.52-1.834a1 1 0 0 0 .037-.315l-.062-1.486a1 1 0 0 1 .042-.332Z\"/>";

export const MalayPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoMalayPeninsula',
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
