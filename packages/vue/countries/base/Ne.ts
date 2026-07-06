// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.746 17.954 6.3 19.865a.5.5 0 0 1-.597.374l-.948-.215a.5.5 0 0 1-.276-.17l-2.7-3.275a.5.5 0 0 1 .324-.815l3.508-.435a.5.5 0 0 0 .394-.29l.863-1.906a.5.5 0 0 0 .044-.207V9.9l2.019-.42a.5.5 0 0 0 .237-.121l2.04-1.88a.5.5 0 0 1 .071-.055l5.703-3.625a.5.5 0 0 1 .479-.031L19.898 4.9a.5.5 0 0 0 .393.013l1.101-.431.186 1.923a.5.5 0 0 0 .096.25L22.8 8.172l-.535 1.168a.5.5 0 0 0-.044.19l-.14 3.679a.5.5 0 0 1-.111.296l-3.777 4.647a.5.5 0 0 1-.488.175l-1.83-.373a.5.5 0 0 0-.335.05l-1.163.623a.5.5 0 0 1-.317.053l-6.747-1.106a.5.5 0 0 0-.567.38Z\"/>";

export const Ne = /*#__PURE__*/ defineComponent({
  name: 'GeoNe',
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
