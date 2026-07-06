// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.152 6.05.796-4.216a.5.5 0 0 1 .534-.406l4.998.431a.5.5 0 0 0 .093 0l6.497-.65a.5.5 0 0 1 .174.013l3.683.94a.5.5 0 0 1 .292.762l-2.18 3.271a.5.5 0 0 0-.085.266l-.087 3.576a.5.5 0 0 0 .089.297l2.299 3.32a.5.5 0 0 1 .039.504l-2.749 5.663a.5.5 0 0 1-.727.198l-1.645-1.097a.5.5 0 0 0-.333-.08l-4.606.512a.5.5 0 0 0-.423.642l.595 1.96a.5.5 0 0 1-.6.63l-3.449-.862a.5.5 0 0 1-.339-.29L5.295 15.02a.5.5 0 0 0-.412-.302l-1.436-.137a.5.5 0 0 1-.386-.248l-1.578-2.74a.5.5 0 0 1-.058-.346l.807-4.15a.5.5 0 0 1 .433-.402l2.055-.242a.5.5 0 0 0 .432-.404Z\"/>";

export const Sr = /*#__PURE__*/ defineComponent({
  name: 'GeoSr',
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
