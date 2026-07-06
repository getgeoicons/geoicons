// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.473 15.944-.92-.342a.5.5 0 0 1-.326-.505l.149-2.008a.5.5 0 0 0-.035-.224l-.906-2.255a.5.5 0 0 1-.034-.235l.218-2.237a.5.5 0 0 1 .355-.43l3.176-.945a.5.5 0 0 0 .246-.164L7.844 3.58a.5.5 0 0 1 .655-.109l.665.418a.5.5 0 0 0 .652-.105l1.403-1.699a.5.5 0 0 1 .482-.172l1.665.325a.5.5 0 0 1 .32.768l-.4.601a.5.5 0 0 0 .171.714l1.707.955a.5.5 0 0 0 .731-.324l.695-3.001a.25.25 0 0 1 .474-.041l1.8 4.264a.5.5 0 0 0 .098.15l3.12 3.277a.5.5 0 0 1 .13.252l.374 1.986a.5.5 0 0 1-.022.264l-1.968 5.38a.5.5 0 0 1-.333.31l-2.136.604a.5.5 0 0 1-.25.006l-2.042-.48a.5.5 0 0 1-.367-.352l-.304-1.089a.5.5 0 0 0-.345-.346l-1.7-.482a.5.5 0 0 1-.198-.11L11 13.813a.5.5 0 0 0-.493-.103l-6.703 2.24a.5.5 0 0 1-.332-.006Zm16.145 4.332-1.35.151a.5.5 0 0 0-.417.659l.458 1.34a.5.5 0 0 0 .521.336l.722-.07a.5.5 0 0 0 .449-.438l.17-1.422a.5.5 0 0 0-.553-.556Z\"/>";

export const Au = /*#__PURE__*/ defineComponent({
  name: 'GeoAu',
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
