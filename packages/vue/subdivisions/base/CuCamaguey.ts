// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.772 12.464a.6.6 0 0 0-.283.758l.982 2.426q.262.649.409 1.334l.332 1.558a1 1 0 0 0 .366.583l2.205 1.703q.43.332.795.738l.792.882a1 1 0 0 0 .794.33l2.008-.1a.6.6 0 0 0 .52-.36l.446-1.023a1 1 0 0 1 .741-.585l.748-.134a2 2 0 0 0 1.19-.696l.708-.858a.8.8 0 0 1 1.168-.071l.156.148a.8.8 0 0 0 1.12-.019l.716-.726a2 2 0 0 0 .539-1.018l.461-2.341a1 1 0 0 1 .54-.704l.76-.374a.6.6 0 0 0 .171-.951l-1.153-1.218q-.298-.314-.645-.572l-2.608-1.94a4 4 0 0 1-.779-.765l-1.406-1.822a2 2 0 0 0-.763-.602l-.826-.372a2 2 0 0 1-.752-.588L10.96 3.478a5 5 0 0 0-.76-.778l-.78-.64a3 3 0 0 0-1.26-.61l-.41-.09a2 2 0 0 0-1.39.205.66.66 0 0 0-.338.647l.006.053c.026.25.177.47.4.586L8.73 4.029a2 2 0 0 1 .665.55l1.285 1.646a3 3 0 0 0 .68.636l2.626 1.783a.838.838 0 0 1-.833 1.45l-1.85-.887a2 2 0 0 1-.744-.614l-1.36-1.837a.6.6 0 0 0-.906-.067l-.843.843a.6.6 0 0 0-.023.824l.63.704a.6.6 0 0 1 .07.702l-.206.354a.6.6 0 0 1-.948.116l-.195-.2a.6.6 0 0 0-.893.036l-.618.749a4 4 0 0 1-1.26 1.014z\"/>";

export const CuCamaguey = /*#__PURE__*/ defineComponent({
  name: 'GeoCuCamaguey',
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
