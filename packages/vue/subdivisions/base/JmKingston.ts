// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.536 10.834a.3.3 0 0 0 .231.477l1.327.047a1 1 0 0 1 .54.181l1.817 1.278a1 1 0 0 0 .634.18l11.218-.665a2 2 0 0 1 1.12.265l1.202.695a2 2 0 0 1 .678.647l.958 1.482a.3.3 0 0 0 .543-.092l.929-3.838a.3.3 0 0 0-.206-.358l-7.025-2.086a1 1 0 0 0-.416-.033l-3.202.425a2 2 0 0 1-1.066-.15L8.45 8.25a1 1 0 0 0-.915.057l-1.538.92a1 1 0 0 1-1.198-.13l-.93-.874a.3.3 0 0 0-.448.04z\"/>";

export const JmKingston = /*#__PURE__*/ defineComponent({
  name: 'GeoJmKingston',
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
