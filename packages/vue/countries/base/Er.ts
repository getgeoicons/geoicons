// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.213 12.212.238 2.265a.5.5 0 0 0 .638.427l1.068-.314a.5.5 0 0 1 .38.041l.755.413a.5.5 0 0 0 .68-.2l.676-1.246a.5.5 0 0 1 .783-.124l1.153 1.092a.5.5 0 0 0 .414.132l3.3-.467a.5.5 0 0 1 .231.022l3.523 1.194a.5.5 0 0 1 .277.232l.86 1.558a.5.5 0 0 0 .238.217l1.692.733a.5.5 0 0 1 .164.114l2.793 2.94a.5.5 0 0 0 .71.016l.656-.636a.5.5 0 0 0 .013-.706l-5.636-5.87a.5.5 0 0 0-.182-.12l-2.68-1.03a.5.5 0 0 1-.259-.225l-.579-1.053a.5.5 0 0 0-.26-.227l-1.586-.6a.5.5 0 0 1-.304-.333L9.363 4.733a.5.5 0 0 0-.039-.097l-.8-1.52a.5.5 0 0 0-.851-.055l-.608.865a.5.5 0 0 1-.142.136L4.589 5.535a.5.5 0 0 1-.304.076l-.908-.069a.5.5 0 0 0-.538.499v2.06a.5.5 0 0 1-.039.195l-1.55 3.67a.5.5 0 0 0-.037.246Z\"/>";

export const Er = /*#__PURE__*/ defineComponent({
  name: 'GeoEr',
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
