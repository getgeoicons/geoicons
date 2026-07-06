// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.737 19.277 10 18.766a.782.782 0 1 1 .914-1.27l1.068.798a1 1 0 0 1 .313 1.214l-.346.766 1.345.747a.79.79 0 1 1-.776 1.376l-1.738-.993a1 1 0 0 1-.42-1.271zm.743-6.66-1.28 1.418a.773.773 0 1 1-1.133-1.051l1.09-1.143-.8-2.503a.748.748 0 0 1 1.423-.461l.906 2.76a1 1 0 0 1-.208.98Zm2.062-1.482.004-1.23a1 1 0 0 1 .223-.627l.602-.744a.753.753 0 1 1 1.14.983l-.512.56v1.06a.728.728 0 1 1-1.457-.002ZM11.566 5.47l-.79 1.15a.769.769 0 1 1-1.253-.892l.547-.744-.609-.508a1 1 0 0 1-.199-1.311l.906-1.399a.791.791 0 1 1 1.303.896l-.707.97.61.496a1 1 0 0 1 .192 1.342Z\"/>";

export const Mv = /*#__PURE__*/ defineComponent({
  name: 'GeoMv',
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
