// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.615 2.444a.6.6 0 0 0-.51-.578l-3.962-.601a.3.3 0 0 0-.339.358l.236 1.12a.6.6 0 0 1-.583.725l-2.662.014a.6.6 0 0 0-.586.713l.537 2.793a2 2 0 0 1-.039.917l-.39 1.393a1 1 0 0 0 .082.744l.522.971a2 2 0 0 1 .238 1.028l-.323 8.112a3 3 0 0 0 .052.69l.266 1.37a.6.6 0 0 0 .702.474l.502-.096a.6.6 0 0 0 .477-.698l-.163-.881a.3.3 0 0 1 .247-.351l2.583-.424a.6.6 0 0 0 .503-.59l.016-9.844a.6.6 0 0 1 .416-.57l1.096-.353a2 2 0 0 0 1.077-.836l1.045-1.654a.8.8 0 0 0-.003-.859l-.699-1.092a2 2 0 0 1-.315-1.029z\"/>";

export const BbSaintJames = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintJames',
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
