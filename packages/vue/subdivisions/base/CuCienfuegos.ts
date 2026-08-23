// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.2 15.45a.6.6 0 0 0 .641.46l.695-.066a3 3 0 0 1 1.106.102l.662.19c.522.148.993.436 1.364.832l2.05 2.186c.256.273.56.496.899.657l3.655 1.74a.6.6 0 0 0 .833-.371l.292-.984a2 2 0 0 1 .473-.815l.491-.513a1 1 0 0 0 .211-1.05l-1.493-3.886a2 2 0 0 1-.012-1.4l.363-1a1 1 0 0 0-.167-.976l-1.22-1.486a2 2 0 0 0-.721-.553l-1.057-.479a1 1 0 0 1-.587-.932l.071-3.446a1 1 0 0 0-.547-.913l-.246-.124a1 1 0 0 0-1.14.165l-.584.554a1 1 0 0 1-1.436-.062l-.393-.444a1 1 0 0 0-1.348-.137L9.378 4.703a2 2 0 0 1-1.463.382L4.057 4.57a1 1 0 0 0-.722.184L1.687 5.957a1 1 0 0 0-.4.952l.618 4.242a1 1 0 0 0 .322.6L3.9 13.252a1 1 0 0 0 .576.252l3.644.333a1 1 0 0 1 .883.768z\"/>";

export const CuCienfuegos = /*#__PURE__*/ defineComponent({
  name: 'GeoCuCienfuegos',
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
