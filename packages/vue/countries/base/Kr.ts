// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.166 3.113-2.32 2.148a.5.5 0 0 0-.13.539l.9 2.462a.5.5 0 0 1-.178.577l-1.99 1.435a.5.5 0 0 0-.143.652l1.832 3.233a.5.5 0 0 1 .023.45L5.844 17.58a.5.5 0 0 0-.038.265l.207 1.656a.5.5 0 0 1-.042.27l-.797 1.745a.5.5 0 0 0 .272.673l1.404.552a.5.5 0 0 0 .3.021l2.84-.679a.5.5 0 0 0 .165-.072l2.917-1.984a.5.5 0 0 1 .448-.058l1.302.459a.5.5 0 0 0 .602-.226l.637-1.127a.5.5 0 0 1 .28-.229l1.514-.494a.5.5 0 0 0 .33-.352l.806-3.155a.5.5 0 0 0-.064-.395l-.68-1.052a.5.5 0 0 1-.066-.39l.452-1.847a.5.5 0 0 0 .002-.23l-.6-2.636a.5.5 0 0 0-.047-.126l-3.75-6.97-1.663 1.65a.5.5 0 0 1-.355.145L9.508 2.98a.5.5 0 0 0-.342.133Z\"/>";

export const Kr = /*#__PURE__*/ defineComponent({
  name: 'GeoKr',
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
