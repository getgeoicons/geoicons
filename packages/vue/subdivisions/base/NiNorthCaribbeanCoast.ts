// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.205 20.13a2 2 0 0 0 1.607-.272l.935-.624c.265-.177.569-.288.886-.323l3.502-.394q.08-.008.16-.005l3.173.156a1 1 0 0 1 .886.643l.269.706a1 1 0 0 0 .368.468l1.126.774a.598.598 0 0 0 .935-.537l-.149-1.975a12 12 0 0 1 .1-2.687l.017-.112a12 12 0 0 1 1.344-3.983l1.012-1.845a3 3 0 0 0 .28-2.172l-.51-2.033a2 2 0 0 1 .05-1.138l.009-.028a2 2 0 0 1 .73-.976l.572-.408a.511.511 0 0 0-.309-.928l-2.292.053a2 2 0 0 0-.985.286l-3.035 1.827a4 4 0 0 1-.964.42l-3.553 1.014a4 4 0 0 1-1.563.127l-.27-.032a2 2 0 0 1-1.381-.805L7.989 5.1a1 1 0 0 0-1.335-.26l-.766.476a1 1 0 0 0-.462.999l.241 1.596a1 1 0 0 0 .663.796l.57.197a.6.6 0 0 1 .4.648l-.232 1.702a4 4 0 0 1-.693 1.764l-.815 1.156a.6.6 0 0 1-.68.224l-.684-.228a1 1 0 0 0-.881.123l-.792.542a2 2 0 0 0-.787 1.08l-.385 1.291a1 1 0 0 0 .182.916l.675.833a2 2 0 0 0 1.055.677z\"/>";

export const NiNorthCaribbeanCoast = /*#__PURE__*/ defineComponent({
  name: 'GeoNiNorthCaribbeanCoast',
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
