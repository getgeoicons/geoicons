// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.483 13.265-.697 1.479a.5.5 0 0 1-.339.274l-3.872.899a.5.5 0 0 1-.214.003l-3.336-.686a.5.5 0 0 0-.151-.008l-1.761.178a.5.5 0 0 1-.101 0l-1.709-.175a.5.5 0 0 0-.208.023l-1.912.638a.5.5 0 0 1-.313 0l-1.364-.443a.5.5 0 0 0-.237-.018l-2.177.362.551-3.308a.5.5 0 0 0-.078-.362L1.2 10.099l.991-.406a.56.56 0 0 0 .333-.453c.04-.295.139-.712.376-.912.32-.27.622-.238 1.04-.269.618-.045 1.477.308 1.782.445a.54.54 0 0 0 .24.048l6.118-.224 5.827.534a.5.5 0 0 1 .15.038l2.38 1.016a.5.5 0 0 0 .263.036l1.742-.232.301 2.036a.5.5 0 0 1-.297.533l-1.707.73a.5.5 0 0 0-.256.247Z\"/>";

export const Pr = /*#__PURE__*/ defineComponent({
  name: 'GeoPr',
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
