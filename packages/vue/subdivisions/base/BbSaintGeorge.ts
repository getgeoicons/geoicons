// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.588 13.456a1 1 0 0 0-.134-.98L19.66 8.828a.6.6 0 0 0-.445-.234l-.853-.045a.6.6 0 0 1-.568-.57l-.073-1.516a.6.6 0 0 0-.139-.355L14.44 2.34a1 1 0 0 0-.705-.357l-2.818-.178a1 1 0 0 0-1.002.654l-.157.427a2 2 0 0 1-1.003 1.111l-2.162 1.05a3 3 0 0 1-1.225.301l-2.292.066a1 1 0 0 0-.626.244l-.875.758a1 1 0 0 0-.344.817l.256 4.156a5 5 0 0 0 .183 1.067l2.652 9.277a.6.6 0 0 0 .564.435l2.698.061a.6.6 0 0 0 .613-.585l.012-.475a.6.6 0 0 1 .608-.586l2.804.039c.311.004.622-.04.92-.132l1.72-.527c.307-.094.598-.237.86-.424l2.93-2.085a2 2 0 0 1 1.098-.37l1.356-.042a1 1 0 0 0 .897-.627z\"/>";

export const BbSaintGeorge = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintGeorge',
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
