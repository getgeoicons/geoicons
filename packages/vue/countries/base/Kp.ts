// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.715 9.891-5.04 3.616a.5.5 0 0 0 .087.863l2.608 1.162a.5.5 0 0 1 .263.637l-1.731 4.485a.5.5 0 0 0 .31.655l4.307 1.42a.5.5 0 0 0 .413-.046l5.436-3.24a.5.5 0 0 0 .037-.836L12.52 17.25a.5.5 0 0 1-.204-.463l.282-2.43a.5.5 0 0 1 .23-.366l5.98-3.745a.5.5 0 0 0 .226-.511l-.379-2.147a.5.5 0 0 1 .145-.446l2.887-2.785a.5.5 0 0 0 .024-.694l-1.77-1.966a.5.5 0 0 0-.796.071l-1.923 3.108a.5.5 0 0 1-.419.237l-2.428.03a.5.5 0 0 0-.49.434L13.628 7.5a.5.5 0 0 1-.782.343L10.428 6.15a.5.5 0 0 0-.727.172l-1.837 3.4a.5.5 0 0 1-.149.17Z\"/>";

export const Kp = /*#__PURE__*/ defineComponent({
  name: 'GeoKp',
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
