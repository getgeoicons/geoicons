// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.407 8.993a2 2 0 0 0-.18.943l.068 1.293a1 1 0 0 0 .829.932l.503.087a1 1 0 0 1 .766.636l.32.854a2 2 0 0 0 .638.874l2.593 2.036a1 1 0 0 1 .317 1.144l-.456 1.19a.67.67 0 0 0 1.074.74l1.596-1.427a1 1 0 0 1 .603-.253l4.893-.312a1 1 0 0 0 .69-.34l1.176-1.35a.78.78 0 0 1 .83-.229l.013.004a.76.76 0 0 1 .513.597.758.758 0 0 0 1.004.589l.605-.217a1 1 0 0 0 .59-.566l1.06-2.617a1 1 0 0 0 .04-.63l-.306-1.156a1 1 0 0 1 .035-.619l1.228-3.15a1 1 0 0 0-.538-1.283l-1.028-.44a1 1 0 0 0-1.139.252l-.937 1.048a1 1 0 0 1-1.309.159l-1.324-.903a1 1 0 0 1-.436-.864l.004-.112a1 1 0 0 0-.829-1.022l-4.534-.786a1 1 0 0 0-.667.118l-.833.476a1 1 0 0 1-.917.039l-1.185-.55a1 1 0 0 0-.645-.067l-2.29.525a1 1 0 0 0-.684.556z\"/>";

export const DoSanchezRamirez = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSanchezRamirez',
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
