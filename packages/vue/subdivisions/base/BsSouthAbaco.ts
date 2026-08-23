// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.39 2.194a1 1 0 0 0-.611.468l-1.175 2.042a1 1 0 0 0-.055.886l.807 1.921a1 1 0 0 1-.278 1.152l-2.365 1.992q-.628.53-1.335.95l-3.516 2.089a.6.6 0 0 0-.292.474l-.044.641a.6.6 0 0 0 .488.63l4.15.776a1 1 0 0 1 .757.644l.18.499a1 1 0 0 1-.008.697l-.177.46a.76.76 0 0 0 .21.842 8.3 8.3 0 0 1 1.689 2.022l.545.916a.6.6 0 0 0 .812.214l.623-.354a.6.6 0 0 0 .303-.495l.123-2.781a7 7 0 0 0-.067-1.322l-.542-3.709a3 3 0 0 1 .175-1.53l.36-.916a3 3 0 0 0 .207-1.084l.016-3.977a2 2 0 0 1 .463-1.272l2.452-2.946a.511.511 0 0 0-.524-.822z\"/>";

export const BsSouthAbaco = /*#__PURE__*/ defineComponent({
  name: 'GeoBsSouthAbaco',
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
