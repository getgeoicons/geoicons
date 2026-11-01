// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.94 16.084 1.267-1.087a2 2 0 0 1 .917-.444l2.153-.422a2 2 0 0 1 1.356.215l.285.158a2 2 0 0 0 1.111.247l1.639-.116a2 2 0 0 0 1.019-.365l.188-.134a2 2 0 0 0 .837-1.507l.045-.735a1.504 1.504 0 0 0-1.514-1.596l-7.171.06a2 2 0 0 1-1.23-.409l-1.416-1.08a.743.743 0 0 0-.98 1.112l1.107 1.128a.765.765 0 0 1-.75 1.274l-.949-.261a.6.6 0 0 0-.75.473l-.083.47a1 1 0 0 1-.808.808l-1.146.206a1 1 0 0 1-.881-.275l-.51-.506a1 1 0 0 1-.274-.916l.207-.977a1 1 0 0 0-.136-.744l-.697-1.093a.3.3 0 0 1 .064-.395l.711-.575a.3.3 0 0 0-.044-.496L4.19 7.38a1 1 0 0 0-.87-.044l-1.356.574a.86.86 0 0 0 .099 1.618l.619.176a1.565 1.565 0 0 1 1.134 1.536l-.04 2.05a2 2 0 0 1-.265.956l-.44.768a1 1 0 0 0 .015 1.022l.1.163a1 1 0 0 0 1.136.434l1.891-.56a2 2 0 0 1 1.008-.033l2.192.494a3 3 0 0 0 .91.063l.481-.04a2 2 0 0 0 1.136-.474Z\"/>";

export const KyGrandCayman = /*#__PURE__*/ defineComponent({
  name: 'GeoKyGrandCayman',
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
