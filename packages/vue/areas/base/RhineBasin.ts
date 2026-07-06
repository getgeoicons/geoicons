// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.333 6.434-3.075-.538a.6.6 0 0 1-.415-.894L6.22 2.657a1 1 0 0 1 .539-.44l1.999-.685a1 1 0 0 1 1.277.645l1.038 3.29a1 1 0 0 0 1.06.693l1.283-.137a.617.617 0 0 1 .575.962l-.531.775a1 1 0 0 0 .103 1.257l1.152 1.203a1 1 0 0 0 .812.304l2.831-.254a1 1 0 0 1 1.016.619l.142.35a1 1 0 0 1 .074.401l-.031 1.255a1 1 0 0 1-.241.626l-.582.68a.82.82 0 0 1-1.174.07.82.82 0 0 0-1.338.374l-.168.572a1 1 0 0 1-.624.66l-1.577.562a.835.835 0 0 0 .4 1.612l.933-.135a1 1 0 0 1 .851.282l.2.2a1 1 0 0 1 .293.746l-.062 1.594a1 1 0 0 1-.224.593l-.765.938a1 1 0 0 1-1.085.318l-1.292-.422a1 1 0 0 0-.573-.014l-1.92.524a1 1 0 0 1-.58-.016l-2.168-.723 1.83-1.892a1 1 0 0 0-.05-1.439l-1.328-1.192a1 1 0 0 1-.266-.385l-.967-2.516a1 1 0 0 1-.063-.446l.167-1.9a1 1 0 0 1 .418-.73l1.336-.946a1 1 0 0 0 .418-.904l-.2-2.255a1 1 0 0 0-.824-.897Z\"/>";

export const RhineBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoRhineBasin',
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
