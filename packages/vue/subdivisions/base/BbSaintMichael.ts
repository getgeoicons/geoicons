// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.36 1.764a.3.3 0 0 0-.504-.168l-1.877 1.802a.9.9 0 0 1-.78.236 2.69 2.69 0 0 0-2.263.64l-.504.45a1 1 0 0 1-.993.199L7.18 3.796a.3.3 0 0 0-.398.274l-.028.89a.3.3 0 0 1-.343.288L4.306 4.94a.3.3 0 0 0-.322.185L3.283 6.87a.6.6 0 0 0-.027.364l.48 2.007a2 2 0 0 0 .466.882l.613.673a2 2 0 0 1 .392.638l.264.697a.6.6 0 0 1-.308.756l-.14.065a.6.6 0 0 0-.333.664l.422 2.06a1 1 0 0 0 .521.688l3.27 1.684a2 2 0 0 1 1.05 1.41l.01.052a2 2 0 0 1-.253 1.401l-.134.223a.6.6 0 0 0 .408.9l3.488.626a.6.6 0 0 0 .703-.653l-.082-.78a.6.6 0 0 1 .271-.566l1.956-1.262c.47-.303.98-.54 1.515-.701l2.674-.81a.3.3 0 0 0 .203-.366l-1.952-7.164z\"/>";

export const BbSaintMichael = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintMichael',
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
