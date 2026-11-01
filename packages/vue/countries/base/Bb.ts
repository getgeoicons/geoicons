// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path d=\"m7.264 20.654 3.412.618a1 1 0 0 1 .6.356l.524.65a1 1 0 0 0 1.056.333l.746-.216a4 4 0 0 0 1.323-.667l2.305-1.766c.352-.27.657-.595.902-.965l1.783-2.689a2 2 0 0 0 .227-1.75l-.01-.03a2 2 0 0 0-.91-1.098l-1.59-.898-4.483-2.298a3 3 0 0 1-1.125-1.002l-1.838-2.75a3 3 0 0 1-.359-.736l-.574-1.762a3 3 0 0 0-1.068-1.481L7.15 1.738a2 2 0 0 0-1.624-.344l-.04.009a2 2 0 0 0-1.173.763l-.33.447A2 2 0 0 0 3.6 3.975l1.206 13.871a2 2 0 0 0 .44 1.087l.821 1.013a2 2 0 0 0 1.197.708Z\"/>";

export const Bb = /*#__PURE__*/ defineComponent({
  name: 'GeoBb',
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
