// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.984 6.666-.889-.881a.5.5 0 0 0-.634-.057l-.512.35a.5.5 0 0 0-.218.422l.028 1.57a.5.5 0 0 0 .207.397L6.57 9.626a.5.5 0 0 1 .152.176l4.797 9.319a.5.5 0 0 0 .184.198l5.301 3.231a.5.5 0 0 0 .676-.15l1.162-1.742a.5.5 0 0 0 .063-.422l-.43-1.429a.5.5 0 0 1-.001-.285l.716-2.431a.5.5 0 0 0-.131-.5l-1.514-1.475a.5.5 0 0 1-.143-.27l-.202-1.121a.5.5 0 0 0-.628-.393l-1.169.33a.5.5 0 0 1-.558-.214l-1.441-2.283a.5.5 0 0 1-.017-.507l1.17-2.142a.5.5 0 0 1 .317-.246l2.584-.649a.5.5 0 0 0 .378-.473l.03-1.339a.5.5 0 0 0-.355-.49l-1.238-.374a.5.5 0 0 0-.171-.02l-1.25.066a1 1 0 0 1-.778-.31L11.72 1.2l-.102 1.823a.5.5 0 0 1-.153.333l-.9.864a.5.5 0 0 1-.199.117l-1.537.474a.5.5 0 0 0-.299.252l-.747 1.474a.5.5 0 0 1-.798.129Z\"/>";

export const Pe = /*#__PURE__*/ defineComponent({
  name: 'GeoPe',
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
