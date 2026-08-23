// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.012 22.15a.6.6 0 0 0 .56-.5l.788-4.657a1 1 0 0 1 .58-.747l2.4-1.067c.267-.119.504-.293.695-.513l3.496-4.005a.3.3 0 0 0-.105-.473l-1.45-.634a2 2 0 0 0-.725-.167l-.576-.022a2 2 0 0 1-1.061-.355L16.87 7.803a2 2 0 0 1-.332-.289l-2.634-2.857a3 3 0 0 1-.356-.471l-1.231-2.02a.6.6 0 0 0-.855-.18l-.424.295a1 1 0 0 0-.416.662l-.198 1.235a.8.8 0 0 1-.733.672l-4.457.316a.8.8 0 0 0-.661.445l-3.122 6.341a1 1 0 0 0 .061.99l1.099 1.677a.6.6 0 0 0 .683.242l1-.317a.6.6 0 0 1 .598.139l1.628 1.561a.6.6 0 0 1 .183.467l-.215 3.843a.6.6 0 0 0 .359.583l2.394 1.05a2 2 0 0 0 .908.166z\"/>";

export const BbSaintJoseph = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintJoseph',
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
