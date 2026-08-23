// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.118 9.906a.3.3 0 0 1-.169.301l-5.061 2.435a.3.3 0 0 0 .04.556l5.788 1.795a1 1 0 0 0 .43.036l1.2-.163a3 3 0 0 1 1.236.09l.54.156a1.96 1.96 0 0 1 1.287 1.185l.384 1.01a1 1 0 0 0 .446.518l.526.295a1 1 0 0 0 .808.075l2.595-.874a2 2 0 0 0 1.072-.858l.871-1.437a1 1 0 0 1 .675-.465l.728-.133c.35-.065.676-.22.945-.453l.872-.751a.6.6 0 0 0 .051-.86l-2.739-2.99a2 2 0 0 1-.524-1.276l-.035-.95a1 1 0 0 0-.811-.945l-2.397-.46a1 1 0 0 0-.767.167l-1.76 1.25a2 2 0 0 1-.734.323L7.257 8.644a.3.3 0 0 0-.234.324z\"/>";

export const BbChristChurch = /*#__PURE__*/ defineComponent({
  name: 'GeoBbChristChurch',
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
