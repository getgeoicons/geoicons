// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.513 16.348-1.095-.715a1 1 0 0 1-.447-.948l.254-2.274a1 1 0 0 1 .742-.856l.589-.153a1 1 0 0 0 .744-1.06l-.114-1.23a1 1 0 0 1 .863-1.084l.444-.06a1 1 0 0 0 .679-.407l.511-.712a1 1 0 0 0 .171-.403l.106-.575a1 1 0 0 0-.078-.606l-1.768-3.767 2.611-.298-.108 1.727 1.371 2.59a1 1 0 0 1 .115.508l-.06 1.52a1 1 0 0 0 .343.796l.337.293a1 1 0 0 1 .342.673l.095 1.16a1 1 0 0 0 .94.917l.378.021a.6.6 0 0 1 .566.588l.038 2.08a1 1 0 0 1-.832 1.005l-.528.09a1 1 0 0 0-.63.381l-1.291 1.702a1 1 0 0 0-.06 1.122l.623 1.028a1 1 0 0 1 .135.387l.168 1.278a1 1 0 0 1-.046.457l-.109.314a1 1 0 0 1-.53.583l-.346.158a1 1 0 0 1-.768.025l-.368-.139a1 1 0 0 0-.841.064l-.309.172a.576.576 0 0 1-.854-.498l-.006-1.363a1 1 0 0 1 .408-.811l.38-.279a1 1 0 0 0 .405-.72l.01-.12a1 1 0 0 0-.313-.817l-.042-.039a1 1 0 0 0-.725-.268l-.428.017a1 1 0 0 1-.86-.424l-.54-.768a1 1 0 0 0-.272-.262Z\"/>";

export const NileBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoNileBasin',
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
