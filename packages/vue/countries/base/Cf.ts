// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.363 15.2 2.242 3.804a.25.25 0 0 0 .436-.01l.893-1.688a.5.5 0 0 1 .436-.267l2.069-.025a.5.5 0 0 0 .403-.213l1.365-1.946a.5.5 0 0 1 .57-.186l4.298 1.452a.5.5 0 0 0 .346-.01l4.508-1.803a.5.5 0 0 1 .244-.032l3.062.36a.25.25 0 0 0 .232-.395l-3.136-4.34a.5.5 0 0 0-.15-.138l-2.57-1.519a.5.5 0 0 1-.232-.543l.246-1.066a.5.5 0 0 0-.102-.43l-1.155-1.402a.5.5 0 0 0-.408-.181l-1.356.059a.5.5 0 0 0-.398.227L11.784 7.1a.5.5 0 0 1-.349.223l-2.558.367a.5.5 0 0 0-.382.284L7.811 9.44a.5.5 0 0 1-.388.284l-4.575.606a.5.5 0 0 0-.356.227l-1.208 1.898a.5.5 0 0 0-.078.288l.089 2.224a.5.5 0 0 0 .068.234Z\"/>";

export const Cf = /*#__PURE__*/ defineComponent({
  name: 'GeoCf',
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
