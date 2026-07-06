// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.207 6.045-3.478 7.35a.5.5 0 0 0 .15.612l.612.464a.5.5 0 0 1 .197.383l.03.963a.5.5 0 0 1-.133.354l-.554.602a.5.5 0 0 0-.027.646l1.868 2.396a.5.5 0 0 0 .337.19l1.502.174q.12.016.221.082l1.541 1.04a.5.5 0 0 1 .217.353l.084.682a.5.5 0 0 0 .524.438l.588-.033a.5.5 0 0 0 .452-.64l-.235-.796a.5.5 0 0 1 .036-.371l.657-1.268a.5.5 0 0 1 .239-.225l.76-.342a.5.5 0 0 0 .28-.343l.949-4.064a.5.5 0 0 0 .002-.215l-.577-2.797a.5.5 0 0 1 .063-.361l.66-1.083a.5.5 0 0 0 .07-.198l.189-1.505a.5.5 0 0 0-.019-.21L16.6 5.694a.5.5 0 0 1-.018-.215l.146-1.083a.5.5 0 0 0-.227-.488l-.92-.587a.5.5 0 0 1-.222-.335l-.197-1.12a.5.5 0 0 0-.383-.402l-.86-.193a.5.5 0 0 0-.516.196l-.246.344a.5.5 0 0 0-.092.242l-.074.737a.5.5 0 0 1-.247.383l-.58.336a.5.5 0 0 0-.24.344l-.275 1.523a.5.5 0 0 1-.523.41l-.435-.027a.5.5 0 0 0-.483.285Z\"/>";

export const Lc = /*#__PURE__*/ defineComponent({
  name: 'GeoLc',
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
