// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.958 6.521-1.155-1.59a.5.5 0 0 1-.095-.31l.035-1.062a.5.5 0 0 1 .078-.252l.825-1.3a.5.5 0 0 1 .3-.216l2.161-.547a.5.5 0 0 1 .334.03l2.114.982a.5.5 0 0 1 .1.061l2.3 1.818a.5.5 0 0 1 .078.075l2.06 2.516q.036.045.062.098l1.45 2.988a.5.5 0 0 0 .127.163l1.669 1.419q.077.065.174.096l1.217.382a.5.5 0 0 1 .322.311l.223.637a.5.5 0 0 1-.12.521l-1.69 1.665a.5.5 0 0 1-.474.129l-.393-.1a.5.5 0 0 1-.363-.369l-.215-.902a.5.5 0 0 1-.01-.166l.1-.98a.5.5 0 0 0-.191-.446l-2.64-2.05a.5.5 0 0 0-.316-.105l-2.313.04a.5.5 0 0 1-.163-.024l-1.684-.547a.5.5 0 0 1-.25-.183L6 8.453a.5.5 0 0 0-.21-.168L4.4 7.697a.5.5 0 0 1-.12-.073l-1.235-1.01a.5.5 0 0 1-.088-.093Zm13.175 10.925-.341 2.246a1 1 0 0 0 .055.508l.424 1.106a1 1 0 0 0 .166.282l.535.642a1 1 0 0 0 .49.32l.57.165a1 1 0 0 0 .583-.008l2.46-.79a1 1 0 0 0 .661-.699l.505-1.932a1 1 0 0 0 .016-.435l-.35-1.893a1 1 0 0 0-.341-.584l-1.474-1.236a1 1 0 0 0-.682-.233l-1.314.05a1 1 0 0 0-.812.474L16.27 17.07c-.07.115-.117.243-.137.376Z\"/>";

export const Kn = /*#__PURE__*/ defineComponent({
  name: 'GeoKn',
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
