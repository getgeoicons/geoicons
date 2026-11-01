// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.967 22.61 6.058-2.857a2 2 0 0 1 .993-.186l1.534.107a1 1 0 0 0 .716-.235l.926-.784a.6.6 0 0 0 .01-.907l-1.76-1.562a1 1 0 0 1-.33-.851l.423-4.04a2 2 0 0 0-.21-1.122l-.426-.83a2 2 0 0 1-.22-.91l-.008-3.592a1 1 0 0 0-.449-.832l-.764-.505a.6.6 0 0 1-.244-.674l.18-.597a.6.6 0 0 0-.385-.743l-.612-.203a.6.6 0 0 0-.5.056l-.85.515a1 1 0 0 1-.55.144l-6.25-.21a.6.6 0 0 0-.514.258l-.356.513a.6.6 0 0 0-.1.44l1.24 7.496c.07.424 0 .857-.191 1.241a243 243 0 0 0-1.74 3.576c-.2.42-.247.899-.131 1.35l1.14 4.468a1 1 0 0 0 .586.676l1.974.82a1 1 0 0 0 .81-.02Z\"/>";

export const Gh = /*#__PURE__*/ defineComponent({
  name: 'GeoGh',
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
