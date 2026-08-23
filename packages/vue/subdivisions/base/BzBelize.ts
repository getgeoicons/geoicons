// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.507 13.26a.3.3 0 0 0 .381.265l.76-.216a.3.3 0 0 1 .381.272l.33 6.014a3 3 0 0 1-.074.841l-.358 1.546a.6.6 0 0 0 .575.735l4.89.08a.6.6 0 0 0 .321-.087l.6-.363a.6.6 0 0 0 .289-.503l.05-2.86q.006-.4.092-.79l.852-3.872c.09-.41.5-.667.91-.57l.027.007a.914.914 0 0 0 .548-1.74l-1.338-.526a1 1 0 0 1-.58-1.254l.937-2.736q.09-.263.13-.537l.384-2.613q.05-.34.176-.66l.553-1.409a.6.6 0 0 0-.484-.814l-1.796-.225a2 2 0 0 0-.706.037L9.155 2.504a1 1 0 0 0-.71.627l-.28.758a1 1 0 0 0-.062.361l.048 3.123a1 1 0 0 1-.216.635l-1.421 1.8a1 1 0 0 0-.213.694z\"/>";

export const BzBelize = /*#__PURE__*/ defineComponent({
  name: 'GeoBzBelize',
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
