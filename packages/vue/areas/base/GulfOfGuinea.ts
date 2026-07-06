// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m18.89 19.936-4.952-.263.954-2.583a1 1 0 0 0-.033-.772l-1.781-3.785a1 1 0 0 1-.093-.494l.062-.901a1 1 0 0 0-.543-.959l-1.784-.912a1 1 0 0 0-.634-.094l-4.358.79A1 1 0 0 1 5 9.814L3.017 8.51a1 1 0 0 1-.244-.228L1.409 6.5a1 1 0 0 1-.205-.618l.01-.852a.893.893 0 0 1 1.693-.386l.635 1.284a1 1 0 0 0 .545.493l2.303.864a1 1 0 0 0 .515.05l2.148-.357a1 1 0 0 0 .51-.248l.894-.815a1 1 0 0 1 .637-.26l3.24-.117a1 1 0 0 1 1.026.856l.437 3.019a1 1 0 0 0 1.153.843l4.184-.692a1 1 0 0 1 .937.354l.332.406a1 1 0 0 1 .132 1.056l-.483 1.033a1 1 0 0 0-.055.697l.559 1.957a1 1 0 0 1-.09.765l-.727 1.292a.6.6 0 0 1-.69.282l-1.16-.335a.6.6 0 0 0-.763.516z\"/>";

export const GulfOfGuinea = /*#__PURE__*/ defineComponent({
  name: 'GeoGulfOfGuinea',
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
