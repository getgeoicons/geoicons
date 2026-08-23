// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.897 18.494a1 1 0 0 0-.183.592l.014.817a1 1 0 0 0 .64.917l1.737.67a3 3 0 0 0 1.107.201l1.31-.011a3 3 0 0 1 1.43.348l1.275.675a.597.597 0 0 0 .876-.494l.144-2.565-.25-7.726a.6.6 0 0 1 .395-.583l.39-.142a.6.6 0 0 0 .347-.325l.702-1.617a1 1 0 0 0-.652-1.363l-2.963-.814a10 10 0 0 1-1.58-.583 2.97 2.97 0 0 1-1.166-.977l-.232-.328a6 6 0 0 1-.995-2.362l-.116-.62a1 1 0 0 0-.563-.725l-.07-.033a.988.988 0 0 0-1.371 1.147l.334 1.284.411 1.18a6 6 0 0 0 .911 1.687l.334.434a3 3 0 0 0 1.356.991l1.091.396a.6.6 0 0 1 .396.574l-.02 1.159a.6.6 0 0 1-.224.458l-3.246 2.6a1 1 0 0 0-.36.957l.28 1.552a1 1 0 0 1-.167.754z\"/>";

export const MxTamaulipas = /*#__PURE__*/ defineComponent({
  name: 'GeoMxTamaulipas',
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
