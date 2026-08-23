// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m8.57 3.866-.337-1.797a.786.786 0 0 0-1.548.28l.644 3.744a7.57 7.57 0 0 0 2.919 4.773l.254.19c.4.3.453.88.115 1.249-.35.38-.28.982.148 1.272l.813.551a1 1 0 0 1 .434.72l.358 3.298a4.7 4.7 0 0 0 2.225 3.51l1.256.768a.824.824 0 0 0 1.069-.183c.284-.349.232-.859-.08-1.182-2.58-2.667-3.373-7.098-3.805-9.852a1 1 0 0 0-.328-.597l-.583-.512A11 11 0 0 1 8.57 3.866Z\"/>";

export const BsRaggedIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoBsRaggedIsland',
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
