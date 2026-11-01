// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.96 14.49 3.145 3.515a1 1 0 0 0 .786.332l.911-.037a1 1 0 0 1 .648.204l3.367 2.573a.616.616 0 0 0 .837-.894l-6.796-7.78a2 2 0 0 1-.473-1.03l-.157-1.09a.8.8 0 0 1 .421-.822l.066-.035a.8.8 0 0 1 .995.208l.537.669a.6.6 0 0 0 .784.134l1.304-.809a1 1 0 0 1 .673-.14l4.984.735a2 2 0 0 1 .924.39l.672.514a1 1 0 0 0 1.402-.187l.414-.542a1 1 0 0 0 .082-1.09l-1.444-2.625a1 1 0 0 0-1.232-.452l-.653.249a2 2 0 0 1-1.262.054l-1.948-.557a3 3 0 0 1-1.16-.634l-2.53-2.229a1 1 0 0 0-1.187-.1l-1.55.962a1 1 0 0 0-.438 1.11l.12.444a1 1 0 0 1-.115.784l-.886 1.438a1 1 0 0 1-1.276.38L5.362 7.4a1 1 0 0 0-.659-.067l-2.833.682a.6.6 0 0 0-.419.802l.774 1.973a.6.6 0 0 0 1.043.135l.654-.895a.6.6 0 0 1 .836-.132l.908.657a1 1 0 0 1 .388.584l.676 2.91a1 1 0 0 0 .23.44Z\"/>";

export const Hr = /*#__PURE__*/ defineComponent({
  name: 'GeoHr',
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
