// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.612 11.387a.605.605 0 0 0-.705-.888l-1.449.483a1 1 0 0 1-.683-.02l-1.339-.528a3 3 0 0 0-.626-.172l-4.581-.738a2 2 0 0 1-.991-.462l-.84-.727a3 3 0 0 0-1.547-.703l-1.214-.17a4 4 0 0 0-1.968.218L3.312 8.946a.8.8 0 0 0-.514.82l.069.772a1 1 0 0 1-.068.461l-1.407 3.507a1 1 0 0 0 .086.912l.461.72a1 1 0 0 0 .984.451l8.662-1.24c.243-.036.49-.025.73.03l4.28.98a.6.6 0 0 0 .73-.518l.02-.19a.6.6 0 0 1 .516-.527l2.348-.32a.8.8 0 0 0 .58-.386l.8-1.355z\"/>";

export const HtGrandeAnse = /*#__PURE__*/ defineComponent({
  name: 'GeoHtGrandeAnse',
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
