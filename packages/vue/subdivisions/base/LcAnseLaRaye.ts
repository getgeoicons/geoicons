// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.087 22.368a.6.6 0 0 0 .865-.04l2.379-2.716a1 1 0 0 0 .08-1.213l-.455-.683a2 2 0 0 1-.282-1.568l1.068-4.53a1 1 0 0 0-.156-.806l-1.763-2.5a.6.6 0 0 0-.82-.156l-.915.601a.6.6 0 0 1-.838-.184L13.226 5.32a1 1 0 0 0-.55-.426l-2.344-.735a1 1 0 0 1-.669-.701l-.46-1.764a.6.6 0 0 0-.636-.446l-.024.002a.6.6 0 0 0-.446.27L4.435 7.123a.6.6 0 0 0 .1.774l5.09 4.596q.076.07.165.121l1.826 1.069a2 2 0 0 1 .935 1.264l.407 1.715c.071.302.213.584.413.823l1.754 2.093a1 1 0 0 1 .233.674l-.035 1.11a.6.6 0 0 0 .186.453z\"/>";

export const LcAnseLaRaye = /*#__PURE__*/ defineComponent({
  name: 'GeoLcAnseLaRaye',
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
