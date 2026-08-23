// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.46 1.325a.6.6 0 0 0-.574.595l-.113 16.877a3 3 0 0 1-.128.848l-.675 2.23a.6.6 0 0 0 .512.77l1.006.107a2 2 0 0 0 .898-.112l1.35-.496a1 1 0 0 0 .615-.66l.99-3.414a2 2 0 0 1 .687-1.018l2.355-1.845a1 1 0 0 0 .359-1.009l-.586-2.576a1 1 0 0 1 .198-.85l.597-.737a1 1 0 0 0 .222-.674l-.16-3.68a1 1 0 0 1 .655-.982l1.872-.683a.6.6 0 0 0 .3-.886l-.61-.96a.6.6 0 0 0-.715-.241l-3.328 1.234a1 1 0 0 1-1.04-.215l-1.519-1.453a1 1 0 0 0-.734-.276z\"/>";

export const CrHeredia = /*#__PURE__*/ defineComponent({
  name: 'GeoCrHeredia',
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
