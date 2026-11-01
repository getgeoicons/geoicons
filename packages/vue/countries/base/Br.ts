// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.207 22.224 1.448-2.017a3 3 0 0 0 .493-1.099l.266-1.197a1 1 0 0 1 .575-.7l2.228-.974a2 2 0 0 0 1.144-1.366l.846-3.524a2 2 0 0 1 .415-.822l1.247-1.481a1.82 1.82 0 0 0-.823-2.901l-5.374-1.768a2 2 0 0 1-1.234-1.161l-.38-.957a.6.6 0 0 0-.771-.34l-3.2 1.22a.6.6 0 0 1-.812-.514l-.06-.751a.6.6 0 0 0-.714-.541l-1.096.217a.6.6 0 0 0-.478.51l-.058.442a1 1 0 0 1-1.094.865L4.55 3.238a.6.6 0 0 0-.66.639l.1 1.451a1 1 0 0 1-.603.988l-.731.314a1 1 0 0 0-.51.492l-.194.41a1 1 0 0 0 .318 1.237l1.411 1.022a1 1 0 0 0 .951.121L5.688 9.5a1 1 0 0 1 1.066.218l2.823 2.777a2 2 0 0 1 .594 1.546l-.059.976a1 1 0 0 0 .743 1.027l.44.117a1 1 0 0 1 .678.605l.42 1.08a1 1 0 0 1-.244 1.088l-1.197 1.136a.6.6 0 0 0-.013.857l1.355 1.369a.6.6 0 0 0 .913-.072Z\"/>";

export const Br = /*#__PURE__*/ defineComponent({
  name: 'GeoBr',
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
