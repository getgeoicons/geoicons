// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.445 17.697a1 1 0 0 0 .578.135l1.052-.077a.593.593 0 0 0 .401-.983l-.921-1.045a1 1 0 0 0-.358-.258l-2.096-.896a1 1 0 0 1-.603-.823l-.156-1.613a2 2 0 0 0-.203-.703l-1.682-3.36a2 2 0 0 1-.135-1.445l.186-.65a1 1 0 0 0-.105-.791l-1.096-1.815a1 1 0 0 0-.995-.473l-.017.002a1 1 0 0 0-.695.436l-1.567 2.356a3 3 0 0 1-1.519 1.174L6.162 8.37a3 3 0 0 1-1.634.092l-1.694-.379a.6.6 0 0 0-.72.474l-.815 4.303a.6.6 0 0 0 .407.683l1.108.354a1 1 0 0 1 .514.378l1.755 2.501a1 1 0 0 0 .753.424l.762.05a2 2 0 0 1 1.229.528l3.314 3.069a.6.6 0 0 0 .773.035l4.73-3.633a1.5 1.5 0 0 1 .965-.31l1.132.04a2 2 0 0 1 .942.272z\"/>";

export const NiChontales = /*#__PURE__*/ defineComponent({
  name: 'GeoNiChontales',
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
