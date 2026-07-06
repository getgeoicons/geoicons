// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.467 20.561-3.953 2.093a.5.5 0 0 1-.528-.037l-2.292-1.664a.5.5 0 0 1-.18-.243l-.976-2.863a.5.5 0 0 1 .036-.402l1.484-2.696a.5.5 0 0 0-.127-.632l-1.228-.977a.5.5 0 0 1-.18-.485l.272-1.424a.5.5 0 0 0-.484-.594l-1.814-.025a.5.5 0 0 1-.373-.175L4.709 8.782a.5.5 0 0 1-.11-.427l.302-1.45a.5.5 0 0 1 .285-.355l2.12-.95a.5.5 0 0 0 .229-.705l-.678-1.187a.5.5 0 0 1 .135-.65l2.196-1.632a.5.5 0 0 1 .604.005l3.016 2.325a.5.5 0 0 1 .195.404l-.025 1.546a.5.5 0 0 0 .464.507l1.403.1a.5.5 0 0 1 .304.132l1.768 1.643a.5.5 0 0 1 .154.436l-.324 2.327a.5.5 0 0 1-.337.405l-1.315.438a.5.5 0 0 0-.326.35l-.505 1.961a.5.5 0 0 0 .046.365l.862 1.576a.5.5 0 0 0 .315.245l1.17.299a.5.5 0 0 1 .3.22l1.97 3.165a.5.5 0 0 1-.462.762l-1.726-.132a.5.5 0 0 0-.272.056Z\"/>";

export const Gy = /*#__PURE__*/ defineComponent({
  name: 'GeoGy',
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
