// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.355 9.565a1 1 0 0 1-.502-.05l-1.458-.54a1 1 0 0 0-.953.142l-1.184.9a1 1 0 0 1-.769.191l-3.263-.542a.6.6 0 0 0-.66.804l1.053 2.794a.6.6 0 0 0 .643.383L7.989 13l7.31-1.122a4 4 0 0 1 2.073.232l.377.148a4 4 0 0 1 2.025 1.77l1.15 2.055a.6.6 0 0 0 1.023.039l.614-.927a1 1 0 0 0 .14-.781l-.564-2.397a1 1 0 0 0-.503-.653l-1.619-.864a1 1 0 0 1-.519-.737l-.258-1.76a.6.6 0 0 0-.93-.41l-1.209.82a1 1 0 0 1-.406.16z\"/>";

export const BsEastGrandBahama = /*#__PURE__*/ defineComponent({
  name: 'GeoBsEastGrandBahama',
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
