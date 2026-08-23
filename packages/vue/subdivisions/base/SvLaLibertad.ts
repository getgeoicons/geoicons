// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.209 18.765a.3.3 0 0 0 .157.502l3.36.671 5.937.403c.382.026.755.125 1.099.29l4.21 2.027a.3.3 0 0 0 .41-.164l.65-1.718a.3.3 0 0 0-.256-.405l-1.318-.107a1 1 0 0 1-.815-.555l-.381-.772a2 2 0 0 1-.206-.884v-3.544a1 1 0 0 0-.26-.673l-.793-.872a1 1 0 0 1-.239-.877l1.202-5.755a1 1 0 0 0-.21-.843l-1.069-1.287a1 1 0 0 1-.141-1.052l.177-.39a.83.83 0 0 0-.433-1.108l-.647-.273a1 1 0 0 0-.836.027l-1.32.66a1 1 0 0 0-.548.799l-.158 1.65a1 1 0 0 1-.311.634l-1.316 1.236a1 1 0 0 0-.315.719l-.037 3.689a1 1 0 0 1-.367.763l-1.414 1.159a1 1 0 0 0-.362.866l.094 1.014a1 1 0 0 1-.276.788z\"/>";

export const SvLaLibertad = /*#__PURE__*/ defineComponent({
  name: 'GeoSvLaLibertad',
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
