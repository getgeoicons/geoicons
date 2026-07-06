// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.395 1.355-2.256 1.32a.5.5 0 0 0-.202.223l-3.105 6.75a.5.5 0 0 0-.046.213l.052 5.724a.5.5 0 0 0 .101.297l.875 1.158a.5.5 0 0 1 .085.427l-.434 1.664a.5.5 0 0 0 .036.348l1.106 2.227c.05.1.13.18.23.229l1.685.81a.5.5 0 0 0 .24.05l2.5-.112a.5.5 0 0 0 .351-.166l.56-.626a.5.5 0 0 0 .092-.15l1.378-3.506a.5.5 0 0 1 .043-.084l1.444-2.283a.5.5 0 0 0 .076-.295l-.14-2.578a.5.5 0 0 0-.239-.4l-.753-.46a.5.5 0 0 1-.23-.326l-.455-2.226a.5.5 0 0 1 .05-.336l1.189-2.218a.5.5 0 0 0 .059-.25l-.057-1.982a.5.5 0 0 0-.402-.476l-1.302-.26a.5.5 0 0 1-.382-.349l-.421-1.43a.5.5 0 0 0-.21-.279l-.995-.638a.5.5 0 0 0-.523-.01Z\"/>";

export const Qa = /*#__PURE__*/ defineComponent({
  name: 'GeoQa',
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
