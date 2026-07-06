// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.59 17.053-.2-1.274a.5.5 0 0 1 .03-.266l.952-2.345a.5.5 0 0 0-.001-.38l-1.439-3.46a.5.5 0 0 1-.032-.112l-.489-3.048a.5.5 0 0 1 .155-.447l1.19-1.096a.5.5 0 0 1 .45-.12l2.004.46a.5.5 0 0 0 .475-.144l2.926-3.094a.5.5 0 0 1 .814.126l1.86 3.857a.5.5 0 0 1-.014.462l-2.484 4.425a.5.5 0 0 0-.062.197l-.893 9.502a.5.5 0 0 1-.089.24l-1.016 1.448a.5.5 0 0 1-.884-.13l-.73-2.22a.5.5 0 0 0-.134-.21l-2.236-2.083a.5.5 0 0 1-.153-.288ZM7.234 9.752l.008-1.166a.5.5 0 0 0-.496-.504l-.64-.006a.5.5 0 0 0-.505.5V9.75a.5.5 0 0 0 .5.5h.633a.5.5 0 0 0 .5-.497Z\"/>";

export const Bh = /*#__PURE__*/ defineComponent({
  name: 'GeoBh',
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
