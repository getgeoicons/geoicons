// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.75 18.967a1 1 0 0 1-1.217.53l-6.088-1.98a2 2 0 0 1-1.018-.751l-.829-1.18a1 1 0 0 1-.007-1.14l.624-.913a1 1 0 0 1 .9-.433l1.4.105a1 1 0 0 0 .618-.158l2.23-1.447a1 1 0 0 0 .417-1.12l-.705-2.407a1 1 0 0 0-.899-.717l-.492-.03a.896.896 0 0 1-.155-1.766l4.888-1.175a1 1 0 0 1 1.046.39l.226.315a1 1 0 0 0 .862.416l.207-.01a.75.75 0 0 0 .627-.396.75.75 0 0 1 .686-.396l.196.005a1 1 0 0 1 .931.719l.174.593a1 1 0 0 0 .669.676l1.356.411a3 3 0 0 0 1.276.102l1.005-.136a1 1 0 0 0 .682-.415l.596-.846a.987.987 0 0 1 1.79.659l-.326 3.533a1 1 0 0 1-.25.575l-2.738 3.06a1 1 0 0 0-.243.82l.222 1.425a.6.6 0 0 1-.719.68l-5.435-1.162a1 1 0 0 0-1.117.558z\"/>";

export const MxMichoacan = /*#__PURE__*/ defineComponent({
  name: 'GeoMxMichoacan',
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
