// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.55 22.8-.929-2.038 3.504-4.344a.5.5 0 0 1 .724-.058l.754.678a.5.5 0 0 1 .054.686zm16.033-7.98-.607 3.116a.5.5 0 0 1-.157.277l-2.116 1.893a.5.5 0 0 1-.243.119l-3.898.717a.5.5 0 0 1-.559-.317l-.325-.87a.5.5 0 0 1 .035-.423l.665-1.166a.5.5 0 0 0 .054-.138l.352-1.572a.5.5 0 0 1 .254-.333l3.192-1.686a.5.5 0 0 0 .263-.39l.056-.536a.5.5 0 0 0-.43-.547l-2.247-.305a.5.5 0 0 1-.427-.422l-.746-5.058a.5.5 0 0 1 .025-.244l1.577-4.337a.5.5 0 0 1 .218-.26L16.3 1.296a.5.5 0 0 1 .354-.058l1.62.335a.5.5 0 0 1 .371.324l.41 1.167a.5.5 0 0 0 .343.317l1.323.353a.5.5 0 0 1 .367.422l.278 2.267a.5.5 0 0 1-.014.194l-.724 2.626a.5.5 0 0 0-.015.181l.4 4.103a.5.5 0 0 1-.274.496l-.889.444a.5.5 0 0 0-.267.352Z\"/>";

export const Ps = /*#__PURE__*/ defineComponent({
  name: 'GeoPs',
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
