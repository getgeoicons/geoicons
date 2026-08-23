// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.328 12.439a1 1 0 0 0-.256.824l.025.167a2 2 0 0 0 .523 1.08l1.763 1.871a1 1 0 0 0 .385.254l1.521.554a1 1 0 0 1 .568.524l1.985 4.348a.6.6 0 0 0 .945.199l.557-.497a.6.6 0 0 0 .191-.558l-.494-2.65a1 1 0 0 0-.239-.485l-1.948-2.168a1 1 0 0 0-.56-.315l-.472-.089a2.8 2.8 0 0 1-2.097-1.748l-.072-.19a3 3 0 0 1-.197-.942l-.07-1.587a2 2 0 0 0-.301-.97l-1.41-2.26c-.25-.4-.442-.832-.57-1.286l-.246-.867a4 4 0 0 0-.63-1.286L7.344 1.81a1 1 0 0 0-1.16-.34l-.095.036a1 1 0 0 0-.643.994l.06.992a1 1 0 0 0 .59.853l.634.284a1 1 0 0 1 .523.547l1.063 2.701a3 3 0 0 0 .85 1.189l.706.6a2 2 0 0 1 .617.94l.213.695a1 1 0 0 1-.222.971z\"/>";

export const BsLongIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoBsLongIsland',
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
