// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path fill-rule=\"evenodd\" stroke-linejoin=\"round\" d=\"M2.075 6.126a.5.5 0 0 1 .077.288l-.026.63a.5.5 0 0 0 .527.52L5.665 7.4a.5.5 0 0 1 .409.175l.425.5a.5.5 0 0 1-.035.685l-.814.781a.5.5 0 0 0-.153.366l.02 1.912a.5.5 0 0 1-.269.449l-.612.319a.5.5 0 0 0-.245.594l.818 2.584a.5.5 0 0 1-.004.313l-.49 1.426a.5.5 0 0 0 .418.66l.36.039a.5.5 0 0 1 .34.19l1.495 1.918a.5.5 0 0 0 .71.082l1.325-1.075a.5.5 0 0 1 .313-.111l3.583-.012a.5.5 0 0 0 .43-.247l.627-1.073a.5.5 0 0 1 .268-.22l1.12-.39a.5.5 0 0 0 .332-.402l.111-.787a.5.5 0 0 1 .196-.33l.939-.703a.5.5 0 0 0 .138-.641l-.66-1.201a.5.5 0 0 1 .034-.534l2.056-2.845a.5.5 0 0 1 .191-.16l3.431-1.622a.5.5 0 0 0 .282-.515l-.096-.757a.5.5 0 0 0-.594-.427l-1.154.23a.5.5 0 0 1-.295-.03l-2.087-.891a.5.5 0 0 0-.209-.04l-1.89.045a.5.5 0 0 1-.313-.101l-1.607-1.215a.5.5 0 0 0-.425-.086l-.756.193a.5.5 0 0 1-.27-.006l-1.4-.43a.5.5 0 0 0-.182-.02l-2.44.171a.5.5 0 0 1-.119-.005l-4.912-.838a.5.5 0 0 0-.325.055L1.664 4.484a.5.5 0 0 0-.18.705z\" clip-rule=\"evenodd\"/>";

export const Es = /*#__PURE__*/ defineComponent({
  name: 'GeoEs',
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
