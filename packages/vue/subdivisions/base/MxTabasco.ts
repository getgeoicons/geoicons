// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.41 12.277-.14-1.378a1 1 0 0 1 .558-1l3.318-1.613a1 1 0 0 1 .477-.1l3.414.136a1 1 0 0 0 .696-.244L11.1 6.892a1 1 0 0 1 1.071-.155l1.908.872a.6.6 0 0 1 .35.545l.002 1.557a1 1 0 0 0 .585.91l3.34 1.525v-1.799l4.19 1.67a.3.3 0 0 1 .189.275l.061 4.928a.3.3 0 0 1-.306.304l-2.227-.047a1 1 0 0 1-.78-.402l-2.424-3.25a1 1 0 0 0-.706-.397l-.542-.052a1.5 1.5 0 0 0-.676.092l-1.788.68c-.216.082-.41.214-.568.384l-1.754 1.898a.6.6 0 0 1-.862.02l-.995-.982a1 1 0 0 1-.294-.795l.117-1.413a.8.8 0 0 0-.553-.829l-.931-.298a.8.8 0 0 0-1.03.611l-.307 1.602a2 2 0 0 1-.206.577l-.729 1.343a.595.595 0 0 1-1.097-.13l-.42-1.568A1 1 0 0 0 3.311 14l-1.469-.995a1 1 0 0 1-.434-.727Z\"/>";

export const MxTabasco = /*#__PURE__*/ defineComponent({
  name: 'GeoMxTabasco',
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
