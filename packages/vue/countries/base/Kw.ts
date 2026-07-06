// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.538 16.142 1.2 14.839l3.809-4.466a.5.5 0 0 0 .08-.13L7.966 3.46a.5.5 0 0 1 .207-.236l2.315-1.357a.5.5 0 0 1 .248-.069l3.703-.041a.5.5 0 0 1 .213.045l2.761 1.259a.5.5 0 0 0 .317.033l1.689-.38a.5.5 0 0 1 .514.195l2.159 2.978a.5.5 0 0 1-.01.6l-1.854 2.39a.5.5 0 0 1-.563.164l-1.873-.67a.5.5 0 0 0-.49.089l-2.564 2.154a.5.5 0 0 0 .068.814l1.114.654a.5.5 0 0 0 .588-.06l.827-.744a.5.5 0 0 1 .52-.093l.791.317a.5.5 0 0 1 .304.365l.9 4.453a.5.5 0 0 0 .096.21l2.162 2.744a.5.5 0 0 1 .096.201l.596 2.683-7.928.086a.5.5 0 0 1-.385-.174l-1.102-1.28a.5.5 0 0 1-.12-.326v-2.006a.5.5 0 0 0-.093-.289l-1.289-1.82a.5.5 0 0 0-.345-.206Z\"/>";

export const Kw = /*#__PURE__*/ defineComponent({
  name: 'GeoKw',
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
