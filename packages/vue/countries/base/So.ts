// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.99 21.614.948 1.186 4.32-4.779a.5.5 0 0 1 .124-.098l2.203-1.259a.5.5 0 0 0 .11-.085l3.14-3.212a.5.5 0 0 0 .075-.097l4.169-7.155a.5.5 0 0 0 .053-.132l.891-3.61a.5.5 0 0 0-.274-.573l-.846-.394a.5.5 0 0 0-.66.231l-.4.81a.5.5 0 0 1-.356.268l-8.149 1.54a.5.5 0 0 1-.479-.174l-.894-1.089a.5.5 0 0 0-.81.053l-.45.718a.5.5 0 0 0 .017.554l1.493 2.1a.5.5 0 0 0 .276.194l5.924 1.61-4.282 4.346a.5.5 0 0 1-.218.13L5.81 13.879a.5.5 0 0 0-.24.153l-1.506 1.737a.5.5 0 0 0-.122.322l-.062 5.205a.5.5 0 0 0 .11.318Z\"/>";

export const So = /*#__PURE__*/ defineComponent({
  name: 'GeoSo',
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
