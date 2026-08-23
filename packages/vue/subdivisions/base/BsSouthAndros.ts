// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m7.79 9.802-1.688 2.625a1 1 0 0 0-.135.759l.778 3.486a1 1 0 0 1-.038.563l-.43 1.172a1 1 0 0 0 .177.994l1.422 1.669a1 1 0 0 0 .729.35l1.688.055a1 1 0 0 1 .63.25l.846.749a1 1 0 0 0 .852.232l2.675-.517a1 1 0 0 0 .7-.526l1.06-2.071c.228-.448.388-.928.474-1.424l.47-2.711c.082-.475.077-.96-.013-1.434l-1.464-7.65-1.268-4.036a1 1 0 0 0-1.414-.589l-.24.125a1 1 0 0 0-.465.51L10.608 8.57a1 1 0 0 1-.799.614l-1.305.167a1 1 0 0 0-.714.451Z\"/>";

export const BsSouthAndros = /*#__PURE__*/ defineComponent({
  name: 'GeoBsSouthAndros',
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
