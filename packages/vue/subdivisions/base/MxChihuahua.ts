// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.743 11.301a.3.3 0 0 0-.105-.39l-3.08-1.964a2 2 0 0 1-.83-1.078l-.62-1.937a2 2 0 0 0-.599-.906L11.373 1.46a1 1 0 0 0-.65-.243l-4.536-.016a.3.3 0 0 0-.301.3v1.012a.3.3 0 0 1-.305.3L4.323 2.79a.6.6 0 0 0-.604.51l-.158 1.043a1 1 0 0 0 .238.81l.612.697a1 1 0 0 1 .244.77l-.346 3.143a3 3 0 0 0 .092 1.133l.483 1.732a.6.6 0 0 1-.476.753l-.57.098a.6.6 0 0 0-.46.797l1.104 3.028a1 1 0 0 0 .458.534l1.202.661a1 1 0 0 1 .462.547l.419 1.2a1.5 1.5 0 0 0 .485.683l1.945 1.54a1 1 0 0 0 .924.168l.081-.026a1 1 0 0 0 .66-.686l.717-2.59a1 1 0 0 1 1.307-.671L16.52 19.9a1 1 0 0 0 .81-.054l1.621-.854a1 1 0 0 0 .526-1.014l-.359-2.748a2 2 0 0 1 .206-1.176z\"/>";

export const MxChihuahua = /*#__PURE__*/ defineComponent({
  name: 'GeoMxChihuahua',
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
