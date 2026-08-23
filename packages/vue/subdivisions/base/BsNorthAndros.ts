// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.723 18.133a1 1 0 0 0 .995-.848l.064-.417a1 1 0 0 0 .007-.251l-.088-.882a2 2 0 0 0-.576-1.217l-2.081-2.081a11 11 0 0 1-1.666-2.137l-1.375-2.303a1 1 0 0 1-.075-.87l.664-1.73a1 1 0 0 0-.032-.791l-1.396-2.909a.6.6 0 0 0-.755-.3l-1.945.74a1 1 0 0 1-.486.056L9.912 1.92a.6.6 0 0 0-.591.906l1.367 2.254a1 1 0 0 1 .135.66l-.465 3.25a2 2 0 0 1-.4.943l-3.828 4.93a1 1 0 0 1-.466.332l-2.362.808a1 1 0 0 0-.562 1.41l.274.522c.203.387.488.725.834.99l4.796 3.668a1 1 0 0 0 .608.206h.361a1 1 0 0 0 .71-.296l1.237-1.248a8 8 0 0 1 1.822-1.375l1.05-.58a8 8 0 0 1 2.326-.844l.947-.186a8 8 0 0 1 1.592-.148z\"/>";

export const BsNorthAndros = /*#__PURE__*/ defineComponent({
  name: 'GeoBsNorthAndros',
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
