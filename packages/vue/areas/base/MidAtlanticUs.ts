// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.393 20.472C13.229 21.74 6.933 22.55 4.243 22.8l3.007-2.478-1.144-1.168a1 1 0 0 1-.183-1.142l2.19-4.44a1 1 0 0 0 .092-.587l-.413-2.83 1.64-1.264a1 1 0 0 0 .384-.903l-.093-.84a.6.6 0 0 1 .523-.662l2.439-.3a1 1 0 0 0 .868-1.128l-.08-.586a1 1 0 0 1 .14-.66l1.01-1.636a1 1 0 0 1 .651-.455l1.967-.4a.6.6 0 0 1 .709.472l1.767 9.019a1 1 0 0 1-.004.404l-1.917 8.815a.59.59 0 0 1-.403.441Z\"/>";

export const MidAtlanticUs = /*#__PURE__*/ defineComponent({
  name: 'GeoMidAtlanticUs',
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
