// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.358 7.447a3 3 0 0 1-1.042-.985l-.364-.565a1 1 0 0 0-.922-.455l-2.211.18a1.5 1.5 0 0 0-1.05.558l-.555.695a1.5 1.5 0 0 0-.319 1.111l.03.25a1.5 1.5 0 0 1-.269 1.044l-.597.837a1 1 0 0 1-.623.401l-5.422 1.053a.934.934 0 0 0-.41 1.642l3.081 2.494c.192.155.41.273.645.349l.928.3a1 1 0 0 0 .865-.123l.912-.614a2 2 0 0 1 1.158-.34l.66.013a1 1 0 0 1 .832.477l1.298 2.115a.6.6 0 0 0 .977.064l.666-.82a1 1 0 0 1 .424-.306l1.814-.684a.6.6 0 0 1 .441.007l.664.274a.6.6 0 0 0 .77-.295l.87-1.811a2 2 0 0 1 .69-.796l3.117-2.09a.683.683 0 0 0-.375-1.251l-1.381-.011a2 2 0 0 1-.971-.26z\"/>";

export const DoMontePlata = /*#__PURE__*/ defineComponent({
  name: 'GeoDoMontePlata',
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
