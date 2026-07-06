// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.532 13.719-.49 1.651a.5.5 0 0 1-.35.34l-.471.127a.5.5 0 0 1-.396-.06l-1.23-.774a.25.25 0 0 1 .032-.44l2.563-1.144a.25.25 0 0 1 .342.3Zm3.599-3.304L7.468 11.6a.5.5 0 0 0 .383.74l.403.044a.5.5 0 0 1 .427.359l.163.563a.5.5 0 0 1-.315.611l-.543.191a.5.5 0 0 0-.283.692l.464.948 6.346-3.033a1 1 0 0 1 .393-.097l1.48-.057a1 1 0 0 0 .735-.366l.535-.653a1 1 0 0 1 .747-.366l.752-.02a1 1 0 0 0 .561-.192L22.8 8.72l-2.603-.546a1 1 0 0 0-.62.069l-1.566.712a1 1 0 0 1-.581.076l-.812-.138a1 1 0 0 0-.534.056l-1.075.424a1 1 0 0 1-.47.064l-1.844-.19a1 1 0 0 0-.328.02l-3.912.905a.5.5 0 0 0-.324.243Z\"/>";

export const Tl = /*#__PURE__*/ defineComponent({
  name: 'GeoTl',
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
