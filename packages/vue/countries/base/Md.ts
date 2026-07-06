// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.939 17.323.329 5.222a.25.25 0 0 0 .27.233l1.378-.117a.25.25 0 0 0 .226-.213l.218-1.493a.5.5 0 0 1 .16-.3l1.917-1.718a.5.5 0 0 0 .158-.459l-.437-2.489a.5.5 0 0 1 .566-.58l5.076.744-.703-2.787a.5.5 0 0 0-.257-.323l-1.367-.698a.5.5 0 0 1-.272-.426l-.084-2.128a.5.5 0 0 0-.313-.444l-1.275-.514a.5.5 0 0 1-.313-.484l.122-2.944a.5.5 0 0 0-.262-.46L9.278 1.266a.5.5 0 0 0-.265-.06l-4.027.22a.5.5 0 0 0-.267.094L3.2 2.624l2.148.938a.5.5 0 0 1 .234.209l6.062 10.551c.068.12.085.26.045.392l-.73 2.434a.5.5 0 0 0-.02.175Z\"/>";

export const Md = /*#__PURE__*/ defineComponent({
  name: 'GeoMd',
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
