// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.706 18.058-.477 3.2a.5.5 0 0 0 .527.573l7.836-.519a.5.5 0 0 0 .146-.032l5.602-2.154a.5.5 0 0 0 .29-.639l-.262-.712a.5.5 0 0 0-.45-.328l-7.634-.28-5.129.467a.5.5 0 0 0-.449.424ZM4.957 2.176l-2.421.69a.5.5 0 0 0-.057.941L7.738 6.02a.5.5 0 0 0 .508-.073L9.651 4.81a.5.5 0 0 0-.123-.85L5.286 2.194a.5.5 0 0 0-.33-.019Zm9.888.071-1.876 1.108a.5.5 0 0 0-.234.318l-.36 1.571a.5.5 0 0 0 .47.612l3.846.134a.5.5 0 0 0 .419-.202l1.724-2.324-3.568-1.258a.5.5 0 0 0-.421.04Z\"/>";

export const Vi = /*#__PURE__*/ defineComponent({
  name: 'GeoVi',
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
