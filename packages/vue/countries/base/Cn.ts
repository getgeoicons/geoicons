// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.635 18.504-1.824.77a.5.5 0 0 1-.23.038l-3.93-.278a.5.5 0 0 1-.424-.302L9.354 16.7a.5.5 0 0 0-.634-.272l-1.196.446a.5.5 0 0 1-.364-.005l-3.667-1.496a.5.5 0 0 1-.294-.593l.174-.647a.5.5 0 0 0-.152-.505l-1.433-1.264a.5.5 0 0 1 .13-.833l1.39-.61a.5.5 0 0 0 .299-.442l.034-1.145a.5.5 0 0 1 .179-.368l1.94-1.63a.5.5 0 0 1 .761.143l.754 1.382a.5.5 0 0 0 .258.227l4.471 1.737a.5.5 0 0 0 .397-.015l4.493-2.154a.5.5 0 0 0 .192-.74l-.628-.89a.5.5 0 0 1-.023-.541l.866-1.472a.5.5 0 0 1 .408-.246l1.456-.068a.5.5 0 0 1 .504.363l.369 1.292a.5.5 0 0 0 .328.34l1.858.593a.5.5 0 0 1 .288.714l-1.333 2.458a.5.5 0 0 1-.232.217l-1.864.848a.5.5 0 0 0-.2.165l-1.39 1.95a.5.5 0 0 0-.048.498l.776 1.693a.5.5 0 0 1-.037.484l-1.327 2.006a.5.5 0 0 1-.222.185Z\"/>";

export const Cn = /*#__PURE__*/ defineComponent({
  name: 'GeoCn',
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
