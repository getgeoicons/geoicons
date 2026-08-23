// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.645 19.302a2 2 0 0 0 1.04.22l1.508-.09q.287-.018.557-.115l4.376-1.575a.6.6 0 0 0 .317-.864l-1.306-2.271a.6.6 0 0 0-.584-.297l-1.536.164a1 1 0 0 1-.972-.493l-1.165-2.01a1 1 0 0 0-.694-.484l-1.328-.23a1 1 0 0 1-.63-.387l-2.373-3.177a1 1 0 0 1-.188-.45L11.46 5.86a.6.6 0 0 0-.562-.51l-.449-.024a.6.6 0 0 0-.53.264l-.634.945a.6.6 0 0 1-.743.213l-4.696-2.1A.668.668 0 0 0 3.17 5.79l2.74 2.09a1 1 0 0 1 .35 1.09l-.202.653a2 2 0 0 1-.57.894l-3.542 3.2a1 1 0 0 0-.315.57l-.32 1.833a.6.6 0 0 0 .53.7l1.009.102a1 1 0 0 0 .535-.095l1.22-.59c.206-.1.428-.164.656-.188l4.649-.504a3 3 0 0 1 .989.057l1.51.344a1 1 0 0 1 .778.937l.043 1.116a1 1 0 0 0 .539.85z\"/>";

export const SvChalatenango = /*#__PURE__*/ defineComponent({
  name: 'GeoSvChalatenango',
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
