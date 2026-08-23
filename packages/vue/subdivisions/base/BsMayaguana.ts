// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.37 12.619a1 1 0 0 1 .69-.213l4.992.36a1 1 0 0 1 .638.294l3.396 3.424a1 1 0 0 0 1.354.06l.56-.47a5 5 0 0 0 1.124-1.352l.197-.348a1 1 0 0 0-.347-1.347l-3.011-1.842a3 3 0 0 0-.936-.374l-4.799-1.032a1 1 0 0 0-.866.224l-.098.084a1 1 0 0 1-1.093.146L7.623 8.509a1 1 0 0 0-.649-.078L5.88 8.67a1 1 0 0 1-.853-.21l-1.002-.836a.6.6 0 0 0-.984.425l-.104 1.748a1 1 0 0 1-.296.652l-.944.932a.92.92 0 0 0 .587 1.572l.14.009a1 1 0 0 0 .393-.054l1.095-.383a1 1 0 0 1 .967.173L6.4 13.956a1 1 0 0 0 1.257.014z\"/>";

export const BsMayaguana = /*#__PURE__*/ defineComponent({
  name: 'GeoBsMayaguana',
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
