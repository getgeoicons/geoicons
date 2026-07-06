// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.761 21.77H7.737a.5.5 0 0 1-.491-.595l.21-1.082a.5.5 0 0 0-.136-.446l-2.19-2.216a.5.5 0 0 1-.135-.446l.388-2.015a.5.5 0 0 1 .15-.272L7.78 12.61a.5.5 0 0 1 .615-.051l1.282.841a.5.5 0 0 0 .727-.205l3.929-8.349a.5.5 0 0 1 .217-.228l.904-.48a.5.5 0 0 0 .22-.651l-.714-1.551a.5.5 0 0 1 .471-.709l.764.025a.5.5 0 0 1 .432.28l.831 1.687a.5.5 0 0 1 .047.152l.46 3.322a.5.5 0 0 1-.566.564l-1.476-.209a.5.5 0 0 0-.478.207l-.288.408a.5.5 0 0 0 .116.694l1.742 1.258a.5.5 0 0 1 .16.19l.751 1.58a.5.5 0 0 1-.05.513l-1.681 2.27a.5.5 0 0 0-.098.319l.11 2.556a.5.5 0 0 0 .116.3l2.5 2.988a.5.5 0 0 1 .115.294l.078 1.451a.5.5 0 0 1-.652.503l-2.45-.785a.5.5 0 0 0-.153-.024Z\"/>";

export const Cm = /*#__PURE__*/ defineComponent({
  name: 'GeoCm',
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
