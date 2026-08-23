// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.045 22.649a.3.3 0 0 0 .545.047l1.832-3.28a1 1 0 0 1 .603-.475l1.814-.51a1 1 0 0 0 .568-.417l.433-.666a1 1 0 0 1 .915-.452l1.732.133a1 1 0 0 0 .6-.145l3.055-1.876a1 1 0 0 0 .295-1.427l-2.26-3.215a1 1 0 0 1-.182-.57l-.034-5.76a1 1 0 0 0-.312-.72l-.641-.608a1 1 0 0 0-1.18-.145l-.854.483a.6.6 0 0 1-.875-.367l-.131-.49a.6.6 0 0 0-.467-.433l-.02-.004a.6.6 0 0 0-.613.258L8.173 6.086a1 1 0 0 0-.151.378L7.4 9.992a1 1 0 0 1-.345.595l-1.88 1.567a.6.6 0 0 0-.216.48l.238 7.321q.01.307.111.598z\"/>";

export const UsMaine = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMaine',
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
