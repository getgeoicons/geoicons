// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.728 18.043-.71.97a.6.6 0 0 0 0 .709l1.89 2.586a.6.6 0 0 0 .845.126l.527-.398a1 1 0 0 1 .635-.2l2.36.077a1 1 0 0 0 .654-.216l.586-.466a1 1 0 0 0 .286-.362l.487-1.05a1 1 0 0 1 .547-.512l1.039-.401a1 1 0 0 0 .639-.98l-.255-5.356a1 1 0 0 0-.075-.334l-1.269-3.072a1 1 0 0 1-.076-.395l.034-2.578q0-.081-.011-.161l-.546-3.64c-5.327-.089-9.46-.83-10.862-1.19l1.15 3.545a1 1 0 0 0 .795.68l.413.065a1 1 0 0 1 .638.38l.927 1.21a1 1 0 0 1 .2.497l.74 6.587a1 1 0 0 1-.23.757l-.91 1.076a1 1 0 0 0-.235.62l-.02.86a1 1 0 0 1-.193.566Z\"/>";

export const GreatPlainsUs = /*#__PURE__*/ defineComponent({
  name: 'GeoGreatPlainsUs',
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
