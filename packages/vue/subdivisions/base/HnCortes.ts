// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.875 1.728a.3.3 0 0 0-.343-.405l-3.618.796a1 1 0 0 0-.54.322L11.95 5.24a1 1 0 0 1-1.016.311l-1.332-.36a1 1 0 0 0-.92.215l-3.357 2.95a.3.3 0 0 0 .116.515l3.416.969a1 1 0 0 1 .552.396l2.68 3.905a.6.6 0 0 1 .047.598l-.423.89a.6.6 0 0 0 .072.63l1.13 1.421a1 1 0 0 1 .21.738l-.163 1.416a1 1 0 0 0 .169.681l1.217 1.77a.6.6 0 0 0 .855.14l3.183-2.393a1 1 0 0 0 .4-.796l.006-1.743a1 1 0 0 0-.438-.83l-2.672-1.82a1 1 0 0 1-.334-1.27l2.688-5.44a1 1 0 0 0 .04-.793l-.572-1.531a1 1 0 0 1 .01-.726z\"/>";

export const HnCortes = /*#__PURE__*/ defineComponent({
  name: 'GeoHnCortes',
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
