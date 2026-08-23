// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.871 5.734a.6.6 0 0 0-.819-.579l-1.298.51a6 6 0 0 1-1.088.312l-2.776.518-7.699.8a3 3 0 0 1-.824-.028l-.523-.09a2 2 0 0 0-1.117.126l-.692.291a2 2 0 0 0-.535.332L1.973 9.25a1 1 0 0 0-.334.608l-.38 2.542a1 1 0 0 0 .17.722l.899 1.282a1 1 0 0 0 1.08.392l1.195-.323a.6.6 0 0 1 .636.219l.662.882a2 2 0 0 1 .392 1.013l.134 1.433a1 1 0 0 0 .664.85l.499.175a1 1 0 0 0 .743-.031l4.937-2.224a2 2 0 0 0 1.067-1.165l.285-.816a1 1 0 0 1 1.026-.667l6.352.522a.6.6 0 0 0 .641-.503l.08-.497a.6.6 0 0 0-.387-.66l-.285-.103a.8.8 0 0 1-.52-.646l-.184-1.388a2 2 0 0 1 .185-1.142l.277-.57a1 1 0 0 0-.251-1.2l-.37-.314a1 1 0 0 1-.353-.797z\"/>";

export const CuArtemisa = /*#__PURE__*/ defineComponent({
  name: 'GeoCuArtemisa',
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
