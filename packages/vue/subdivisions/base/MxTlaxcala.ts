// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.506 7.908a1 1 0 0 0-.562.353l-.344.432a1 1 0 0 0-.11 1.075l.47.926a1 1 0 0 0 .849.547l1.565.066a1 1 0 0 1 .806.47l3.032 4.86a2 2 0 0 0 .942.793l2.204.899a1 1 0 0 0 1.082-.217l1.568-1.558a1 1 0 0 1 1.264-.12l.673.454a1 1 0 0 0 1.357-.225l1.176-1.555a1 1 0 0 1 .868-.394l1.667.117a1 1 0 0 0 .802-.317l.288-.31a1 1 0 0 0-.069-1.429l-1.967-1.745a1 1 0 0 0-.816-.24l-.713.109a.83.83 0 0 1-.956-.827l.006-.802a1 1 0 0 0-.365-.78l-2.86-2.354a1 1 0 0 0-.831-.208l-1.797.358a1 1 0 0 1-.532-.04l-1.627-.582a.8.8 0 0 0-.992.41L8.023 7.25a1 1 0 0 1-1.005.565l-2.327-.24a3 3 0 0 0-.97.058z\"/>";

export const MxTlaxcala = /*#__PURE__*/ defineComponent({
  name: 'GeoMxTlaxcala',
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
