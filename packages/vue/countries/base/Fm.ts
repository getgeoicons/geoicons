// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.575 5.067-3.14 2.747a.5.5 0 0 0-.152.508l.734 2.686a.5.5 0 0 0 .545.364l1.308-.167a.5.5 0 0 1 .496.246l1.027 1.78a.5.5 0 0 1 .058.343l-.587 3.063a.5.5 0 0 0 .058.345l1.36 2.348a.5.5 0 0 0 .35.243l2.737.456a.5.5 0 0 1 .212.09l1.422 1.036a.5.5 0 0 0 .374.09l4.502-.72a.5.5 0 0 1 .237.02l2.203.734a.5.5 0 0 0 .612-.264l1.813-3.905a.5.5 0 0 0-.154-.61l-1.918-1.44a.5.5 0 0 1-.2-.374l-.06-1.207a.5.5 0 0 1 .552-.522l3.122.33a.5.5 0 0 0 .538-.62l-1.289-5.083a.5.5 0 0 0-.538-.374l-3.07.334a.5.5 0 0 1-.541-.385l-.738-3.187a.5.5 0 0 0-.494-.387l-3.856.053a.5.5 0 0 1-.12-.013l-3.884-.908a.5.5 0 0 0-.613.464l-.109 2.357a.5.5 0 0 1-.769.399l-1.43-.915a.5.5 0 0 0-.598.045Z\"/>";

export const Fm = /*#__PURE__*/ defineComponent({
  name: 'GeoFm',
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
