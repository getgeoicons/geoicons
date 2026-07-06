// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.308 22.07-.57-.523a1 1 0 0 1-.283-1.019l.538-1.827q.048-.166.039-.339l-.125-2.182a1 1 0 0 0-.21-.558L8.69 14.33a1 1 0 0 1-.184-.844l.058-.247a1 1 0 0 1 1.2-.745l.747.174a1 1 0 0 0 .953-.288l.751-.795a1 1 0 0 1 1.002-.275l.575.165a1 1 0 0 1 .633.542l.964 2.09a1 1 0 0 1-.037.912l-.61 1.078a1 1 0 0 0-.129.49l-.008 3.628a1 1 0 0 1-1.154.986l-.393-.061a1 1 0 0 0-.94.37l-.348.442a1 1 0 0 1-1.462.118Zm1.277-12.898.418.19a1 1 0 0 0 1.031-.122l.26-.203a1 1 0 0 0 .384-.788v-.755a1 1 0 0 1 .175-.564l.5-.732a1 1 0 0 0 .175-.591l-.091-3.477a.909.909 0 1 0-1.814.108l.016.174a1 1 0 0 1-.778 1.068l-.289.064a1 1 0 0 0-.556.343l-.51.623a1 1 0 0 0-.201.859l.72 3.118a1 1 0 0 0 .56.685Z\"/>";

export const CorsicaSardiniaRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoCorsicaSardiniaRegion',
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
