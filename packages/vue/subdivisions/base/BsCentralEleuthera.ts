// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.788 22.792a.6.6 0 0 0 .587-.433l1.044-3.606q.109-.379.143-.77l.255-2.98a3 3 0 0 0-.2-1.362l-.551-1.389a1 1 0 0 1 .022-.789l.548-1.184a1 1 0 0 0-.087-.993l-1.275-1.824a3 3 0 0 0-.943-.87L7.077 1.758a.6.6 0 0 0-.903.546l.064 1.347a2 2 0 0 0 .506 1.239l.915 1.023a2 2 0 0 0 .565.44l3.756 1.962a3 3 0 0 1 .57.386l1.257 1.083a1 1 0 0 1 .266 1.152l-.16.371a1 1 0 0 0 .213 1.102l.643.643a1 1 0 0 1 .291.758l-.275 5.397a3 3 0 0 1-.068.502l-.522 2.333a.6.6 0 0 0 .575.731z\"/>";

export const BsCentralEleuthera = /*#__PURE__*/ defineComponent({
  name: 'GeoBsCentralEleuthera',
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
