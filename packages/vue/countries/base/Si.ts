// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.306 8.723-1.938 1.403a.5.5 0 0 0 .067.85l1.172.597a.5.5 0 0 1 .2.707l-.472.769a.5.5 0 0 0-.067.338l.237 1.518a.5.5 0 0 0 .179.312l1.363 1.104a.5.5 0 0 1-.05.812l-1.338.84a.25.25 0 0 0 .058.45l1.474.467a.5.5 0 0 0 .245.014l2.632-.506a.5.5 0 0 0 .233-.114l1.308-1.133a.5.5 0 0 1 .559-.065l3.242 1.694a.5.5 0 0 0 .369.037l.883-.252a.5.5 0 0 0 .344-.617l-.452-1.6a.5.5 0 0 1 .338-.616l1.886-.561a.5.5 0 0 0 .333-.326l.442-1.366a.5.5 0 0 0-.101-.486l-.62-.7a.5.5 0 0 1 .187-.795l3.55-1.436a.5.5 0 0 0 .313-.45l.007-.233a.5.5 0 0 1 .582-.478l1.835.307-2.007-3.83a.5.5 0 0 0-.502-.265l-1.251.147a.5.5 0 0 0-.435.575l.11.696a.5.5 0 0 1-.462.577l-6.534.422a.5.5 0 0 0-.328.152l-1.672 1.731a.5.5 0 0 1-.449.145l-5.088-.922a.5.5 0 0 0-.382.087Z\"/>";

export const Si = /*#__PURE__*/ defineComponent({
  name: 'GeoSi',
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
