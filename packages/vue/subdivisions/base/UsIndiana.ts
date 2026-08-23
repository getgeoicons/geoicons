// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.23 1.2a.3.3 0 0 0-.054.005l-2.662.493a.3.3 0 0 0-.245.294L7.228 17.37a1 1 0 0 1-.194.589L5.57 19.954a1 1 0 0 0-.191.662l.097 1.378a.6.6 0 0 0 .812.518l1.077-.41a1 1 0 0 1 .54-.049l1.586.297a1 1 0 0 0 .837-.225l1.278-1.102a1 1 0 0 1 1.151-.11l.4.23a1 1 0 0 0 1.36-.358l1.54-2.61a1 1 0 0 1 .637-.466l1.72-.397a.3.3 0 0 0 .233-.293l-.043-15.52a.3.3 0 0 0-.3-.3z\"/>";

export const UsIndiana = /*#__PURE__*/ defineComponent({
  name: 'GeoUsIndiana',
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
