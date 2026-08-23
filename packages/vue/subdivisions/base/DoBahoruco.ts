// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.808 17.65a.6.6 0 0 0 .61-.826l-.347-.84a.6.6 0 0 1 .192-.707l3.717-2.817a2 2 0 0 1 1.274-.405l.641.021a.78.78 0 0 0 .235-1.532l-3.807-1.058a1 1 0 0 1-.596-.46l-.68-1.17a1 1 0 0 0-.826-.495l-4.156-.159a1 1 0 0 0-.696.247l-.723.631a1 1 0 0 1-.963.2L3.866 6.415a1 1 0 0 0-.895.145l-.588.43A1 1 0 0 0 2 7.56l-.674 2.755a.6.6 0 0 0 .376.705l4.34 1.6a1 1 0 0 1 .642 1.099l-.004.025a1 1 0 0 0 .384.959L8.49 15.78a.8.8 0 0 0 .812.09l2.326-1.05a.8.8 0 0 1 .976.258l1.512 2.077a1 1 0 0 0 .718.407z\"/>";

export const DoBahoruco = /*#__PURE__*/ defineComponent({
  name: 'GeoDoBahoruco',
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
