// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.992 5.292-.94-3.656L4.857 1.2l.567 1.277a.6.6 0 0 0 .47.35l1.324.174.254-1.02 1.785.17.064 2.097a1 1 0 0 0 .696.923l2.562.816a1 1 0 0 0 1.297-.835l.21-1.764 1.407-.403 1.832 1.003a1 1 0 0 1 .42.443l.242.501a1 1 0 0 0 1.056.553l3.592-.563-.167 3.03a1 1 0 0 1-.07.314l-.35.887a1 1 0 0 1-.382.468l-3.017 1.976a1 1 0 0 0-.442.979l.225 1.564a1 1 0 0 1-.469.995l-1.142.698a1 1 0 0 0-.451.622l-.396 1.662a1 1 0 0 1-.35.55l-4.007 3.186a1 1 0 0 1-.415.195l-3.125.663a1 1 0 0 1-.774-.154l-1.111-.764a1 1 0 0 1-.424-.69l-.182-1.344a1 1 0 0 0-.117-.352L4.196 17.12a1 1 0 0 1-.113-.327l-.518-3.21a1 1 0 0 0-.103-.308L1.598 9.74a1 1 0 0 1-.021-.891l1.352-2.885a1 1 0 0 0 .063-.673Z\"/>";

export const SouthernAfrica = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthernAfrica',
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
