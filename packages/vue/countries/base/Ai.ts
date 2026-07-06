// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.335 14.105-2.521 1.728a.5.5 0 0 0-.132.693l.1.148a.5.5 0 0 0 .562.198l1.402-.433 1.986-.872a.5.5 0 0 1 .496.054l.431.314 6.5-3.344a.5.5 0 0 0 .24-.27l.482-1.286a.5.5 0 0 1 .174-.23l3.142-2.282a.5.5 0 0 0-.031-.83l-.78-.482a.5.5 0 0 0-.59.048l-2.858 2.474a.5.5 0 0 1-.281.12l-1.69.155a.5.5 0 0 0-.14.034l-2.451.989a.5.5 0 0 0-.306.55l.144.814a.5.5 0 0 1-.341.563l-3.407 1.083a.5.5 0 0 0-.131.064ZM7.447 9.176 2.175 8.007a.5.5 0 0 0-.58.323l-.198.565a.5.5 0 0 0 .39.658l5.355.88a.5.5 0 0 0 .542-.3l.116-.276a.5.5 0 0 0-.353-.681Z\"/>";

export const Ai = /*#__PURE__*/ defineComponent({
  name: 'GeoAi',
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
