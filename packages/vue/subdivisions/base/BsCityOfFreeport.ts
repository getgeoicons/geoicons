// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.651 14.369-.365 2.554a.6.6 0 0 0 .52.68l4.151.523a2 2 0 0 0 .617-.018l2.883-.538a2 2 0 0 0 .79-.335l3.18-2.258q.28-.197.596-.328l1.972-.81q.387-.16.716-.418l2.153-1.696a1 1 0 0 1 .475-.204l1.454-.21a2 2 0 0 0 .671-.224l.805-.44a.6.6 0 0 0 .237-.818l-1.419-2.547a1 1 0 0 0-.958-.51l-2.059.174a1 1 0 0 1-.8-.297l-.46-.473a.6.6 0 0 0-.742-.093l-2.695 1.642a1 1 0 0 1-.557.145l-1.29-.048a2 2 0 0 0-.873.166l-5.307 2.317a.6.6 0 0 0-.36.513l-.068 1.108a.6.6 0 0 1-.332.5l-2.39 1.189a1 1 0 0 0-.545.754Z\"/>";

export const BsCityOfFreeport = /*#__PURE__*/ defineComponent({
  name: 'GeoBsCityOfFreeport',
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
