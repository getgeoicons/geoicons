// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.089 12.907-3.602-3.97a.5.5 0 0 1-.019-.65l.313-.387a.5.5 0 0 1 .556-.158l.735.26a.5.5 0 0 0 .287.015l3.866-.955a.5.5 0 0 1 .153-.013l1.57.103a.5.5 0 0 1 .387.228l1.891 2.94a.5.5 0 0 1 .047.448l-.751 1.97a.5.5 0 0 1-.659.283l-1-.414a.5.5 0 0 0-.27-.031l-3.055.488a.5.5 0 0 1-.45-.158Zm7.665.293-.44.51a.5.5 0 0 0 .066.718l1.986 1.58a.5.5 0 0 0 .41.1l.934-.187a.5.5 0 0 1 .402.093l.883.678a.5.5 0 0 0 .289.103l4.749.15a.5.5 0 0 0 .48-.316l.148-.373a.5.5 0 0 0-.162-.581l-2.436-1.858a.5.5 0 0 0-.13-.071l-3.747-1.389a.5.5 0 0 0-.291-.017l-2.881.701a.5.5 0 0 0-.26.16Z\"/>";

export const Ws = /*#__PURE__*/ defineComponent({
  name: 'GeoWs',
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
