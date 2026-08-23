// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.797 22.371c-2.775-2.093-4.751-5.96-5.656-8.317a.955.955 0 0 1 .532-1.216l.6-.258a2 2 0 0 0 1.039-1.027l.559-1.26A.923.923 0 0 0 6.546 9.13l-.588.358a.6.6 0 0 1-.889-.344l-.74-2.536a2 2 0 0 1-.005-1.107l.156-.55a1 1 0 0 1 .848-.72l2.046-.235a1 1 0 0 0 .738-.47l1.056-1.72a.6.6 0 0 1 .907-.137l2.953 2.587a.6.6 0 0 1-.01.911l-1.474 1.238a1 1 0 0 0-.187 1.324l3.164 4.713a1 1 0 0 0 1.399.265l1.78-1.23a.6.6 0 0 1 .892.253l.995 2.284a.6.6 0 0 1-.326.795l-1.056.427a2 2 0 0 0-.96.817l-1.628 2.681a.6.6 0 0 1-.894.153l-.85-.698a.6.6 0 0 0-.947.267l-1.261 3.631c-.127.365-.56.517-.868.284Z\"/>";

export const PaDarien = /*#__PURE__*/ defineComponent({
  name: 'GeoPaDarien',
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
