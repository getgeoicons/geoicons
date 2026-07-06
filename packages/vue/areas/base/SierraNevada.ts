// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.946 1.2v8.894a1 1 0 0 0 .373.779l3.563 2.869a1 1 0 0 1 .308.424l1.437 3.784a1 1 0 0 1 .06.45l-.233 2.482a1 1 0 0 1-.066.272l-.357.907a1 1 0 0 1-1.077.623l-.25-.038a1 1 0 0 1-.665-.404l-.55-.765a1 1 0 0 1-.187-.534l-.076-1.516a1 1 0 0 0-.242-.604L9.56 13.704a1 1 0 0 1-.206-.384L8.23 9.307a1 1 0 0 0-.174-.344L6.513 6.98a1 1 0 0 1-.21-.648l.033-.956a1 1 0 0 1 .128-.457l.225-.398a1 1 0 0 1 .871-.509h1.037l.073-1.693L10.33 1.2z\"/>";

export const SierraNevada = /*#__PURE__*/ defineComponent({
  name: 'GeoSierraNevada',
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
