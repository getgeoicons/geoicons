// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.287 11.268-.955 2.12a.5.5 0 0 0 .08.535L4.2 17.095a.5.5 0 0 0 .393.17l3.666-.132a.5.5 0 0 0 .47-.387l.186-.808a.5.5 0 0 1 .303-.353l2.217-.875a.5.5 0 0 1 .388.008l.979.437a.5.5 0 0 0 .609-.163l1.369-1.891a.5.5 0 0 1 .372-.206l2.893-.193a.5.5 0 0 1 .47.256l.448.805a.5.5 0 0 0 .499.254l1.226-.154a.5.5 0 0 0 .392-.286l1.72-3.728-3.733-1.903a.5.5 0 0 0-.355-.038l-1.715.452a.5.5 0 0 1-.298-.013l-1.354-.492a.5.5 0 0 0-.388.02l-1.859.897a.5.5 0 0 1-.628-.166l-1.024-1.482a.5.5 0 0 0-.68-.137l-.985.628a.5.5 0 0 1-.314.076l-1.675-.153a.5.5 0 0 0-.43.178L4.615 11.01a.5.5 0 0 1-.46.174l-1.335-.205a.5.5 0 0 0-.532.289Z\"/>";

export const Sk = /*#__PURE__*/ defineComponent({
  name: 'GeoSk',
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
