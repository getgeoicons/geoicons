// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.529 5.991 4.09 4.876a1 1 0 0 1 1.228.05l5.134 4.35a1 1 0 0 0 .584.235l6.585.411a1 1 0 0 1 .393.108l2.677 1.371a1 1 0 0 1 .31.247l1.487 1.773a.6.6 0 0 1 .013.755l-2.625 3.358a1 1 0 0 1-.698.38l-1.55.14a1 1 0 0 1-.799-.288l-.711-.711a1 1 0 0 0-.707-.293h-1.095c-.426 0-.8.279-.923.686a.964.964 0 0 1-1.063.677l-1.366-.201a1 1 0 0 0-.628.113l-2.466 1.36a1 1 0 0 1-.692.101l-1.554-.333a1 1 0 0 1-.734-.645l-.746-2.113a1 1 0 0 1 .015-.704l.673-1.681a1 1 0 0 0-.222-1.079l-2.98-2.98a1 1 0 0 1-.247-1.009l.774-2.45a1 1 0 0 1 .372-.513Z\"/>";

export const Guianas = /*#__PURE__*/ defineComponent({
  name: 'GeoGuianas',
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
