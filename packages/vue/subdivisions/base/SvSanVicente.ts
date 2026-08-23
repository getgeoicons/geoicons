// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.915 6.02a1 1 0 0 0-.323.847l.141 1.319a1 1 0 0 0 .927.89l.578.04a1 1 0 0 1 .86.621l.544 1.34a2 2 0 0 1 .113 1.12L7.43 13.93a1 1 0 0 0 .16.753l1.187 1.713a1 1 0 0 1 .146.82l-.447 1.724a1 1 0 0 1-.29.484L6.33 21.136a.6.6 0 0 0 .132.975l.937.481a.6.6 0 0 0 .713-.124l2.852-3.061a1 1 0 0 0 .268-.689l-.013-1.82a1 1 0 0 1 .24-.657l1.322-1.543a1 1 0 0 0 .231-.512l.334-2.385c.05-.354.194-.688.416-.968l.551-.692a2 2 0 0 1 1.022-.679l1.415-.399a1 1 0 0 0 .509-.337l1.861-2.327a1 1 0 0 0 .166-.947l-.495-1.454a1 1 0 0 0-1.017-.675l-1.142.081a1 1 0 0 1-.701-.22l-1.63-1.325a2 2 0 0 0-1.115-.442l-2.442-.179a3 3 0 0 0-1.029.104l-3.153.883a1 1 0 0 0-.73.969l.009 1.537a1 1 0 0 1-.329.746z\"/>";

export const SvSanVicente = /*#__PURE__*/ defineComponent({
  name: 'GeoSvSanVicente',
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
