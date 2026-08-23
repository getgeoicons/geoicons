// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.674 10.135a1 1 0 0 0-.706.56l-.42.911a3 3 0 0 0-.26 1.577l.167 1.552a2 2 0 0 0 .206.695l.704 1.381a.6.6 0 0 0 .51.328l4.098.17q.3.012.594.07l2.25.435q.492.095.991.066l4.263-.246a4 4 0 0 1 1.71.277l1.344.535a6 6 0 0 1 1.44.819l.606.466a1 1 0 0 0 1.211.007l.692-.52a1 1 0 0 0 .384-.625l.244-1.379a.8.8 0 0 0-.39-.833l-1.029-.59a1 1 0 0 1-.48-.658l-1.276-5.925a1 1 0 0 1 .134-.748l.826-1.295a1 1 0 0 0 .152-.637l-.134-1.337a.6.6 0 0 0-.543-.538l-8.777-.79a.6.6 0 0 0-.654.592l-.02 2.166a.6.6 0 0 1-.618.594l-1.925-.056a.6.6 0 0 0-.617.622l.02.532a1 1 0 0 1-.797 1.017z\"/>";

export const CuMayabeque = /*#__PURE__*/ defineComponent({
  name: 'GeoCuMayabeque',
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
