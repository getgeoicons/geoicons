// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.433 13.529.636 1.907a1 1 0 0 0 .839.678l3.655.402a.6.6 0 0 0 .582-.902l-.284-.478a1 1 0 0 1 .483-1.437l.946-.385a1 1 0 0 1 1.262.46l.29.553a1 1 0 0 0 .976.53l2.385-.217a1 1 0 0 1 .61.142l1.486.904a1 1 0 0 1 .464 1.034l-.378 2.08a.6.6 0 0 0 .513.703l3.676.477a1 1 0 0 0 1.125-1.074l-.262-3.212a1 1 0 0 0-.563-.82l-7.138-3.434a1 1 0 0 1-.54-.676l-.46-1.993a1 1 0 0 1-.01-.403l.956-5.305a1 1 0 0 0-.537-1.072l-.232-.116a1 1 0 0 0-1.018.073l-1.686 1.173a1 1 0 0 0-.293.317L9.757 5.425a1 1 0 0 1-.458.41L3.398 8.458a1 1 0 0 0-.412.339L1.709 10.61a1 1 0 0 0 .147 1.317l1.3 1.175a1 1 0 0 1 .277.426Zm9.577 7.651.127-1.154a.6.6 0 0 1 .872-.467l1.84.952a1 1 0 0 1 .485.558l.12.342a1 1 0 0 1-.944 1.33h-.436a1 1 0 0 1-.388-.078l-1.071-.45a1 1 0 0 1-.606-1.033Z\"/>";

export const ArcticCanada = /*#__PURE__*/ defineComponent({
  name: 'GeoArcticCanada',
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
