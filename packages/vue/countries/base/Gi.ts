// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.861 18.62v-1.61a1 1 0 0 1 .074-.377l.59-1.452a1 1 0 0 0 .003-.748L15.955 13a1 1 0 0 1-.066-.484l.364-3.22a.6.6 0 0 1 .226-.406l.546-.427a.6.6 0 0 0 .226-.402l.213-1.804a.6.6 0 0 0-.14-.46l-.455-.53a.6.6 0 0 1-.132-.512l.392-1.909a.6.6 0 0 0-.326-.66L15.187 1.4a2 2 0 0 0-.875-.201h-2.097a.3.3 0 0 0-.3.3v.965a.3.3 0 0 1-.3.3H9.319a2 2 0 0 0-.884.206l-1.595.786a.6.6 0 0 0-.334.538V6.03a.6.6 0 0 0 .503.593l.984.16a1.88 1.88 0 0 1 1.277.841l.1.158a2 2 0 0 1 .244.547l1.496 5.456a.3.3 0 0 1-.12.327l-.788.54a.3.3 0 0 0-.092.394l2.457 4.38a1 1 0 0 1 .119.626l-.115.832a1.7 1.7 0 0 0 .034.632l.017.067a1.45 1.45 0 0 0 .996 1.038l.327.096a.783.783 0 0 0 .976-.543l.905-3.29q.035-.131.035-.265Z\"/>";

export const Gi = /*#__PURE__*/ defineComponent({
  name: 'GeoGi',
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
