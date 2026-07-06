// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.374 20.859H1.2l4.47-2.485a.5.5 0 0 0 .18-.17l1.58-2.499a.5.5 0 0 0 .06-.397l-.465-1.73a.5.5 0 0 1 .044-.369l2.06-3.78a.5.5 0 0 1 .238-.218l2.749-1.201a.5.5 0 0 0 .268-.285l1.41-3.803a.5.5 0 0 1 .279-.289l.787-.324a.5.5 0 0 1 .624.214l.71 1.242a.5.5 0 0 0 .422.251l4.47.107a.5.5 0 0 1 .478.403l1.116 5.632a.5.5 0 0 1-.497.597l-2.279-.03a.5.5 0 0 0-.264.07l-1.073.645a.5.5 0 0 0-.24.475l.112 1.213a.5.5 0 0 1-.183.435l-3.148 2.549a.5.5 0 0 1-.335.11l-2.631-.11a.5.5 0 0 0-.265.062l-2.263 1.26a.5.5 0 0 0-.257.441z\"/>";

export const Ma = /*#__PURE__*/ defineComponent({
  name: 'GeoMa',
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
