// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.387 8.12a1 1 0 0 0-.168-1.145l-.915-.958A1 1 0 0 0 20.1 5.83l-1.334.734a3 3 0 0 1-.956.33l-4.314.716a1 1 0 0 1-.693-.139L5.467 2.893a.6.6 0 0 0-.812.17l-.232.338a.6.6 0 0 0 .024.712l.625.789a.6.6 0 0 1-.093.84L2.574 7.683a1 1 0 0 0-.368.684L1.181 19.234a1 1 0 0 0 .641 1.03l1.964.743a1 1 0 0 0 .918-.11l2.983-2.035a3 3 0 0 1 .997-.441l3.903-.928a1 1 0 0 0 .74-.74l.362-1.503a1 1 0 0 1 .339-.54l1.342-1.1a1 1 0 0 1 .624-.226l2.452-.024a1 1 0 0 0 .636-.236l.862-.73c.304-.257.554-.572.735-.927z\"/>";

export const VcSaintPatrick = /*#__PURE__*/ defineComponent({
  name: 'GeoVcSaintPatrick',
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
