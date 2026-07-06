// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.254 15.03-.836.799a.5.5 0 0 0-.136.498l.844 2.977a.5.5 0 0 0 .542.36l2.447-.304a.5.5 0 0 1 .51.276l1.144 2.33a.5.5 0 0 0 .508.275l2.585-.304a.5.5 0 0 0 .405-.31l1.326-3.286a.5.5 0 0 1 .23-.256l4.481-2.363a.5.5 0 0 1 .2-.056l4.994-.34a.5.5 0 0 0 .395-.242l.736-1.225a.5.5 0 0 0 .07-.243l.085-2.88a.5.5 0 0 0-.513-.514l-.828.023a.5.5 0 0 1-.514-.503l.004-.506a.5.5 0 0 0-.206-.408L11.1 1.827a.5.5 0 0 0-.291-.096l-1.514-.01a.5.5 0 0 0-.5.558l1.396 12.008a.5.5 0 0 1-.493.558l-7.103.047a.5.5 0 0 0-.342.138Z\"/>";

export const Ml = /*#__PURE__*/ defineComponent({
  name: 'GeoMl',
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
