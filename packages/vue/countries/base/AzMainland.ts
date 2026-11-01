// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.41 3.831.556-.461a.6.6 0 0 1 .785.016l3.381 3.05a1 1 0 0 0 1.386-.045l2.203-2.26a.6.6 0 0 1 .949.118l2.856 4.928a1 1 0 0 0 .792.495l1.923.142a1 1 0 0 1 .785.483l.297.497a.6.6 0 0 1-.444.904l-2.29.27a1 1 0 0 0-.873.85l-.47 3.267a1 1 0 0 1-.517.738l-.97.521a1 1 0 0 0-.526.899l.03 1.74a.87.87 0 0 1-1.459.654l-1.593-1.471a.6.6 0 0 1-.11-.745l1.05-1.785a1 1 0 0 0-.15-1.208l-.682-.692a.6.6 0 0 0-.804-.046l-4.142 3.344a.6.6 0 0 1-.96-.326l-.56-2.324a1 1 0 0 0-.48-.635l-1.662-.943a.6.6 0 0 1-.257-.756l.452-1.07a.6.6 0 0 0-.215-.73l-1.365-.928a.6.6 0 0 1-.177-.805l.345-.575a.6.6 0 0 0-.198-.819l-1.51-.937a.6.6 0 0 1-.144-.894l.592-.71a.6.6 0 0 1 .739-.148l3.452 1.805a1.008 1.008 0 0 0 1.403-.545 1.01 1.01 0 0 0-.35-1.17L6.443 4.78a.6.6 0 0 1-.033-.949Z\"/>";

export const AzMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoAzMainland',
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
