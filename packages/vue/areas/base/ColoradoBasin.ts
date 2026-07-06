// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.386 6.257-.936 4.429a1 1 0 0 1-1.15.778l-.844-.147a1 1 0 0 1-.444-.198l-1.006-.787a.6.6 0 0 0-.923.242l-1.078 2.583a1 1 0 0 0 .008.788l.936 2.123a1 1 0 0 1-.079.951l-.477.729a1 1 0 0 0-.006 1.087l.58.906a1 1 0 0 0 .481.393l1.601.62a1 1 0 0 0 1.056-.213l.039-.038a1 1 0 0 1 1.34-.044l.014.011a1 1 0 0 1 .353.704l.003.052a1 1 0 0 0 .615.864l1.041.432a.67.67 0 0 0 .828-.97l-.471-.764a.897.897 0 0 1 1.501-.982l.687.99a.6.6 0 0 0 1.078-.208l.427-1.862a.6.6 0 0 0-.244-.628l-.379-.262a1 1 0 0 1-.432-.828l.007-1.287a1 1 0 0 1 .362-.766l1.26-1.042a1 1 0 0 0 .353-.64l.097-.741a1 1 0 0 0-.181-.716l-.244-.337a1 1 0 0 1 .113-1.304l.599-.581q.148-.144.227-.334l.784-1.889a1 1 0 0 0-.271-1.141l-2.036-1.752a1 1 0 0 0-.615-.242l-.909-.033a1 1 0 0 1-.812-.471l-.964-1.55a.948.948 0 0 0-1.751.469l-.117 3.433a1 1 0 0 1-.02.173Z\"/>";

export const ColoradoBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoColoradoBasin',
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
