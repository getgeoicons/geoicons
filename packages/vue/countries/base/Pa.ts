// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.538 10.325-3.323-2.41a.5.5 0 0 0-.261-.093l-.736-.048a.5.5 0 0 0-.532.517l.087 2.3a.5.5 0 0 1-.046.23l-.493 1.062a.5.5 0 0 0-.024.358l.451 1.455 1.114-.931a.5.5 0 0 1 .42-.107l2.294.466a.5.5 0 0 1 .347.263l.563 1.105a.5.5 0 0 0 .323.258l1.613.406a.5.5 0 0 1 .36.356l.249.93a.5.5 0 0 0 .656.34l2.617-.963a.5.5 0 0 0 .194-.809l-1.431-1.541a.5.5 0 0 1 .075-.747l3.592-2.567a.5.5 0 0 1 .527-.033l3.17 1.704a.5.5 0 0 1 .218.649l-.524 1.146a.5.5 0 0 0 .035.48l1.5 2.315a.5.5 0 0 0 .784.07l2.287-2.437a.5.5 0 0 0 .11-.5l-.814-2.458a.5.5 0 0 0-.143-.217L19.6 8.929a.5.5 0 0 0-.181-.103l-5.365-1.692a.5.5 0 0 0-.55.176l-.847 1.122a.5.5 0 0 1-.171.144l-3.865 1.98a.5.5 0 0 1-.289.052l-1.561-.191a.5.5 0 0 1-.233-.092Z\"/>";

export const Pa = /*#__PURE__*/ defineComponent({
  name: 'GeoPa',
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
