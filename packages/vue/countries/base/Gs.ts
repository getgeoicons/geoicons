// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.86 6.263-6.53-1.54-.082-.012-3.717-.24-.086.001-2.245.242v.206a.5.5 0 0 0 .342.474l2.46.819a.5.5 0 0 1 .301.275l.463 1.065a.5.5 0 0 0 .249.254l2.218 1.024a.5.5 0 0 0 .12.038l2.254.405a.5.5 0 0 1 .235.11l3.172 2.693q.053.046.118.075l2.424 1.097a.5.5 0 0 1 .229.209l2.032 3.585a.5.5 0 0 0 .053.076l1.76 2.081a.5.5 0 0 0 .65.1l2.166-1.365a.5.5 0 0 0 .196-.612l-1.33-3.269a.5.5 0 0 0-.047-.09l-3.37-5.023a.5.5 0 0 0-.14-.139l-3.734-2.47a.5.5 0 0 0-.161-.07Z\"/>";

export const Gs = /*#__PURE__*/ defineComponent({
  name: 'GeoGs',
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
