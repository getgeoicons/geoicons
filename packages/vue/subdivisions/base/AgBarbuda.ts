// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.055 1.54a.6.6 0 0 0-.657-.217l-1.8.548a3 3 0 0 0-1.327.831L3.53 4.583a.538.538 0 0 0 .094.813 9 9 0 0 1 3.04 3.477l.026.05c.492.998.799 2.078.905 3.185l.004.037a9.4 9.4 0 0 1-.357 3.607l-.584 1.938a.635.635 0 0 0 .967.707l1.298-.89a2.58 2.58 0 0 1 3.16.19l1.05.922a3 3 0 0 0 1.154.63l.465.134a2.49 2.49 0 0 1 1.757 1.918l.172.887a.3.3 0 0 0 .3.243l3.413-.06a.3.3 0 0 0 .292-.341l-.471-3.37a4 4 0 0 1 .03-1.295l.246-1.299a4 4 0 0 0-.076-1.808l-.612-2.21a4 4 0 0 0-.826-1.545L14.06 4.804a1 1 0 0 0-.64-.34l-1.982-.233a1 1 0 0 1-.688-.398z\"/>";

export const AgBarbuda = /*#__PURE__*/ defineComponent({
  name: 'GeoAgBarbuda',
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
