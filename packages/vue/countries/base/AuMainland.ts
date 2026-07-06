// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.324 18.238-.946-.351a.5.5 0 0 1-.325-.506l.152-2.053a.5.5 0 0 0-.035-.223l-.924-2.3a.5.5 0 0 1-.034-.234l.223-2.285a.5.5 0 0 1 .355-.431l3.24-.964a.5.5 0 0 0 .246-.164l2.5-3.08a.5.5 0 0 1 .654-.108l.69.433a.5.5 0 0 0 .652-.105l1.437-1.739a.5.5 0 0 1 .481-.172l1.713.334a.5.5 0 0 1 .32.768l-.42.631a.5.5 0 0 0 .172.714l1.756.982a.5.5 0 0 0 .73-.323l.713-3.08a.25.25 0 0 1 .474-.041l1.838 4.354a.5.5 0 0 0 .099.15l3.178 3.338a.5.5 0 0 1 .13.252l.382 2.027a.5.5 0 0 1-.022.264l-2.005 5.483a.5.5 0 0 1-.334.31l-2.18.616a.5.5 0 0 1-.25.005l-2.085-.49a.5.5 0 0 1-.367-.352l-.313-1.118a.5.5 0 0 0-.345-.346l-1.737-.492a.5.5 0 0 1-.198-.11l-1.96-1.768a.5.5 0 0 0-.493-.103l-6.83 2.282a.5.5 0 0 1-.332-.005Z\"/>";

export const AuMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoAuMainland',
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
