// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.874 19.803a3 3 0 0 1 .34 1.045l.183 1.412a.6.6 0 0 0 .614.522l1.841-.059a.6.6 0 0 0 .567-.729l-.305-1.386a1 1 0 0 1 .143-.767l1.037-1.564a1 1 0 0 0 .158-.685l-.184-1.375a2 2 0 0 1 .118-.987l1.122-2.899a2 2 0 0 1 .574-.805l2.649-2.239a.6.6 0 0 0-.178-1.02l-.923-.345a.6.6 0 0 1-.39-.552l-.01-.625a.6.6 0 0 1 .533-.607l1.836-.206a.6.6 0 0 0 .515-.452l.273-1.106a.6.6 0 0 0-.473-.734l-1.415-.26a1 1 0 0 1-.77-.678l-.123-.382a1.45 1.45 0 0 0-2.011-.862l-.097.047c-.513.248-.87.735-.95 1.3l-.089.617a.6.6 0 0 1-.923.416L8.593 1.905a.6.6 0 0 0-.872.245L6.46 4.818a1 1 0 0 0-.043.75l.968 2.844a1 1 0 0 1 .01.614l-1.813 5.93a1 1 0 0 0 .078.77z\"/>";

export const DoHermanasMirabal = /*#__PURE__*/ defineComponent({
  name: 'GeoDoHermanasMirabal',
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
