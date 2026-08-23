// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.12 3.703V2.31a.962.962 0 0 0-1.74-.565l-.125.172a1 1 0 0 0-.177.755l.512 3.03a1 1 0 0 1-.04.491L9.488 9.295a1 1 0 0 0-.01.613l.905 2.992q.105.348.29.66l.367.619a1 1 0 0 1 .104.774l-.411 1.498a1 1 0 0 0 .236.95l.905.962a1 1 0 0 1 .27.619l.176 2.65a1 1 0 0 0 .58.84l.22.103a1 1 0 0 0 .945-.058l.051-.032a1 1 0 0 0 .473-.896l-.097-2.1a2 2 0 0 0-.217-.819l-.8-1.564a1 1 0 0 1-.11-.445l-.09-8.903a2 2 0 0 0-.105-.62l-.945-2.794a2 2 0 0 1-.105-.64Z\"/>";

export const BsHarbourIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoBsHarbourIsland',
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
