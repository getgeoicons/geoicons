// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.41 3.454.132 1.078a1 1 0 0 0 .723.841l1.152.323a1 1 0 0 1 .559.403l2.75 4.07q.088.13.132.28l1.299 4.453a1 1 0 0 1 .04.256l.116 4.734a1 1 0 0 0 .262.65l1.624 1.775a1 1 0 0 0 1.061.271l1.929-.66a1 1 0 0 0 .675-1l-.12-2.23a1 1 0 0 1 .05-.375l.774-2.282a1 1 0 0 0 .049-.406l-.402-4.718a3 3 0 0 0-.343-1.157l-1.497-2.807a3 3 0 0 0-.72-.888l-4.242-3.551a3 3 0 0 0-1.355-.646l-2.79-.54a1 1 0 0 0-1.026.43l-.674 1.025a1 1 0 0 0-.158.671Z\"/>";

export const Altiplano = /*#__PURE__*/ defineComponent({
  name: 'GeoAltiplano',
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
