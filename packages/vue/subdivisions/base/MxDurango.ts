// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.784 6.897a1 1 0 0 0-.605.222l-.1.082a1 1 0 0 0-.369.854l.115 1.489a1 1 0 0 0 .2.526l2.183 2.885a1 1 0 0 0 .91.39l.411-.046a1 1 0 0 1 1.06.673l1.624 4.804a.6.6 0 0 0 .396.383l2 .6a.6.6 0 0 1 .426.604l-.038.778a.6.6 0 0 0 .338.57l1.74.841a.6.6 0 0 0 .788-.25l.913-1.659a1 1 0 0 0 .123-.432l.107-2.142a1 1 0 0 1 .265-.63l.754-.814a1 1 0 0 0 .264-.758l-.062-.786a1 1 0 0 1 .363-.851l1.372-1.125a1 1 0 0 1 .709-.224l3.281.243a.3.3 0 0 0 .318-.346l-.47-2.967a.584.584 0 0 0-1.08-.207l-.458.77a.6.6 0 0 1-.965.09l-1.34-1.518a1 1 0 0 1-.244-.778l.57-4.85a1 1 0 0 0-.696-1.071l-2.562-.8a1 1 0 0 0-1.178.48l-.51.946a1 1 0 0 1-1.224.464l-4.875-1.79a1 1 0 0 0-1.287.603L4.5 6.214a1 1 0 0 1-.917.663z\"/>";

export const MxDurango = /*#__PURE__*/ defineComponent({
  name: 'GeoMxDurango',
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
