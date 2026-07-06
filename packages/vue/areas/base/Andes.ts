// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.685 4.253 1.42-2.104a.6.6 0 0 0-.536-.935l-1.917.127a1 1 0 0 0-.934.998v.61a1 1 0 0 1-.211.615l-1.015 1.3a1 1 0 0 0-.212.627l.023 2.137a1 1 0 0 0 .15.514l2.12 3.44a1 1 0 0 0 .251.275l1.046.786a1 1 0 0 1 .23.241l.5.744a1 1 0 0 1 .167.485l.331 4.473-.102 1.554a1 1 0 0 0 .04.352l.501 1.674a.73.73 0 0 0 1.33.156l.215-.372a1 1 0 0 0 .129-.61l-.15-1.368a1 1 0 0 1 .003-.237l.634-4.893a1 1 0 0 0-.025-.385l-.406-1.53a1 1 0 0 0-.216-.406l-1.753-1.989a1 1 0 0 0-.383-.269l-.956-.377a1 1 0 0 1-.506-.441l-1.21-2.161a1 1 0 0 1-.104-.705l.16-.727a1 1 0 0 1 .282-.505l.97-.934q.075-.073.134-.16Z\"/>";

export const Andes = /*#__PURE__*/ defineComponent({
  name: 'GeoAndes',
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
