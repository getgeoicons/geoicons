// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.366 14.855-1.124 2.92a.5.5 0 0 0-.022.286l.941 4.34a.5.5 0 0 0 .495.394l.713-.008a.5.5 0 0 0 .329-.127l1.177-1.058a.5.5 0 0 0 .157-.275l.52-2.624a.5.5 0 0 1 .117-.235l1.267-1.42a.5.5 0 0 0-.035-.702l-1.016-.932a.5.5 0 0 1-.152-.469l.384-1.887a.5.5 0 0 1 .135-.252l2.502-2.529a.5.5 0 0 0 .143-.315l.133-1.818a.5.5 0 0 1 .456-.462l1.325-.11-.479-4.004a.5.5 0 0 0-.147-.299L14.368 1.5a.5.5 0 0 0-.65-.04l-2.045 1.55a.5.5 0 0 0-.152.187L9.869 6.76a.5.5 0 0 0-.039.124l-.396 2.261a.5.5 0 0 1-.11.236l-1.232 1.46a.5.5 0 0 0-.114.384l.418 3.389a.5.5 0 0 1-.03.24Z\"/>";

export const Se = /*#__PURE__*/ defineComponent({
  name: 'GeoSe',
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
