// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.798 1.522a1 1 0 0 0-.569.178l-.486.336a1 1 0 0 1-.74.162L2.07 1.862a.55.55 0 0 0-.439.97l4.754 3.822a1 1 0 0 0 .767.21l1.075-.151a1.5 1.5 0 0 1 1.213.37l1.757 1.582a4.45 4.45 0 0 1 1.458 3.642l-.007.089a5 5 0 0 1-.273 1.276l-.19.524a1 1 0 0 0 .414 1.188l2.88 1.789q.697.434 1.324.967l2.408 2.05a2 2 0 0 1 .577.822l.358.959a.7.7 0 0 0 1.085.31l1.152-.888a1 1 0 0 0 .39-.844l-.03-.561a1 1 0 0 0-.236-.596l-2.13-2.511a1 1 0 0 0-.68-.35l-.719-.06a1 1 0 0 1-.916-.983l-.017-1.277a1 1 0 0 0-.151-.514l-1.756-2.821a3 3 0 0 1-.39-.973l-.318-1.527a3 3 0 0 0-.586-1.252L10.7 1.9a1 1 0 0 0-.784-.379z\"/>";

export const MxBajaCaliforniaSur = /*#__PURE__*/ defineComponent({
  name: 'GeoMxBajaCaliforniaSur',
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
