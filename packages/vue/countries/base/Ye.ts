// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.39 8.606-.936 2.088a.5.5 0 0 0-.04.143l-.202 1.603a.5.5 0 0 0 .014.195l1.587 5.788a.5.5 0 0 0 .482.368h2.111a.5.5 0 0 0 .347-.14l1.273-1.23a.5.5 0 0 1 .347-.14h2.014a.5.5 0 0 0 .195-.039l10.93-4.62a.5.5 0 0 0 .271-.281l.431-1.122a.5.5 0 0 1 .257-.274l1.329-.616-2.264-5.12-6.006.798a.5.5 0 0 0-.158.048l-1.749.875a.5.5 0 0 0-.19.166l-1.577 2.322a.5.5 0 0 1-.707.125l-.825-.597a.5.5 0 0 0-.249-.093l-6.185-.54a.5.5 0 0 0-.5.293Z\"/>";

export const Ye = /*#__PURE__*/ defineComponent({
  name: 'GeoYe',
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
