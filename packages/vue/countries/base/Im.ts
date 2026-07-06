// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.375 19.045-1.962 2.582a.626.626 0 0 0 .743.954l.907-.386a1 1 0 0 0 .39-.298l.838-1.053a.973.973 0 0 1 1.607.123l.087.152a1 1 0 0 0 .524.443l1.036.38a.6.6 0 0 0 .772-.364l.459-1.299a1 1 0 0 1 .424-.522l3.33-2.02a1 1 0 0 0 .477-.76l.066-.688a1 1 0 0 1 .494-.77l1.694-.982a1 1 0 0 0 .47-1.106l-.121-.486a1 1 0 0 1 .187-.863l2.268-2.856a1 1 0 0 0-.343-1.52l-1.255-.616a1 1 0 0 1-.542-1.086l.758-3.945a.5.5 0 0 0-.66-.565L15.4 2.43a1 1 0 0 0-.278.153L12.74 4.436a1 1 0 0 0-.322.437l-1.692 4.494a1 1 0 0 1-.293.413l-2.88 2.42a1 1 0 0 0-.261.339l-1.271 2.693a1 1 0 0 0-.089.308l-.361 3.019a1 1 0 0 1-.197.486Z\"/>";

export const Im = /*#__PURE__*/ defineComponent({
  name: 'GeoIm',
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
