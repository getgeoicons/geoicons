// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.903 6.96-.661 1.493a.6.6 0 0 0 .044.568l3.442 5.347a1 1 0 0 1-.082 1.192l-.635.74a1 1 0 0 1-.898.34l-1.437-.202A1 1 0 0 1 4.982 16l-.493-.745a2 2 0 0 0-.493-.515l-1.519-1.102a.652.652 0 0 0-.934.875l1.665 2.647a1 1 0 0 0 .465.392l.722.297a1 1 0 0 1 .482.42l.441.754a1 1 0 0 0 .687.48l4.836.866a4 4 0 0 0 1.543-.025l3.45-.739q.411-.087.796-.259l5.567-2.488a1 1 0 0 0 .592-.93l-.006-.315a2 2 0 0 0-.478-1.265l-1.178-1.38a1 1 0 0 1-.19-.963l.39-1.183a1 1 0 0 0-.076-.8l-.419-.75a1 1 0 0 0-.498-.44l-1.518-.611a1 1 0 0 1-.615-1.07l.157-1.087a1 1 0 0 0-.68-1.094l-3.67-1.2a4 4 0 0 0-1.133-.196l-2.666-.073a1 1 0 0 0-.631.203L6.834 5.783a3 3 0 0 0-.931 1.177Z\"/>";

export const CuIsleOfYouth = /*#__PURE__*/ defineComponent({
  name: 'GeoCuIsleOfYouth',
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
