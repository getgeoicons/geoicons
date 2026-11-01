// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.479 20.49 2.966-4.29q.176-.255.267-.55l.439-1.433a2 2 0 0 1 .675-.986l3.073-2.417a.8.8 0 0 0 .306-.616l.026-1.653a.8.8 0 0 0-.683-.804l-2.46-.363a1 1 0 0 1-.827-1.223l.857-3.557a.8.8 0 0 0-.256-.794l-.352-.303a.8.8 0 0 0-.785-.15l-1.606.56a1 1 0 0 1-.609.016l-1.35-.394a.8.8 0 0 0-1.024.744l-.062 2.058A1.5 1.5 0 0 1 10.8 5.773l-3.544.537a1 1 0 0 1-1.132-.8l-.08-.419a1 1 0 0 0-.81-.797l-1.279-.223a.8.8 0 0 0-.923.639l-.2 1.049a.78.78 0 0 0 .198.685 69 69 0 0 0 1.89 1.894c.24.235.35.573.29.904l-.308 1.692a.8.8 0 0 0 .475.88l.357.151a.8.8 0 0 1 .479.857l-.32 2.106a2 2 0 0 0 .178 1.174l2.943 6.061a1 1 0 0 0 1.012.557l.16-.018a1 1 0 0 0 .41-.142l1.987-1.22a3 3 0 0 0 .896-.85Z\"/>";

export const Bi = /*#__PURE__*/ defineComponent({
  name: 'GeoBi',
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
