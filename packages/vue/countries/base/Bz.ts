// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.026 22.768 1.734.027a.5.5 0 0 0 .459-.285l1.031-2.16a.5.5 0 0 1 .375-.278l1.04-.16a.5.5 0 0 0 .377-.282l2.361-5.056a.5.5 0 0 0 .01-.4l-.643-1.577a.5.5 0 0 1 0-.375l.793-1.978a.5.5 0 0 0-.024-.425l-.566-1.04a.5.5 0 0 1-.015-.447l1.483-3.245a.5.5 0 0 0 .045-.211l-.01-1.654a.5.5 0 0 0-.491-.497l-.99-.015a.5.5 0 0 1-.34-.142l-.949-.925a.5.5 0 0 0-.779.104l-2.489 4.198a.5.5 0 0 1-.576.223L8.854 5.86a.5.5 0 0 0-.646.457l-.673 15.93a.5.5 0 0 0 .491.52Z\"/>";

export const Bz = /*#__PURE__*/ defineComponent({
  name: 'GeoBz',
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
