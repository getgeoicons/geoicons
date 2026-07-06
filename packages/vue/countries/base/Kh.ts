// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.253 10.152 2.562 5.14a.5.5 0 0 1 .052.197l.166 3.126a.5.5 0 0 0 .84.339l.84-.783a.5.5 0 0 1 .744.07l.407.551a.5.5 0 0 1-.033.633l-.424.466a.5.5 0 0 0 .341.836l3.05.177a.5.5 0 0 0 .223-.038l4.172-1.76a.5.5 0 0 1 .417.013l1.783.885a.5.5 0 0 0 .651-.192l.186-.311a.5.5 0 0 0-.032-.56l-1.62-2.118a.5.5 0 0 1 .213-.769l6.125-2.425a.5.5 0 0 0 .314-.51l-.203-2.259a.5.5 0 0 1 .04-.244l.64-1.47a.5.5 0 0 0-.008-.418l-.897-1.849a.5.5 0 0 1-.034-.344l.755-2.897a.25.25 0 0 0-.359-.284l-2.526 1.337a.5.5 0 0 1-.56-.064l-.69-.595a.5.5 0 0 0-.565-.061l-1.04.565a.5.5 0 0 0-.26.461l.054 1.222a.5.5 0 0 1-.716.472l-4.06-1.95a.5.5 0 0 0-.234-.05l-7.21.247a.5.5 0 0 0-.441.297l-.904 2.04a.5.5 0 0 1-.263.259l-1.243.521a.5.5 0 0 0-.306.461V9.93a.5.5 0 0 0 .053.223Z\"/>";

export const Kh = /*#__PURE__*/ defineComponent({
  name: 'GeoKh',
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
