// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.201 22.798a.6.6 0 0 0 .556-.829l-.382-.927a.6.6 0 0 0-.63-.367l-1.136.144a.6.6 0 0 1-.654-.436l-.123-.446a1 1 0 0 0-.516-.628l-.916-.459a1 1 0 0 1-.526-.668l-.643-2.768a1 1 0 0 0-.302-.514l-1.902-1.725a.6.6 0 0 1-.19-.532l.174-1.189a.8.8 0 0 0-.327-.767l-.69-.493a.6.6 0 0 1-.25-.457l-.08-1.503a.3.3 0 0 0-.299-.284H8.742a.3.3 0 0 1-.3-.281l-.254-4.112a.6.6 0 0 0-.252-.453L6.16 1.85a2 2 0 0 0-.738-.324l-1.16-.248a.3.3 0 0 0-.363.294l.01 20.426a.3.3 0 0 0 .214.287l1.524.457a.6.6 0 0 0 .17.025z\"/>";

export const CaYukon = /*#__PURE__*/ defineComponent({
  name: 'GeoCaYukon',
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
