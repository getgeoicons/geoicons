// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.727 7.89-3.924 13.264a.5.5 0 0 1-.259.307l-2.468 1.215a.5.5 0 0 1-.489-.027l-1.833-1.166a.5.5 0 0 1-.224-.335l-.319-1.815-.022-.082-.746-2.08a.5.5 0 0 1 .045-.432l1.86-2.992a.5.5 0 0 0 .063-.376l-.787-3.436a.5.5 0 0 1 .019-.285l.646-1.748a.5.5 0 0 1 .282-.291l3.505-1.41a.5.5 0 0 0 .226-.181l3.038-4.425a.25.25 0 0 1 .44.053l1.765 4.678a.5.5 0 0 1-.063.469l-.681.943a.5.5 0 0 0-.074.151Z\"/>";

export const Mg = /*#__PURE__*/ defineComponent({
  name: 'GeoMg',
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
