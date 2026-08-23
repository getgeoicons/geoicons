// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.68 2.428a.6.6 0 0 0-.58-.457L1.502 1.896a.3.3 0 0 0-.302.3l.006 4.529a1 1 0 0 0 .09.413l2.047 4.498a1 1 0 0 1 .05.692l-1.445 4.99a.6.6 0 0 0 .636.764l1.54-.154a4 4 0 0 1 1.528.143l2.627.774c.353.104.718.159 1.085.163l1.89.021a1 1 0 0 1 .682.28l1.081 1.042a1 1 0 0 0 .914.255l3.783-.85a1 1 0 0 1 .756.131l2.508 1.594a1 1 0 0 0 1.452-.441l.023-.054a1 1 0 0 0-.38-1.248l-1.536-.972a1 1 0 0 1-.462-.924l.133-1.682a1 1 0 0 0-.224-.714l-.916-1.113a1 1 0 0 1-.193-.894l.34-1.272a.3.3 0 0 0-.29-.378h-6.858a.6.6 0 0 1-.578-.76l.814-2.934a1 1 0 0 1 .152-.318l1.731-2.402a.6.6 0 0 0 .096-.494z\"/>";

export const UsLouisiana = /*#__PURE__*/ defineComponent({
  name: 'GeoUsLouisiana',
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
