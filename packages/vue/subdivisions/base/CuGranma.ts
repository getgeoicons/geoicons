// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.229 5.174a.6.6 0 0 0-.608.402l-.148.428a2 2 0 0 0-.106.787l.062.944a.8.8 0 0 0 .522.698l.94.347c.445.164.713.62.64 1.088a2 2 0 0 1-.91 1.386l-5.15 3.24q-.475.299-.85.716l-1.627 1.815a.98.98 0 0 0 .228 1.495c.367.218.795.311 1.22.264l3.011-.335a2 2 0 0 0 1.003-.406l.268-.207a1 1 0 0 1 .68-.207l2.201.15a1 1 0 0 0 1.031-.73l.009-.03a1 1 0 0 1 .56-.648l1.596-.703a2 2 0 0 1 1.04-.156l2.367.28a2 2 0 0 0 1.146-.206l1.085-.555a1 1 0 0 0 .53-.725l.438-2.612a1 1 0 0 1 .604-.76l.89-.367a1 1 0 0 0 .553-1.28l-.15-.392a1 1 0 0 0-.522-.555l-5.521-2.5a3 3 0 0 0-1.035-.26z\"/>";

export const CuGranma = /*#__PURE__*/ defineComponent({
  name: 'GeoCuGranma',
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
