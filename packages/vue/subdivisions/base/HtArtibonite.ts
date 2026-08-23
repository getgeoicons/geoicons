// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.093 21.937a1 1 0 0 0 1.468-.236l.286-.442a1 1 0 0 1 1.29-.351l2.695 1.356c.324.163.675.266 1.036.304l1.207.126a1 1 0 0 0 1.1-.911l.256-3.06a4 4 0 0 0-.12-1.358l-.398-1.5a2 2 0 0 1 .25-1.594l.67-1.042a1 1 0 0 0 .12-.812l-.59-2.091a1 1 0 0 0-.782-.712l-.413-.076a1 1 0 0 1-.808-1.136l.14-.905a.98.98 0 0 0-1.609-.894l-.815.701a1 1 0 0 1-1.337-.03l-1.033-.972a4 4 0 0 1-.76-.979L12.218 2.2a1 1 0 0 0-1.47-.32l-2.164 1.6a1 1 0 0 1-.742.184l-3.888-.582a1 1 0 0 0-.98.434l-.78 1.169a.72.72 0 0 0 .397 1.093c2.75.831 4.342 1.743 7.387 3.963a1 1 0 0 1 .354 1.128l-1.11 3.24a1 1 0 0 0 .375 1.144l1.462 1.019a.736.736 0 0 1-.352 1.337l-1.515.144a.837.837 0 0 0-.446 1.484z\"/>";

export const HtArtibonite = /*#__PURE__*/ defineComponent({
  name: 'GeoHtArtibonite',
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
