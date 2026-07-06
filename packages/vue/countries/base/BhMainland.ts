// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.207 17.053-.201-1.274a.5.5 0 0 1 .03-.266l.953-2.345a.5.5 0 0 0-.002-.38l-1.438-3.46a.5.5 0 0 1-.032-.112l-.49-3.048a.5.5 0 0 1 .155-.447l1.19-1.096a.5.5 0 0 1 .451-.12l2.003.46a.5.5 0 0 0 .476-.144l2.926-3.094a.5.5 0 0 1 .813.126l1.86 3.857a.5.5 0 0 1-.014.462l-2.484 4.425a.5.5 0 0 0-.062.197l-.893 9.502a.5.5 0 0 1-.088.24l-1.016 1.448a.5.5 0 0 1-.884-.13l-.73-2.22a.5.5 0 0 0-.135-.21L8.36 17.342a.5.5 0 0 1-.153-.288Z\"/>";

export const BhMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoBhMainland',
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
