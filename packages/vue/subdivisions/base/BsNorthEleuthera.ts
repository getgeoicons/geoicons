// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.717 17.46a1 1 0 0 0-.325-.703l-.795-.728a11 11 0 0 1-1.457-1.626l-1.486-2.033a.7.7 0 0 0-.604-.285 7.66 7.66 0 0 1-3.945-.861 7.6 7.6 0 0 1-1.472-1.011l-.216-.19a10 10 0 0 0-1.728-1.219l-1.254-.7a2 2 0 0 1-.638-.562l-.638-.867A1 1 0 0 1 8 5.827l.035-.135a1 1 0 0 0-.811-1.244l-.742-.116a1 1 0 0 0-1.141.822l-.146.867a11 11 0 0 1-1.617 4.16l-2.045 3.157a.69.69 0 0 0 1.122.799l2.273-2.916a3.68 3.68 0 0 1 3.906-1.28l.171.049a4.3 4.3 0 0 1 1.639.883l.956.828a9.95 9.95 0 0 0 3.972 2.1l1.766.466a1 1 0 0 1 .471.28l3.9 4.121a.6.6 0 0 0 1.036-.433z\"/>";

export const BsNorthEleuthera = /*#__PURE__*/ defineComponent({
  name: 'GeoBsNorthEleuthera',
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
