// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.349 16.711 3.868 22.8l2.103-.83a1 1 0 0 1 .286-.067l2.703-.22 4.684-.978a.6.6 0 0 0 .475-.642l-.048-.528a.6.6 0 0 0-.706-.536l-.867.16a1 1 0 0 1-1.05-.493l-.189-.333a1 1 0 0 1-.127-.554l.082-1.311a1 1 0 0 1 .152-.471l1.413-2.242a1 1 0 0 1 .365-.344l5.953-3.264a1 1 0 0 0 .305-1.496l-1.226-1.557a1 1 0 0 1-.213-.566l-.192-3.643a1 1 0 0 0-.394-.744l-.843-.641a1 1 0 0 0-.545-.202l-1.027-.062a1 1 0 0 0-.906.464L12.64 3.943a1 1 0 0 0-.092.186l-1.245 3.356a1 1 0 0 1-.295.418l-1.23 1.032a1 1 0 0 1-.65.234L5.182 9.14l-.227 3.054a1 1 0 0 0 .002.177l.416 4a1 1 0 0 1-.023.34Z\"/>";

export const NewEngland = /*#__PURE__*/ defineComponent({
  name: 'GeoNewEngland',
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
