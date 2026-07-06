// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.101 9.758 2.764 21.374a.5.5 0 0 0 .398.59l4.174.783a.5.5 0 0 0 .471-.165l2.613-3.037a.5.5 0 0 1 .291-.166l2.65-.47a.5.5 0 0 0 .385-.328l.473-1.359a.5.5 0 0 1 .224-.27l.96-.549a.5.5 0 0 0 .128-.764l-3.892-4.427 8.409-2.286a.5.5 0 0 0 .244-.153l.862-.98a.5.5 0 0 0 .104-.472l-1.625-5.482a.5.5 0 0 0-.75-.279L10.887 6.7a.5.5 0 0 1-.333.075l-1.587-.203a.5.5 0 0 1-.312-.164L7.29 4.863a.5.5 0 0 0-.412-.168l-1.239.092a.5.5 0 0 0-.463.491l-.064 4.389a.5.5 0 0 1-.01.091Z\"/>";

export const Jo = /*#__PURE__*/ defineComponent({
  name: 'GeoJo',
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
