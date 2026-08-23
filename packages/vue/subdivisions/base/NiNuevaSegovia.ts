// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.314 17.967a1 1 0 0 0 .58.331l2.507.454a1 1 0 0 0 .761-.172l1.067-.766a1 1 0 0 0 .417-.784l.044-1.57c.01-.33.06-.659.15-.977l.807-2.854a1 1 0 0 0-.23-.953L21.34 9.515a2 2 0 0 0-.815-.53l-2.76-.95a.6.6 0 0 1-.329-.862l.51-.906a.6.6 0 0 0-.011-.61l-.033-.053a.6.6 0 0 0-.735-.242l-1.818.73a2 2 0 0 0-.916.742l-3.26 4.866a1.5 1.5 0 0 1-1.56.631l-2.78-.597a2 2 0 0 0-.786-.011l-3.908.725a.8.8 0 0 0-.644.659l-.188 1.16a.8.8 0 0 0 .517.88L5.5 16.485a3 3 0 0 0 .852.175l3.058.176c.32.018.64-.015.948-.097l3.372-.903a1 1 0 0 1 1.017.313z\"/>";

export const NiNuevaSegovia = /*#__PURE__*/ defineComponent({
  name: 'GeoNiNuevaSegovia',
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
