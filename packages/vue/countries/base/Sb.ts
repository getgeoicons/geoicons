// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" stroke-opacity=\".99\" d=\"M5.91 11.235 2.002 7.98a.858.858 0 0 1 .959-1.412L7.43 8.994a1.36 1.36 0 1 1-1.52 2.241Zm6.467-1.102L8.431 7.059a.759.759 0 0 1 .872-1.24L13.53 8.49a1.005 1.005 0 1 1-1.154 1.642Zm3.61 5.096-2.795-.926a.966.966 0 1 1 .66-1.816l2.737 1.085a.882.882 0 0 1-.602 1.657Zm2.654-1.633-2.17-2.713a.76.76 0 1 1 1.2-.935l2.099 2.768a.716.716 0 0 1-1.129.88Zm2.678 4.706-2.096-1.285a.747.747 0 0 1 .757-1.287l2.142 1.205a.793.793 0 1 1-.803 1.367Zm-6.113 3.045-1.52-.903a.68.68 0 0 1 .682-1.18l1.541.864a.704.704 0 1 1-.703 1.219ZM6.272 5.226 2.75 2.79a.798.798 0 1 0-.858 1.344l3.69 2.173a.642.642 0 0 0 .691-1.081Z\"/>";

export const Sb = /*#__PURE__*/ defineComponent({
  name: 'GeoSb',
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
