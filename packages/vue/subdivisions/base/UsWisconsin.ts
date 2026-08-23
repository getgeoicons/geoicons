// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.02 7.134a1 1 0 0 0-.64-.68L9.022 3.607a.6.6 0 0 1-.391-.705l.162-.691a.6.6 0 0 0-.757-.712L3.934 2.731a.6.6 0 0 0-.427.583l.032 2.124a1 1 0 0 1-.265.693L1.87 7.655a1 1 0 0 0-.263.733l.192 3.445a1 1 0 0 0 .378.729l4.197 3.322a1 1 0 0 1 .368.636l.653 4.376a1 1 0 0 0 .325.6L8.851 22.5a1 1 0 0 0 .658.252l9.239.046a.3.3 0 0 0 .3-.333l-.326-2.9c-.036-.327.009-.66.131-.966l3.383-8.441a.664.664 0 0 0-1.166-.621l-2.44 3.585a.699.699 0 0 1-1.218-.675l1.133-2.58a1 1 0 0 0 .048-.67z\"/>";

export const UsWisconsin = /*#__PURE__*/ defineComponent({
  name: 'GeoUsWisconsin',
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
