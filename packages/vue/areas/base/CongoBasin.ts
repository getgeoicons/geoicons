// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.353 17.023-2.55.218-2.6-3.414a1 1 0 0 1-.159-.907l.722-2.286a1 1 0 0 0-.36-1.107l-.466-.343a1 1 0 0 1-.294-1.268l.417-.798a1 1 0 0 1 .887-.538h.678a1 1 0 0 0 .948-.683L7 1.641a.581.581 0 0 1 1.13.125l.333 3.294a1 1 0 0 0 1.241.869l1.135-.288a1 1 0 0 0 .438-.239l2.392-2.238a.848.848 0 0 1 1.368.307l.527 1.332q.067.167.186.3l2.446 2.728a1 1 0 0 0 .552.314l1.57.308a1 1 0 0 1 .632.418l.486.711a1 1 0 0 1 .088.97l-1.156 2.602a1 1 0 0 0-.085.355l-.157 3.06a1 1 0 0 0 .145.572l.722 1.18a.6.6 0 0 1-.133.777l-.893.73a1 1 0 0 0-.366.717l-.129 2.255-5.558-1.185-.274-3.371-3.024.716a.6.6 0 0 1-.66-.289l-.647-1.144a1 1 0 0 0-.956-.504Z\"/>";

export const CongoBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoCongoBasin',
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
