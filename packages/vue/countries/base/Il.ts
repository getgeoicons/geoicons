// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.536 22.8-3.648-9.266a.5.5 0 0 1 .107-.531l1.483-1.528a.5.5 0 0 0 .135-.428l-.14-.88a.5.5 0 0 1 .023-.25l1.16-3.185.929-3.577a.5.5 0 0 1 .504-.374l1.426.058a.5.5 0 0 0 .486-.316l.522-1.323 1.707.44-.895 4.773a.5.5 0 0 1-.666.377l-1.27-.473a.5.5 0 0 0-.648.308l-.54 1.595a.5.5 0 0 0 .049.425l.538.863a.5.5 0 0 1-.17.695l-.487.288a.5.5 0 0 0-.225.286l-.507 1.686 2.802-.396a.5.5 0 0 1 .547.647z\"/>";

export const Il = /*#__PURE__*/ defineComponent({
  name: 'GeoIl',
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
