// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.166 19.163 1.082 2.773-3.024.864-2.477-3.194a1 1 0 0 1-.2-.753l.708-5.02a.5.5 0 0 0-.069-.33l-1.16-1.894a.5.5 0 0 1-.056-.394l.568-2.067a.5.5 0 0 0-.46-.632l-.41-.02a.5.5 0 0 1-.473-.567l.393-2.864a.5.5 0 0 0-.164-.442L7.982 3.347a.5.5 0 0 1-.153-.5L8.256 1.2l3.96.504-.624 2.373a.5.5 0 0 0 .226.556l1.732 1.04a1 1 0 0 1 .485.822l.045 1.32a1 1 0 0 0 .111.425l.863 1.668a1 1 0 0 1 .112.468l-.068 8.416a1 1 0 0 0 .068.371Z\"/>";

export const Tg = /*#__PURE__*/ defineComponent({
  name: 'GeoTg',
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
