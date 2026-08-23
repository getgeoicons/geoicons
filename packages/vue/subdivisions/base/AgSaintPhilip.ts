// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.47 18.596a.6.6 0 0 0 .508.496l2.319.325a2 2 0 0 1 .732.254l4.435 2.593a3 3 0 0 0 1.444.41l4.842.114a1 1 0 0 0 .825-.401l1.462-1.958a3 3 0 0 1 .889-.794l1.954-1.143a1 1 0 0 0 .476-1.057l-1.198-6.069a.6.6 0 0 0-.887-.404l-.949.544a2 2 0 0 1-1.038.265l-1.12-.025a2 2 0 0 1-1.37-.585l-1.391-1.39a1 1 0 0 1 .17-1.552l2.234-1.42a1 1 0 0 1 .923-.079l1.134.475a.6.6 0 0 0 .826-.47l.288-2.048a3 3 0 0 1 .325-.998l.704-1.315a.6.6 0 0 0-.464-.88l-.97-.105a1 1 0 0 0-.596.121l-1.04.582a1 1 0 0 1-1.038-.038l-1.02-.672a1 1 0 0 0-.57-.166l-.962.02a1 1 0 0 0-.775.394l-1.037 1.36a1 1 0 0 1-1.644-.076l-.31-.496a.6.6 0 0 0-.71-.247L6.912 3.215a1 1 0 0 0-.541.462l-.813 1.484a3 3 0 0 1-.94 1.038L3.054 7.264a1 1 0 0 0-.435.867l.052 1.296a3 3 0 0 1-.261 1.351l-.657 1.462a2 2 0 0 0-.149 1.147z\"/>";

export const AgSaintPhilip = /*#__PURE__*/ defineComponent({
  name: 'GeoAgSaintPhilip',
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
