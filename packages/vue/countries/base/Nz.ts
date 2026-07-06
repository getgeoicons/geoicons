// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.646 22.656 4.694 21.39a.5.5 0 0 1-.132-.836l5.414-4.75a.5.5 0 0 0 .117-.152l1.528-3.055a.5.5 0 0 1 .568-.262l1.316.33a.5.5 0 0 1 .369.386l.152.761a.5.5 0 0 1-.076.379l-1.033 1.524a.5.5 0 0 0-.08.204l-.218 1.405a.5.5 0 0 1-.308.387l-1.702.685a.5.5 0 0 0-.301.355l-.375 1.687a.5.5 0 0 1-.109.218l-1.602 1.865a.5.5 0 0 1-.576.134Zm8.327-9.821-.414-.132a.5.5 0 0 1-.338-.577l.186-.9a.5.5 0 0 0-.23-.529l-1.203-.733a.5.5 0 0 1-.169-.684l1.046-1.751a.5.5 0 0 0 .008-.5l-2.62-4.698a.5.5 0 0 1 .214-.691l.458-.229a.5.5 0 0 1 .657.198l2.999 5.215a.5.5 0 0 0 .24.212l.774.324a.5.5 0 0 0 .54-.102l.43-.416a.5.5 0 0 1 .458-.128l.507.114a.5.5 0 0 1 .37.627l-.26.897a.5.5 0 0 1-.19.27l-1.414.998a.5.5 0 0 0-.164.197l-1.28 2.752a.5.5 0 0 1-.605.266Z\"/>";

export const Nz = /*#__PURE__*/ defineComponent({
  name: 'GeoNz',
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
