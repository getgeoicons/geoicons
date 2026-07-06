// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.201 20.35-1.664 1.53a.25.25 0 0 0 .13.43l2.918.462a.5.5 0 0 0 .328-.06L10.54 21.2a.5.5 0 0 0 .213-.243l1.493-3.622a.5.5 0 0 0 .033-.118l.642-4.426a.5.5 0 0 0-.445-.569l-2.345-.236a.5.5 0 0 0-.385.126L7.59 14.058a.5.5 0 0 0-.104.133L6.122 16.7a.5.5 0 0 0-.058.29l.297 2.942a.5.5 0 0 1-.16.418ZM16.992 3.327l-1.312.444a.5.5 0 0 0-.336.408l-.182 1.387a.5.5 0 0 0 .693.525l2.958-1.268a.5.5 0 0 0 .288-.337l.611-2.427a.5.5 0 0 0-.398-.615l-.967-.17a.5.5 0 0 0-.56.33l-.482 1.411a.5.5 0 0 1-.313.312Z\"/>";

export const Gd = /*#__PURE__*/ defineComponent({
  name: 'GeoGd',
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
