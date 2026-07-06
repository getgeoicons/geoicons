// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.053 22.224-1.338-2.409a1 1 0 0 1 .19-1.215l2.01-1.886a1 1 0 0 0 .314-.676l.22-4.134a1 1 0 0 1 .384-.736l1.022-.796a1 1 0 0 0 .309-.403l1.063-2.543a1 1 0 0 0 .077-.363l.076-3.33a1 1 0 0 1 .204-.582l.917-1.207a1 1 0 0 1 1.346-.231L17.68 4.89a1 1 0 0 1 .368 1.234l-.508 1.17a1 1 0 0 0 0 .798l1.433 3.283a1 1 0 0 1-.058.912l-.56.937a.954.954 0 0 0 .427 1.359c.485.22.697.793.471 1.275l-.062.133a1 1 0 0 1-.617.533l-1.549.468a1 1 0 0 0-.564.435l-.674 1.1a1 1 0 0 1-1.248.397l-1.414-.61a1 1 0 0 0-1.335.574l-.215.588a1 1 0 0 1-.836.65l-.89.093a1 1 0 0 0-.83.634l-.492 1.275a1 1 0 0 1-.979.64l-.666-.031a1 1 0 0 1-.83-.513Z\"/>";

export const GranChaco = /*#__PURE__*/ defineComponent({
  name: 'GeoGranChaco',
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
