// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.302 6.593-1.684.959a.5.5 0 0 0-.196.665l.529 1.016a.5.5 0 0 0 .685.207l1.91-1.056a.5.5 0 0 0 .145-.755l-.756-.919a.5.5 0 0 0-.633-.117Zm2.07 3.143-.916.477a.5.5 0 0 0-.209.683l.242.444a.5.5 0 0 0 .676.202l1.03-.553a.5.5 0 0 0 .123-.788l-.355-.368a.5.5 0 0 0-.591-.097Zm4.141 3.138-.436-.61a.5.5 0 0 1 .365-.788l2.852-.238a.5.5 0 0 1 .523.36l.084.294a.5.5 0 0 1-.373.626l-2.5.554a.5.5 0 0 1-.515-.198Zm9.966-1.226-.196-1.614a.5.5 0 0 1 .367-.543l.573-.153a.5.5 0 0 1 .627.43l.185 1.74a.5.5 0 0 1-.473.552l-.562.027a.5.5 0 0 1-.521-.44Zm1.331 3.256-.973.889a.5.5 0 0 0 .01.747l.93.803a.5.5 0 0 0 .639.012l.953-.762a.5.5 0 0 0 .045-.74l-.909-.93a.5.5 0 0 0-.694-.02Z\"/>";

export const Cv = /*#__PURE__*/ defineComponent({
  name: 'GeoCv',
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
