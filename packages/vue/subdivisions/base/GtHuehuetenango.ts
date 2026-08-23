// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.642 2.647a1 1 0 0 0-.905-.56l-11.473.085a.6.6 0 0 0-.515.3L1.32 15.335a.6.6 0 0 0-.065.437l.578 2.478a1 1 0 0 0 .785.755l.358.069a1 1 0 0 0 .813-.202l1.815-1.452a1 1 0 0 1 .751-.21l2.279.29a1 1 0 0 1 .612.317l1.62 1.772a1 1 0 0 0 .47.29l1.516.422a.6.6 0 0 1 .438.533l.039.528a.6.6 0 0 0 .598.556h1.577a.6.6 0 0 0 .6-.567l.055-.99a.6.6 0 0 1 .427-.541l2.956-.887a1 1 0 0 0 .68-.707l.23-.889a.6.6 0 0 0-.632-.748l-.66.057a1 1 0 0 1-.734-.234l-.776-.66a1 1 0 0 1-.352-.737l-.039-1.533a1 1 0 0 1 .272-.711l2.323-2.466a1 1 0 0 0 .26-.534l.391-2.55 1.548.683.655-2.537a1 1 0 0 0-.07-.69z\"/>";

export const GtHuehuetenango = /*#__PURE__*/ defineComponent({
  name: 'GeoGtHuehuetenango',
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
