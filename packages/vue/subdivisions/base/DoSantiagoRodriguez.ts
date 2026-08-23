// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.93 2.606a1 1 0 0 0-.898.388L4.282 5.29a2 2 0 0 0-.392.954l-.855 6.56a1 1 0 0 1-.455.715l-.913.582a.8.8 0 0 0-.353.84l.537 2.55a.8.8 0 0 0 .575.609l2.782.747c.314.085.613.22.885.401l4.488 2.992a1 1 0 0 0 .605.167l3.993-.203a.6.6 0 0 0 .52-.837l-1.368-3.158a2 2 0 0 1-.162-.887l.11-2.376a2 2 0 0 1 .326-1.006l.863-1.312a2 2 0 0 1 .915-.753l.437-.178a2 2 0 0 1 1.468-.017l.374.143a1 1 0 0 0 .954-.132l2.703-2.014a1 1 0 0 0 .392-.95l-.166-1.11a1 1 0 0 0-.935-.85l-3.011-.162a1 1 0 0 1-.935-.852l-.287-1.925a.6.6 0 0 0-.276-.42l-.725-.452a.6.6 0 0 0-.823.187l-.164.256a.8.8 0 0 1-1.057.273l-3.19-1.735a.8.8 0 0 0-1.061.28l-.154.247a.8.8 0 0 1-.762.373z\"/>";

export const DoSantiagoRodriguez = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSantiagoRodriguez',
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
