// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.159 16.818.754 2.306a.5.5 0 0 0 .118.195l1.245 1.272a.5.5 0 0 0 .358.15h2.374a.5.5 0 0 1 .262.074l3.028 1.86a.5.5 0 0 0 .43.045l1.876-.668a.5.5 0 0 1 .31-.009l2.34.697a.5.5 0 0 0 .384-.04l3.837-2.109a.5.5 0 0 0 .21-.222l1.292-2.694a.5.5 0 0 0 .04-.316l-.497-2.454a.5.5 0 0 1 .073-.375l1.09-1.648a.5.5 0 0 0-.058-.624L16.88 7.37a.5.5 0 0 0-.177-.118l-2.37-.92a.5.5 0 0 1-.243-.2l-.813-1.291a.5.5 0 0 0-.722-.135l-.628.468a.5.5 0 0 1-.689-.088L8.332 1.458a.5.5 0 0 0-.525-.17l-2.524.706a.5.5 0 0 0-.348.35L3.145 8.92a.5.5 0 0 0-.017.156l.243 4.86a.5.5 0 0 1-.053.25l-1.13 2.252a.5.5 0 0 0-.03.38Z\"/>";

export const Uy = /*#__PURE__*/ defineComponent({
  name: 'GeoUy',
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
