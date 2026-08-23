// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.276 8.778a.6.6 0 0 0 .407.661l1.07.35a.6.6 0 0 1 .396.421l.557 2.181a1 1 0 0 1-.044.628L2.27 16.401a1 1 0 0 0-.06.55l.072.421a.6.6 0 0 0 .818.454l1.063-.434a.6.6 0 0 1 .802.384l.377 1.268a.6.6 0 0 0 .878.347l1.311-.768a.6.6 0 0 1 .623.01l.885.558a1 1 0 0 1 .416 1.162l-.344 1.031a.6.6 0 0 0 .733.767l2.455-.693a1 1 0 0 1 .742.08l1.248.664a.6.6 0 0 0 .879-.462l.18-1.572a1 1 0 0 1 .262-.57l3.02-3.227a1 1 0 0 1 .806-.314l1.768.136a1 1 0 0 0 1.07-.878l.483-4.038a1 1 0 0 0-.151-.659L19.97 6.516a1 1 0 0 1-.155-.455l-.075-.886a1 1 0 0 1 .359-.855l.965-.8a1 1 0 0 0 .242-1.245l-.137-.254a1 1 0 0 0-.754-.517l-.329-.041a1 1 0 0 0-.965.45l-.863 1.334a1 1 0 0 1-.852.458l-6.257-.076a1 1 0 0 0-.59.184L9.098 4.849a1 1 0 0 1-.632.182l-4.784-.26a1 1 0 0 0-.707.241l-1.016.877a1 1 0 0 0-.336.607z\"/>";

export const GtChiquimula = /*#__PURE__*/ defineComponent({
  name: 'GeoGtChiquimula',
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
