// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.27 11.805H2.222L3.385 13.5a.5.5 0 0 1 .062.441l-.393 1.181a.5.5 0 0 0 .021.37l.587 1.249a.5.5 0 0 1 .047.218l-.016 1.298a.5.5 0 0 1-.03.162l-.45 1.257a.5.5 0 0 0 .593.653l2.094-.523a.5.5 0 0 1 .443.102l3.047 2.56a.5.5 0 0 0 .715-.073l.477-.608a.5.5 0 0 1 .624-.134l.799.417a.5.5 0 0 0 .34.044l1.863-.414a.5.5 0 0 1 .112-.012l5.995.047a.5.5 0 0 0 .471-.321l.231-.605a.5.5 0 0 0-.139-.556l-.437-.38a.5.5 0 0 1-.169-.325L18.779 5.541h2.999L15.468 1.2l.071 2.024a.5.5 0 0 1-.508.518l-4.33-.072a.5.5 0 0 0-.508.505l.036 3.658a.5.5 0 0 1-.263.446l-1.29.692a.5.5 0 0 0-.262.465l.105 2.107a.25.25 0 0 1-.25.262Z\"/>";

export const Mr = /*#__PURE__*/ defineComponent({
  name: 'GeoMr',
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
