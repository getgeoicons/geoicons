// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.33 22.79-1.23-.05a.5.5 0 0 1-.473-.576l1.17-7.615a.5.5 0 0 1 .129-.265l1.23-1.317a.5.5 0 0 1 .611-.095l.422.239a.5.5 0 0 0 .633-.119L8.348 9.91a.5.5 0 0 0-.13-.747L6.131 7.92a.5.5 0 0 1-.24-.5l.49-3.446a.5.5 0 0 1 .344-.407l2.495-.791a.5.5 0 0 1 .416.052l1.432.896a.5.5 0 0 0 .47.031l2.557-1.152a.5.5 0 0 1 .324-.03l1.823.443a.5.5 0 0 0 .47-.13L18.415 1.2l3.34 6.138q.035.065.05.135l.606 2.844a.5.5 0 0 1-.082.395l-4.008 5.601a.5.5 0 0 1-.617.163l-1.627-.752a.5.5 0 0 0-.563.1l-.989.988a.5.5 0 0 1-.233.132l-3.44.852a.5.5 0 0 0-.364.358l-.723 2.749a.5.5 0 0 1-.484.372H5.14a.5.5 0 0 0-.375.17L3.726 22.62a.5.5 0 0 1-.396.17Z\"/>";

export const Ug = /*#__PURE__*/ defineComponent({
  name: 'GeoUg',
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
