// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.904 1.895a.88.88 0 0 0-1.429.386l-.86 2.734a1 1 0 0 1-.504.592l-.909.459a1 1 0 0 0-.485.54l-1.354 3.601a2 2 0 0 0-.119.894l.1 1.057a1 1 0 0 0 .438.735l1.872 1.259a21 21 0 0 1 2.645 2.108l2.098 1.967 3.61 3.797a.3.3 0 0 0 .512-.152l.544-2.886a.3.3 0 0 0-.063-.247l-.9-1.09a.3.3 0 0 1-.029-.34l2.493-4.356a.3.3 0 0 1 .27-.15l6.755.21a1 1 0 0 0 1.019-.842l.104-.655a1 1 0 0 0-.333-.913L16.061 5.13a2 2 0 0 1-.585-.867l-.496-1.457a1 1 0 0 0-.606-.618l-.36-.131a1 1 0 0 0-.975.166L9.753 4.917a1 1 0 0 1-1.226.033l-.344-.253a1 1 0 0 1-.395-.64l-.212-1.262a1 1 0 0 0-.314-.575z\"/>";

export const MxChiapas = /*#__PURE__*/ defineComponent({
  name: 'GeoMxChiapas',
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
