// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.243 1.613 5.74 1.2l1.968 6.17a1 1 0 0 0 .228.385l1.397 1.468a1 1 0 0 1-.327 1.606l-.97.422L9.203 13a1 1 0 0 0 .32.304l2.305 1.375q.171.103.29.264l.48.648a1 1 0 0 1 .178.787l-.241 1.231a1 1 0 0 0 .285.911l2.247 2.177a1 1 0 0 1 .196.265l.331.652a1 1 0 0 0 1.574.278l.453-.423a1 1 0 0 0 .134-1.309l-1.742-2.46a1 1 0 0 1-.14-.28l-1.158-3.735a1 1 0 0 0-.086-.198l-3.776-6.64a1 1 0 0 1-.124-.605z\"/>";

export const BajaCaliforniaPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoBajaCaliforniaPeninsula',
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
