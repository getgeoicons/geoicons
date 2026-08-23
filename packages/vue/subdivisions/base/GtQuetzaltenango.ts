// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.79 16.837a2 2 0 0 0 .602-.558l1.82-2.57a1 1 0 0 0 .043-1.087l-.715-1.206a.6.6 0 0 0-.678-.271l-.709.2a.6.6 0 0 1-.686-.285l-.844-1.509a1 1 0 0 1-.124-.404l-.315-3.718a1 1 0 0 1 .394-.883l.685-.516a.6.6 0 0 0 .236-.534l-.118-1.29a.6.6 0 0 0-.39-.509l-.74-.272a.6.6 0 0 0-.786.403l-.235.85a1 1 0 0 1-.793.72l-1.514.26a1 1 0 0 0-.685.47l-.121.2a1 1 0 0 0 .092 1.162l.64.758a1 1 0 0 1 .22.82l-.328 1.838a1 1 0 0 1-.18.419l-2.294 3.107a2 2 0 0 0-.382 1l-.143 1.515a1 1 0 0 1-.606.827l-.589.249q-.167.07-.349.078l-5.606.228a1 1 0 0 0-.667.292l-1.937 1.938a.6.6 0 0 0 .143.954l3.553 1.883q.325.173.684.261l3.74.927a1 1 0 0 0 1.18-.63L12.719 18a1 1 0 0 1 .395-.497l.919-.6a.6.6 0 0 1 .878.264l.623 1.437a.6.6 0 0 0 .86.276z\"/>";

export const GtQuetzaltenango = /*#__PURE__*/ defineComponent({
  name: 'GeoGtQuetzaltenango',
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
