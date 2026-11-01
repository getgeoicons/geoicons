// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.371 19.112 6.047 12.66a2 2 0 0 1 .086-1.105l.241-.642a1 1 0 0 0-.58-1.285l-1.231-.47a.78.78 0 0 1 .072-1.48l2.203-.604a.887.887 0 0 0 .222-1.616L4.854 4.134a.8.8 0 0 1-.352-.925l.435-1.39a.6.6 0 0 1 .797-.377l3.714 1.491a1 1 0 0 1 .627.948l-.034 1.73a.8.8 0 0 0 .567.782l1.115.338a3 3 0 0 0 1.093.121l4.416-.328a2 2 0 0 1 1.042.206l.566.283a1 1 0 0 1 .433 1.368l-.416.773a2 2 0 0 1-.965.887l-2.446 1.06a1 1 0 0 0-.575 1.148l.51 2.16a.838.838 0 0 0 1.647-.085l.203-1.559a.773.773 0 0 1 1.522-.058l.9 4.293a11 11 0 0 1 .218 1.695l.104 2.029a1 1 0 0 1-.248.71l-.641.73a.6.6 0 0 1-.974-.101L17.1 20.265a2 2 0 0 1-.225-.621l-.291-1.588a1 1 0 0 0-1.581-.622l-1.173.874a3 3 0 0 1-1.048.5L8.6 19.88a1 1 0 0 1-1.228-.768Z\"/>";

export const Bd = /*#__PURE__*/ defineComponent({
  name: 'GeoBd',
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
