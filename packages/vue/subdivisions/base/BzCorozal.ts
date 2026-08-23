// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.644 21.576a2 2 0 0 0 1.016.496l3.86.654a.6.6 0 0 0 .636-.32l.83-1.633c.377-.74.66-1.524.843-2.334l.943-4.18a10 10 0 0 0 .242-2.447l-.135-5.46a.6.6 0 0 0-.808-.549l-2.391.885a2 2 0 0 1-.88.116l-4.484-.417a2 2 0 0 0-.917.13l-.821.322a.819.819 0 0 1-.828-1.387l2.69-2.274a.8.8 0 0 0 .134-1.076l-.382-.534a.8.8 0 0 0-.645-.334l-5.2-.032a1 1 0 0 0-.62.21l-1.088.846a1 1 0 0 0-.353.535L4.435 6.02a2 2 0 0 1-.357.72L2.563 8.681a2 2 0 0 0-.405.96l-.138 1.01a.6.6 0 0 0 .375.639l3.632 1.426a1 1 0 0 1 .574.588l.835 2.286a2 2 0 0 0 .529.79z\"/>";

export const BzCorozal = /*#__PURE__*/ defineComponent({
  name: 'GeoBzCorozal',
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
