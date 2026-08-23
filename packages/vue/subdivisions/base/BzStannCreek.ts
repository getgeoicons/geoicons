// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.948 1.649a.514.514 0 0 0-.402.848l.91 1.059a1 1 0 0 1 .027 1.27l-2.39 3.038a2 2 0 0 0-.427 1.17l-.07 2.092a1 1 0 0 1-.545.859l-1.256.639a1 1 0 0 0-.38.339l-1.761 2.659a.68.68 0 0 0 .686 1.046l3.696-.657a1 1 0 0 1 1.005.427l2.217 3.295a1 1 0 0 1 .157.72l-.182 1.101a.6.6 0 0 0 .525.694l4.098.46a1 1 0 0 0 1.066-.695l.812-2.595a1 1 0 0 1 .216-.376l1.244-1.36a1 1 0 0 0 .262-.643l.085-2.68a1 1 0 0 1 .334-.716l.992-.884a1 1 0 0 0 .268-1.105l-.621-1.617a1 1 0 0 1 .269-1.106l1.298-1.154a1 1 0 0 0 .301-1.007l-.775-2.879a2 2 0 0 0-.316-.66l-1.137-1.556a.8.8 0 0 0-.904-.285l-1.002.343a2 2 0 0 1-.696.106z\"/>";

export const BzStannCreek = /*#__PURE__*/ defineComponent({
  name: 'GeoBzStannCreek',
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
