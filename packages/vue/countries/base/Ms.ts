// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.966 4.847-3.664 7.078a.5.5 0 0 0-.047.323l.29 1.53a.5.5 0 0 1-.102.405L5.48 15.39a.5.5 0 0 0 .124.735l1.813 1.143a.5.5 0 0 1 .17.18l1.704 3.066a.5.5 0 0 0 .15.167l2.872 2.01a.5.5 0 0 0 .346.088l3.577-.424a.5.5 0 0 0 .315-.165l2.068-2.331a.5.5 0 0 0 .045-.604l-.95-1.466a.5.5 0 0 1-.08-.308l.436-6.145a.5.5 0 0 0-.232-.458l-2.169-1.372a.5.5 0 0 1-.19-.22l-1.822-4.137a.5.5 0 0 1-.043-.202V2.663a.5.5 0 0 0-.354-.478l-2.591-.789a.5.5 0 0 0-.646.479v2.743a.5.5 0 0 1-.056.23Z\"/>";

export const Ms = /*#__PURE__*/ defineComponent({
  name: 'GeoMs',
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
