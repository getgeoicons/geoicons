// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.762 9.96a.6.6 0 0 0-.329-.593l-4.592-2.304a1 1 0 0 0-1.01.066l-.614.417a.6.6 0 0 1-.382.101l-1.207-.09a.6.6 0 0 1-.525-.785l.254-.779a.6.6 0 0 0-.184-.645l-1.457-1.227a1 1 0 0 0-.767-.227l-2.877.356a.6.6 0 0 0-.508.742l.11.437a3 3 0 0 1 .067 1.112l-.364 2.847q-.057.452-.216.88l-.769 2.08a1 1 0 0 1-.689.622l-.51.131a1 1 0 0 1-.787-.126l-1.421-.909a.6.6 0 0 0-.729.064l-1.474 1.352a.6.6 0 0 0 .089.952l3.964 2.465a1 1 0 0 1 .413.512l.639 1.78a1 1 0 0 0 .957.663l4.092-.066a4 4 0 0 1 .652.043l1.892.281a.6.6 0 0 0 .533-.191l3.95-4.381a1 1 0 0 0 .254-.743l-.14-1.906a1 1 0 0 1 .371-.853l1.395-1.119a.6.6 0 0 1 .448-.127l.765.093a.6.6 0 0 0 .67-.54z\"/>";

export const SvSonsonate = /*#__PURE__*/ defineComponent({
  name: 'GeoSvSonsonate',
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
