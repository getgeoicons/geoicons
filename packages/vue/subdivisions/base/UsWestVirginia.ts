// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.726 10.238a.3.3 0 0 0-.03-.302l-1.23-1.701a1 1 0 0 0-.922-.407l-1.932.216a2 2 0 0 0-1.022.423l-2.803 2.23a.3.3 0 0 1-.487-.243l.067-2.433a.3.3 0 0 0-.301-.309l-2.99.02a.3.3 0 0 1-.301-.299l-.02-4.914a.6.6 0 0 0-.599-.597h-.191a.6.6 0 0 0-.586.465l-1.306 5.7a2 2 0 0 1-.745 1.15l-3.18 2.397a1 1 0 0 0-.181.176L1.51 14.9a1 1 0 0 0-.216.573L1.22 16.97a1 1 0 0 0 .229.687l2.803 3.39a2 2 0 0 0 2.134.636l4.286-1.33a1 1 0 0 0 .601-.513l2.466-5.012a.6.6 0 0 1 .744-.299l1.069.39a.6.6 0 0 0 .69-.211l3.285-4.523a.3.3 0 0 1 .438-.051l1.706 1.467a.3.3 0 0 0 .467-.101z\"/>";

export const UsWestVirginia = /*#__PURE__*/ defineComponent({
  name: 'GeoUsWestVirginia',
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
