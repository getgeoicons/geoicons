// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.64 7.765-.7.14a.814.814 0 0 0-.51 1.26l.522.756a1 1 0 0 0 .79.432l.905.029a1 1 0 0 0 .961-.628l.254-.633a1 1 0 0 1 .453-.509l2.02-1.09a.6.6 0 0 0-.116-1.104L4.721 5.68a.6.6 0 0 0-.697.29l-.702 1.291a1 1 0 0 1-.683.503Zm4.115 3.592-.036-.053a.962.962 0 0 1 .71-1.5l1.76-.155a.6.6 0 0 1 .608.822l-.323.8a1 1 0 0 1-1.033.62l-.965-.103a1 1 0 0 1-.72-.431Zm14.025 6.777-4.7-1.936a.902.902 0 0 1 .621-1.692l4.878 1.574a1 1 0 0 1 .54 1.482l-.11.178a1 1 0 0 1-1.23.394Z\"/>";

export const BsGrandCay = /*#__PURE__*/ defineComponent({
  name: 'GeoBsGrandCay',
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
