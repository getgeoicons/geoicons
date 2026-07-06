// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.664 17.904-5.127 1.041a1 1 0 0 1-1.066-.48l-.657-1.141a1 1 0 0 0-.224-.267L1.603 14.55a1 1 0 0 1-.352-.863l.21-2.155a.5.5 0 0 1 .356-.431l3.61-1.073a.5.5 0 0 0 .246-.165L8.458 6.43a.5.5 0 0 1 .654-.108l.834.524a.5.5 0 0 0 .651-.105l1.627-1.97a.5.5 0 0 1 .481-.172l1.986.388a.5.5 0 0 1 .32.768l-.533.8a.5.5 0 0 0 .172.714l2.035 1.14a.5.5 0 0 0 .731-.324l.84-3.626a.25.25 0 0 1 .463-.061l1.802 3.395a.5.5 0 0 1 .057.268l-.087 1.267a.5.5 0 0 0 .229.455l.589.377a1 1 0 0 1 .42 1.123l-.334 1.15a1 1 0 0 0-.016.498l.363 1.622a1 1 0 0 0 .187.396l.474.608a1 1 0 0 1 .096 1.081l-1.524 2.887a1 1 0 0 1-1.094.511l-2.445-.524-5.286-1.585a1 1 0 0 0-.486-.022Z\"/>";

export const Outback = /*#__PURE__*/ defineComponent({
  name: 'GeoOutback',
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
