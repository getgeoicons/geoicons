// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.344 12.43-.635.6a1 1 0 0 0-.229 1.126l.166.38a1 1 0 0 0 .845.599l1.31.094c.212.015.42.064.616.145l1.77.726a2 2 0 0 1 .971.846l.262.45a2 2 0 0 0 1.044.875l2.033.741c.25.091.517.132.783.119l1.913-.095a1 1 0 0 1 .565.143l.777.468a2 2 0 0 0 .964.285l4.822.165a1 1 0 0 1 .939.767l.15.628a.66.66 0 0 0 1.297-.236l-.157-1.25a2 2 0 0 0-.39-.958l-1.312-1.733a1 1 0 0 1-.203-.612l.009-.991a1 1 0 0 0-.168-.562l-1.134-1.705a.6.6 0 0 1 .13-.806l.98-.762c.13-.1.232-.231.299-.38l.025-.057a1 1 0 0 0-.119-1.018L19.055 8.32a2 2 0 0 1-.41-1.339l.2-3.292a.6.6 0 0 0-.477-.624L13.52 2.07a.6.6 0 0 0-.566.186L9.808 5.734a2 2 0 0 1-.673.487L5.466 7.845a2 2 0 0 0-.95.878l-1.594 2.953a3 3 0 0 1-.578.753Z\"/>";

export const KnTrinityPalmettoPoint = /*#__PURE__*/ defineComponent({
  name: 'GeoKnTrinityPalmettoPoint',
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
