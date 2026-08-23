// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.161 9.67a.6.6 0 0 0-.73.53l-.186 2.067a.6.6 0 0 0 .44.632l1.654.453a2 2 0 0 0 1.056 0l1.984-.545a2 2 0 0 1 .79-.054l1.176.154a.6.6 0 0 0 .627-.352l.299-.676a.6.6 0 0 1 .571-.357l6.661.25a4 4 0 0 1 1.706.453l.48.25a4 4 0 0 1 1.183.943l1.472 1.72a.6.6 0 0 0 1.032-.224l.118-.405a1 1 0 0 0-.046-.683l-.442-.998a1 1 0 0 1-.008-.789l.51-1.222a.6.6 0 0 0-.46-.823l-11.66-1.873a2 2 0 0 0-1.223.191l-3.687 1.872a1 1 0 0 1-.673.083z\"/>";

export const HtSudEst = /*#__PURE__*/ defineComponent({
  name: 'GeoHtSudEst',
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
