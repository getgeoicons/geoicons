// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.56 18.859-2.55 1.32a.5.5 0 0 1-.73-.461l.035-.99a.5.5 0 0 0-.124-.347l-.654-.747a.5.5 0 0 1 .056-.714l1.282-1.067a.5.5 0 0 0 .162-.518l-.895-3.239a.5.5 0 0 1 .374-.621l3.975-.874a.5.5 0 0 0 .392-.459l.116-1.965a.5.5 0 0 1 .282-.42l1.389-.673a.5.5 0 0 0 .281-.424l.087-1.65a.5.5 0 0 1 .424-.468l1.432-.217a.5.5 0 0 0 .33-.202l.735-1.02a.5.5 0 0 1 .644-.148l2.384 1.288a.5.5 0 0 0 .32.054l1.653-.278a.5.5 0 0 1 .378.09l1.19.87a.5.5 0 0 1 .199.485l-.452 2.73a.5.5 0 0 0 .128.423l4.083 4.377a.5.5 0 0 1 .004.677l-.758.835a.5.5 0 0 1-.421.16l-1.376-.14a.5.5 0 0 0-.522.664l.914 2.577a.5.5 0 0 1-.347.651l-1.553.398a.5.5 0 0 0-.372.424l-.181 1.476a.5.5 0 0 1-.597.429L5.89 18.813a.5.5 0 0 0-.33.046Z\"/>";

export const By = /*#__PURE__*/ defineComponent({
  name: 'GeoBy',
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
