// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.455 21.948.008-1.117a.6.6 0 0 0-.496-.596l-.276-.048a1 1 0 0 1-.824-.917l-.06-.87a1 1 0 0 1 .05-.386l.8-2.375a1 1 0 0 0 .034-.51l-.287-1.477a1 1 0 0 1 .02-.467l1.091-3.8a1 1 0 0 0 .001-.547l-.174-.618a1 1 0 0 1 .017-.597l1.094-3.185a1 1 0 0 0-.058-.786l-.906-1.741a.6.6 0 0 0-.947-.156l-.357.342a.6.6 0 0 0-.18.37l-.639 6.116a2 2 0 0 1-.126.52l-.64 1.638a2 2 0 0 0-.132.865l.048.684c.016.234-.01.468-.074.693l-.659 2.282a6 6 0 0 0-.156 2.637l.328 1.994a3 3 0 0 0 1.928 2.33l.766.281a.6.6 0 0 0 .806-.559Z\"/>";

export const Cl = /*#__PURE__*/ defineComponent({
  name: 'GeoCl',
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
