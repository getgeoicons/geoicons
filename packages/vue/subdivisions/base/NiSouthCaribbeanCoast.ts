// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.076 12.351a2 2 0 0 0 .391.655l1.28 1.43a1 1 0 0 1 .25.774l-.264 2.443a1 1 0 0 0 .335.859l2.61 2.291c.313.276.668.5 1.051.666l2.696 1.166a.596.596 0 0 0 .8-.74l-.544-1.596a2 2 0 0 1 .371-1.943L18 17.244a1 1 0 0 0 .227-.8l-.34-2.219a6 6 0 0 1-.024-1.655l.192-1.532a1 1 0 0 1 .775-.852l.273-.06a1.095 1.095 0 0 0 .756-1.528l-.201-.437a5 5 0 0 1-.407-2.822l.086-.587a1 1 0 0 0-.676-1.095l-.86-.284a1 1 0 0 1-.625-.606l-.258-.705a1 1 0 0 0-.865-.655l-2.144-.158a6 6 0 0 0-1.305.045l-4.061.59a6 6 0 0 0-1.094.265l-2.58.89a1 1 0 0 0-.665.813L4.043 5.06a1 1 0 0 0 .57 1.04l1.07.495a1 1 0 0 1 .52.568z\"/>";

export const NiSouthCaribbeanCoast = /*#__PURE__*/ defineComponent({
  name: 'GeoNiSouthCaribbeanCoast',
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
