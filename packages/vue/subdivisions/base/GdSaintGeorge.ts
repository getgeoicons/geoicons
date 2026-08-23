// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.254 2.348a1 1 0 0 0-.812-.598l-4.93-.53a1 1 0 0 0-.383.034l-1.687.485a1 1 0 0 0-.602.481l-1.767 3.233a1 1 0 0 0 .164 1.18l.82.834a1 1 0 0 1 .18 1.15L10.695 9.7a1 1 0 0 0-.1.565l.473 4.067a1.5 1.5 0 0 1-.632 1.404l-.575.4a1.5 1.5 0 0 1-.838.27l-1.036.014a1 1 0 0 0-.713.313l-.884.934a1 1 0 0 1-.369.247l-3.057 1.171a.786.786 0 0 0 .16 1.512l2.368.368q.195.03.386-.015l.826-.197a1 1 0 0 1 .757.121l2.57 1.585a1 1 0 0 0 1.088-.024l1.649-1.125a1 1 0 0 0 .397-.547l.241-.832a1 1 0 0 1 1.667-.43l1.28 1.276a.6.6 0 0 0 .267.154l1.708.461a.6.6 0 0 0 .722-.377l.264-.74a.6.6 0 0 0-.1-.58L18.15 18.39a3 3 0 0 1-.361-.561l-1.046-2.107a1 1 0 0 1 .278-1.231l.502-.395a1 1 0 0 0 .376-.897l-.3-2.689a1 1 0 0 1 .407-.921l2.144-1.552a1 1 0 0 0 .383-.564l.632-2.497a1 1 0 0 0-.052-.642z\"/>";

export const GdSaintGeorge = /*#__PURE__*/ defineComponent({
  name: 'GeoGdSaintGeorge',
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
