// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.566 22.089H2.59a.5.5 0 0 1-.5-.502l.045-14.52a.5.5 0 0 0-.028-.165L1.5 5.164a.5.5 0 0 1 .023-.383l.51-1.045a.5.5 0 0 0 .031-.353l-.3-1.078a.5.5 0 0 1 .09-.446l.351-.442a.5.5 0 0 1 .449-.185l2.861.33a.5.5 0 0 1 .102.023L9.863 3.01a.5.5 0 0 0 .373-.022l3.282-1.555a.5.5 0 0 1 .402-.012l2.688 1.088a.5.5 0 0 0 .288.027l2.467-.503a.5.5 0 0 1 .574.332l1.158 3.475a.5.5 0 0 1 .006.298l-.764 2.632a.5.5 0 0 1-.922.095l-1.94-3.664a.5.5 0 0 0-.842-.065l-.28.376a.5.5 0 0 0-.044.53l5.846 11.255q.038.073.05.155l.319 2.07a.5.5 0 0 1-.176.463l-3.145 2.593a.5.5 0 0 1-.568.048l-.82-.472a.5.5 0 0 0-.249-.066Z\"/>";

export const Eg = /*#__PURE__*/ defineComponent({
  name: 'GeoEg',
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
