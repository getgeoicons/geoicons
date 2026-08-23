// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.966 10.041-4.29-1.423a.6.6 0 0 0-.61.141l-2.15 2.115a1 1 0 0 0-.295.612l-.097.958a.6.6 0 0 1-.213.401l-3.742 3.112a1 1 0 0 0-.36.786l.036 2.107a1 1 0 0 0 .324.72l1.001.916a1 1 0 0 0 1.194.118l2.165-1.315a2 2 0 0 0 .604-.567l1.518-2.183a1 1 0 0 1 .782-.428l1.324-.053a1 1 0 0 0 .341-.074l7.337-3.017a1 1 0 0 0 .617-.85l.008-.106a1 1 0 0 1 .903-.92l.828-.079a1 1 0 0 0 .466-.167l1.65-1.115a1 1 0 0 0 .436-.924l-.024-.248a1 1 0 0 0-.516-.782l-.868-.473a1 1 0 0 1-.486-1.138l.331-1.23a.6.6 0 0 0-.172-.596l-.872-.805a.6.6 0 0 0-.936.159l-1.79 3.356q-.186.35-.276.736l-.259 1.123a1 1 0 0 1-1.104.767l-.662-.087a1 1 0 0 0-.49.059l-.98.378a1 1 0 0 1-.674.016Z\"/>";

export const CaNovaScotia = /*#__PURE__*/ defineComponent({
  name: 'GeoCaNovaScotia',
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
