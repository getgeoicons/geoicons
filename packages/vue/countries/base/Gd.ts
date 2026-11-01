// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.537 21.88 1.48-1.36a1 1 0 0 0 .319-.837L6.11 17.45a2 2 0 0 1 .233-1.154l.821-1.513a4 4 0 0 1 .944-1.156l1.13-.948a2 2 0 0 1 1.423-.464l.902.063a1 1 0 0 1 .93 1.053l-.203 3.61a2 2 0 0 1-.148.65l-1.193 2.893a2 2 0 0 1-.851.971l-1.726.993a2 2 0 0 1-1.31.242l-2.395-.38a.25.25 0 0 1-.13-.43ZM15.975 3.67l.784-.264a1 1 0 0 0 .626-.624l.264-.772a1.006 1.006 0 0 1 1.126-.66c.572.1.948.667.806 1.23l-.42 1.666a1 1 0 0 1-.576.675l-1.923.824a1 1 0 0 1-1.386-1.05l.028-.207a1 1 0 0 1 .67-.817Z\"/>";

export const Gd = /*#__PURE__*/ defineComponent({
  name: 'GeoGd',
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
