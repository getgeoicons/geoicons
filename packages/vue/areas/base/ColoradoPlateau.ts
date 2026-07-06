// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.965 11.632-.567 1.906a1 1 0 0 0 .146.868l1.415 1.972a1 1 0 0 0 .499.367l1.805.596a1 1 0 0 1 .55.447l.871 1.498a1 1 0 0 0 .487.424l3.388 1.381a1 1 0 0 1 .217.122l1.768 1.307a1 1 0 0 0 .836.166l3.397-.85a1 1 0 0 0 .652-.522l1.185-2.37a1 1 0 0 0 .097-.32l.3-2.318a1 1 0 0 1 .565-.776l.542-.255a1 1 0 0 0 .571-.982l-.022-.288a1 1 0 0 0-.202-.53l-1.132-1.485a1 1 0 0 0-.666-.386l-.974-.126a1 1 0 0 1-.858-1.152l.025-.157a1 1 0 0 1 .534-.731l.596-.303a1 1 0 0 0 .517-.65l.579-2.321A1 1 0 0 0 20 5.456l-1.565-2.974a1 1 0 0 0-.654-.507l-3.108-.736a1 1 0 0 0-.33-.022l-2.376.237a1 1 0 0 0-.65.333L7.913 5.641a1 1 0 0 0-.089.116L5.142 9.875a1 1 0 0 1-.312.305l-1.432.887a1 1 0 0 0-.433.565Z\"/>";

export const ColoradoPlateau = /*#__PURE__*/ defineComponent({
  name: 'GeoColoradoPlateau',
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
