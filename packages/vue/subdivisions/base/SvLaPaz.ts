// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.194 3.1a1 1 0 0 1-.701.176l-1.47-.186a1 1 0 0 0-.896.354l-.853 1.032a.6.6 0 0 1-.51.215l-1.71-.136a.3.3 0 0 0-.303.408l.89 2.286a1 1 0 0 1-.024.785l-1.342 2.884a.3.3 0 0 0 .183.413l1.232.38a.3.3 0 0 1 .192.394l-.917 2.365a.3.3 0 0 0 .13.368l5.095 2.92 5.587 2.382 4.17 2.254a1 1 0 0 0 1.27-.27l1.859-2.425a1 1 0 0 0 .197-.47l.537-3.831a1 1 0 0 0-.215-.77l-1.548-1.9a1 1 0 0 1-.194-.88l.62-2.422a2 2 0 0 0-.114-1.319l-1.053-2.333a1 1 0 0 0-.847-.587l-1.547-.1a.6.6 0 0 1-.556-.685l.287-1.955a.6.6 0 0 0-.15-.492l-.363-.396a.6.6 0 0 0-.747-.113l-1.481.871a1 1 0 0 1-.917.05l-1.16-.52a1 1 0 0 0-.986.095z\"/>";

export const SvLaPaz = /*#__PURE__*/ defineComponent({
  name: 'GeoSvLaPaz',
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
