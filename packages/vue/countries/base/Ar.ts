// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.695 14.824-1.026 3.9a.5.5 0 0 0 .23.558l1.686.987a.5.5 0 0 1 .247.436l-.018 2.054 2.589.041-1.807-3.672a.5.5 0 0 1 .035-.503l1.013-1.48a.5.5 0 0 0 .006-.556l-.528-.81a.5.5 0 0 1-.017-.52l2.274-4.02a.5.5 0 0 1 .375-.25l1.52-.186a.5.5 0 0 0 .36-.226l.447-.694a.5.5 0 0 0-.005-.55l-.666-.991a.5.5 0 0 1-.072-.392l.481-2.074a.5.5 0 0 1 .228-.315l2.015-1.219a.5.5 0 0 0 .204-.617l-.2-.492a.5.5 0 0 0-.678-.262l-1.702.808a.5.5 0 0 1-.61-.147l-1.72-2.233a.5.5 0 0 0-.405-.195l-1.463.025a.5.5 0 0 0-.459.32L8.483 5.571a.5.5 0 0 0-.024.276l.331 1.696a.5.5 0 0 1-.021.267l-1.217 3.336a.5.5 0 0 0-.03.2l.188 3.323a.5.5 0 0 1-.015.155Z\"/>";

export const Ar = /*#__PURE__*/ defineComponent({
  name: 'GeoAr',
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
