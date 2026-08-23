// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.586 4.17a1 1 0 0 0-.368-.209l-1.135-.354a2 2 0 0 0-1.417.085l-1.149.517q-.3.136-.567.334l-9.213 6.899a.6.6 0 0 0-.237.55l.058.487a.6.6 0 0 1-.608.67l-2.1-.041a.6.6 0 0 0-.61.636l.026.436a.6.6 0 0 0 .565.562l1.384.077a.6.6 0 0 1 .548.749l-.218.846a2 2 0 0 0 .233 1.547l.378.614a2 2 0 0 0 .981.817l2.194.85a2 2 0 0 0 1.844-.21l.858-.58a2 2 0 0 1 1.224-.342l1.09.055a1 1 0 0 0 .939-.538l1.362-2.63a.6.6 0 0 1 .695-.303l.816.23a.6.6 0 0 0 .702-.314l.369-.757a2 2 0 0 1 .984-.951l2.43-1.083a1 1 0 0 0 .59-.835l.048-.605a1 1 0 0 0-.34-.833l-1.77-1.54a.549.549 0 0 1 .502-.944l2.22.593a.603.603 0 0 0 .557-1.032z\"/>";

export const GtElProgreso = /*#__PURE__*/ defineComponent({
  name: 'GeoGtElProgreso',
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
