// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.333 1.23a.3.3 0 0 0-.299.272l-.31 3.243a1 1 0 0 0 .065.465l1.868 4.694a.6.6 0 0 0 .463.371l.942.15a.6.6 0 0 1 .506.577l.044 1.697a2 2 0 0 0 .254.925l2.706 4.837a1 1 0 0 0 .671.492l2.771.568a1 1 0 0 1 .587.365l2.093 2.683a.6.6 0 0 0 .534.227l3.927-.4a.6.6 0 0 0 .53-.492l.423-2.359a1 1 0 0 0-.06-.558l-.55-1.333a1 1 0 0 0-.243-.35l-9.373-8.746a.6.6 0 0 1-.19-.439V1.54a.3.3 0 0 0-.3-.3z\"/>";

export const UsCalifornia = /*#__PURE__*/ defineComponent({
  name: 'GeoUsCalifornia',
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
