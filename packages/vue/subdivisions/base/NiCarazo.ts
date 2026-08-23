// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.49 12.607a1 1 0 0 0 .398.68l2.167 1.6q.218.161.403.358l1.833 1.95c.287.305.62.563.986.764l3.482 1.917 3.435 2.542a.6.6 0 0 0 .862-.159l2.472-3.861a1 1 0 0 0 .085-.915l-.696-1.716a3 3 0 0 1-.212-1.341l.022-.302a1 1 0 0 1 .844-.917l.637-.099a.6.6 0 0 0 .508-.591l.011-5.075a.6.6 0 0 0-.504-.594l-2.239-.362a1 1 0 0 1-.832-.86l-.28-2.175a1 1 0 0 0-.736-.84l-5.003-1.317a.6.6 0 0 0-.601.182l-1.49 1.68a4 4 0 0 0-.643.988L6.495 8.299a2 2 0 0 1-.68.812L3.77 10.526a1 1 0 0 0-.423.948z\"/>";

export const NiCarazo = /*#__PURE__*/ defineComponent({
  name: 'GeoNiCarazo',
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
