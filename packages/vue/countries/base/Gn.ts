// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m22.108 12.896-.029-1.3a3 3 0 0 0-.196-1.004l-.98-2.567a3 3 0 0 0-.275-.547l-1.529-2.39a1 1 0 0 0-1.377-.305l-1.057.67a1 1 0 0 1-.488.154l-1.721.08a2 2 0 0 1-.976-.202l-1.629-.8a1 1 0 0 0-.519-.1l-2.085.163a2 2 0 0 1-.639-.053L5.89 4.018a.6.6 0 0 0-.745.582v1.631a.6.6 0 0 1-.471.586l-1.963.433a1 1 0 0 0-.656.486l-.61 1.081a.6.6 0 0 0 .14.756l2.687 2.236a3 3 0 0 1 .604.682l1.165 1.81a.6.6 0 0 0 .96.066l1.646-1.913a1 1 0 0 1 .678-.344l2.614-.209a1 1 0 0 1 .926.465l1.273 2.027a1 1 0 0 1 .151.585l-.063 1.201a.6.6 0 0 0 .709.622l1.373-.256a1 1 0 0 1 1.174.843l.229 1.622a1 1 0 0 0 .513.74l.31.168a1 1 0 0 0 .928.014l1.58-.797a1 1 0 0 0 .427-.414l1.151-2.11a1 1 0 0 0 .099-.696l-.54-2.435a3 3 0 0 1-.071-.584Z\"/>";

export const Gn = /*#__PURE__*/ defineComponent({
  name: 'GeoGn',
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
