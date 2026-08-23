// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.955 9.184a.698.698 0 0 0-.318 1.293l1.21.74a1 1 0 0 0 .64.14l1.59-.19a2 2 0 0 1 1.283.28l1.112.683a3 3 0 0 1 1.133 1.253l.756 1.564a1 1 0 0 0 .914.565l.924-.012a.594.594 0 0 0 .41-1.018l-.379-.372a.967.967 0 0 1 .391-1.612l.305-.095c.89-.277 1.813-.428 2.744-.45l1.256-.029c.623-.014 1.247.03 1.863.132l3.906.646a.6.6 0 0 0 .645-.838l-.717-1.591a1 1 0 0 0-.973-.588l-5.472.331a.6.6 0 0 1-.528-.254l-.563-.803a.6.6 0 0 0-.571-.25l-3.146.422a3 3 0 0 1-.813-.003l-1.868-.26a3 3 0 0 0-.613-.023z\"/>";

export const HtSud = /*#__PURE__*/ defineComponent({
  name: 'GeoHtSud',
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
