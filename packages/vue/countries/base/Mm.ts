// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.139 8.834-.795 1.226a.5.5 0 0 0 .01.56l2.087 2.975a.5.5 0 0 1 .08.385l-.277 1.376a.5.5 0 0 0 .327.571l.565.196a.5.5 0 0 0 .51-.111l1.4-1.34 1.222 4.04.016.071.6 4.017 1.477-2.216a.5.5 0 0 0 .075-.373l-.406-2.086a.5.5 0 0 0-.114-.233l-.628-.721a.5.5 0 0 1-.104-.465l.313-1.1a.5.5 0 0 0-.087-.444l-1.337-1.714a.5.5 0 0 1-.085-.45l.292-.978a.5.5 0 0 1 .338-.337l1.856-.544a.5.5 0 0 0 .264-.187l1.102-1.518-1.547-.266a.5.5 0 0 1-.39-.336l-.694-2.11-.76.161a.5.5 0 0 1-.6-.434l-.043-.391a.5.5 0 0 1 .143-.409l1.007-1.006a.5.5 0 0 0 .14-.278l.242-1.573a.5.5 0 0 0-.164-.452L12.877 1.2l-.846 1.464a.5.5 0 0 1-.167.174l-1.424.892a.5.5 0 0 0-.215.284l-.801 2.75-1.138.02-.067 1.797a.5.5 0 0 1-.08.253Z\"/>";

export const Mm = /*#__PURE__*/ defineComponent({
  name: 'GeoMm',
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
