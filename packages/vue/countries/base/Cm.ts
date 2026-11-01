// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.969 21.487h7.282a2 2 0 0 1 .855.192l2.109.997a.63.63 0 0 0 .891-.67l-.21-1.301a2 2 0 0 0-.483-1.015l-1.873-2.097a2 2 0 0 1-.507-1.246l-.06-1.398a2 2 0 0 1 .392-1.277l1.202-1.622a.8.8 0 0 0 .08-.82l-.484-1.014a2 2 0 0 0-.634-.761l-1.287-.93a.6.6 0 0 1-.14-.832l.175-.247a.6.6 0 0 1 .574-.248l1.215.171a.6.6 0 0 0 .678-.676l-.37-2.674a3 3 0 0 0-.281-.915l-.721-1.462a.6.6 0 0 0-.694-.314l-.516.139a.6.6 0 0 0-.377.855l.617 1.19a.8.8 0 0 1-.263 1.032l-.466.314a2 2 0 0 0-.688.8l-3.409 7.177a.8.8 0 0 1-1.161.326l-.74-.486a.8.8 0 0 0-.983.083l-1.927 1.79a1 1 0 0 0-.27.427l-.56 1.736a.6.6 0 0 0 .168.628l2.085 1.89a1 1 0 0 1 .31.931l-.118.613a.6.6 0 0 0 .589.714Z\"/>";

export const Cm = /*#__PURE__*/ defineComponent({
  name: 'GeoCm',
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
