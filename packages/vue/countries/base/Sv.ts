// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.333 9.622-1.737 2.065a.5.5 0 0 0 .147.762l1.733.929a.5.5 0 0 1 .245.303l.092.323a.5.5 0 0 0 .444.361l4.078.302a.5.5 0 0 1 .18.048l4.343 2.087a.5.5 0 0 0 .156.045l7.697.945a.5.5 0 0 0 .415-.142l.945-.946a.5.5 0 0 0 .13-.226l.298-1.13a.5.5 0 0 0-.006-.275l-.331-1.071a.5.5 0 0 1 .004-.309l.556-1.638a.5.5 0 0 0-.056-.435l-.409-.623a.5.5 0 0 0-.542-.21l-1.225.315a.5.5 0 0 1-.542-.21l-.477-.723a.5.5 0 0 0-.637-.174l-2.638 1.29a.5.5 0 0 1-.56-.082l-5.25-4.89a.5.5 0 0 0-.344-.134l-3.49.03a.5.5 0 0 0-.489.582l.158.94a.5.5 0 0 1-.143.44L4.8 9.424a.5.5 0 0 1-.445.134l-.545-.105a.5.5 0 0 0-.477.169Z\"/>";

export const Sv = /*#__PURE__*/ defineComponent({
  name: 'GeoSv',
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
