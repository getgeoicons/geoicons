// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.158 17.74 1.191-3.336a.6.6 0 0 0-.264-.72l-.154-.09a.6.6 0 0 0-.767.142l-.652.806a.6.6 0 0 1-.708.172l-.66-.29a2 2 0 0 1-1.095-1.2l-.254-.763a2 2 0 0 1-.088-.386l-.434-3.5a2 2 0 0 1 .188-1.123l.167-.343a2 2 0 0 1 .803-.858l2.56-1.466A4 4 0 0 1 6.7 4.266l2.536-.178a1.5 1.5 0 0 0 .635-.19l.993-.564a1 1 0 0 1 .895-.045l2.303 1.01a2 2 0 0 0 .616.16l5.571.526a1 1 0 0 0 .79-.277l.243-.235a.6.6 0 0 1 .87.038l.344.397a.6.6 0 0 1 .038.736L20.83 8.087a1 1 0 0 1-.887.426l-1.17-.08a1.568 1.568 0 0 0-1.502 2.282l3.47 6.759a1 1 0 0 1-.115 1.087l-1.604 1.971a1 1 0 0 1-.8.369l-3.208-.079a1 1 0 0 1-.72-.332l-1.759-1.96a3 3 0 0 0-1.022-.741l-2.227-.982a1 1 0 0 0-.98.098l-2.202 1.553a.623.623 0 0 1-.946-.719Z\"/>";

export const EeMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoEeMainland',
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
