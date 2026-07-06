// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.648 13.166-1.035.809a.5.5 0 0 0-.07.72l1.746 2.024a.5.5 0 0 0 .541.146l1.387-.477a.5.5 0 0 1 .395.03l2.118 1.114a.5.5 0 0 0 .403.028l3.61-1.302a.5.5 0 0 1 .394.023l1.63.815a.5.5 0 0 0 .324.043l6.645-1.359a.5.5 0 0 1 .204.001l1.198.254a.5.5 0 0 0 .602-.534l-.279-3.11a.5.5 0 0 0-.463-.453l-2.088-.148a.5.5 0 0 1-.46-.574l.29-1.904a.5.5 0 0 0-.211-.487l-1.54-1.059a.5.5 0 0 0-.602.027l-1.074.891a.5.5 0 0 1-.47.092L8.43 6.434a.5.5 0 0 0-.411.05l-2.001 1.22a.5.5 0 0 0-.169.17l-3.08 5.156a.5.5 0 0 1-.121.137Z\"/>";

export const Bt = /*#__PURE__*/ defineComponent({
  name: 'GeoBt',
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
