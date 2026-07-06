// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.065 9.037 1.35 16.753a.5.5 0 0 0-.012.502l.148.268a.5.5 0 0 0 .583.237l.64-.194a.5.5 0 0 1 .604.281l.219.508a.5.5 0 0 0 .59.285l1.301-.351a.5.5 0 0 1 .449.097l1.388 1.146a.5.5 0 0 0 .708-.072l.32-.397a.5.5 0 0 1 .39-.186l13.59.028a.5.5 0 0 0 .502-.5l.028-11.792a.5.5 0 0 0-.498-.501L7.816 6.054a.5.5 0 0 1-.48-.366l-.321-1.155a.5.5 0 0 0-.51-.365l-.404.023a.5.5 0 0 0-.468.562l.501 3.96a.5.5 0 0 1-.07.324Z\"/>";

export const Gq = /*#__PURE__*/ defineComponent({
  name: 'GeoGq',
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
