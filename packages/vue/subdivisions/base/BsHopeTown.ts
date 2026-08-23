// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.882 4.66-4.17-2.98a1 1 0 0 0-1.089-.048l-.205.12a1 1 0 0 0-.488.952l.017.192a1 1 0 0 0 .506.782l4.458 2.508a.906.906 0 0 0 .971-1.526Zm2.568 4.422-.788-.941a.832.832 0 1 1 1.317-1.015l.709 1.004a.781.781 0 0 1-1.237.952Zm.6 3.995 1.551-2.476a.712.712 0 0 1 1.25.675l-1.195 2.605a1 1 0 0 0-.09.457l.118 2.967a.682.682 0 0 1-1.36.105l-.42-3.688a1 1 0 0 1 .146-.645Zm.186 8.864.168-1.448a.72.72 0 0 1 1.431.149l-.133 1.452a.737.737 0 1 1-1.466-.153Z\"/>";

export const BsHopeTown = /*#__PURE__*/ defineComponent({
  name: 'GeoBsHopeTown',
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
