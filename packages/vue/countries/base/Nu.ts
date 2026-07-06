// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.08 15.609-.73-.917a.687.687 0 0 1 .207-1.029l1.915-1.053a1 1 0 0 0 .335-.3l.42-.597a1 1 0 0 0 .183-.576v-.825a1 1 0 0 0-.052-.319l-.583-1.73a1 1 0 0 1-.012-.6l.187-.634a1 1 0 0 1 .294-.465l1.363-1.213a1 1 0 0 0 .243-.33l.736-1.603a1 1 0 0 1 .298-.375l1.28-.987a1 1 0 0 1 .417-.19l1.001-.198a1 1 0 0 0 .172-.05l.889-.349a1 1 0 0 1 .365-.069h.706a1 1 0 0 1 .293.044l1.185.363a1 1 0 0 0 .293.044h.565a1 1 0 0 1 .404.085l.539.238a1 1 0 0 1 .452.398l.452.75a1 1 0 0 1 .144.516v1.349a1 1 0 0 0 .096.427l.786 1.664a1 1 0 0 1 .079.612l-.157.836a1 1 0 0 0 .117.685l1.69 2.918a1 1 0 0 1 .094.78l-.214.734a1 1 0 0 1-.143.297l-1.996 2.831a1 1 0 0 1-.154.172l-2.918 2.586a1 1 0 0 0-.211.264l-.842 1.519a1 1 0 0 1-.875.515H12.7a1 1 0 0 0-.468.116l-1.255.663a1 1 0 0 1-.761.072l-.328-.1a1 1 0 0 1-.362-.201L8.32 21.329a1 1 0 0 0-.986-.188l-.313.11a.86.86 0 0 1-.704-.064l-.046-.025a.831.831 0 0 1 .127-1.505.83.83 0 0 0 .54-.89l-.026-.199a1 1 0 0 0-.135-.385l-.413-.683a1 1 0 0 0-.243-.273l-1.871-1.45a1 1 0 0 1-.17-.168Z\"/>";

export const Nu = /*#__PURE__*/ defineComponent({
  name: 'GeoNu',
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
