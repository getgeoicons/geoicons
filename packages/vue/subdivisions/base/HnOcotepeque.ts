// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.202 3.445a1 1 0 0 0-.563.433l-.552.898a1 1 0 0 0-.133.697l.307 1.744a.902.902 0 0 1-1.012 1.049l-1.42-.198a1 1 0 0 0-.941.394l-1.273 1.711a3 3 0 0 1-.789.736l-1.127.723a1 1 0 0 0-.459.91l.03.427a1 1 0 0 0 .697.886l5.667 1.782a.6.6 0 0 0 .67-.226l.906-1.281a.6.6 0 0 1 .49-.254h.098a.6.6 0 0 1 .597.535l.152 1.388a.8.8 0 0 0 .473.645l.695.306a1 1 0 0 1 .589.781l.15 1.114a1 1 0 0 0 .19.463l1.174 1.574a.603.603 0 0 0 1.076-.48l-.4-1.983a1.675 1.675 0 0 1 1.318-1.974l.692-.137a1 1 0 0 0 .801-.878l.043-.412a1 1 0 0 1 1.128-.888l1.325.178a1 1 0 0 0 .525-.072l1.21-.515a1 1 0 0 0 .59-.727l.44-2.238a1 1 0 0 0-.972-1.193l-1.74-.015a.78.78 0 0 0-.787.766.78.78 0 0 1-1.043.721l-.854-.305a1 1 0 0 1-.58-.54l-1.013-2.313a1 1 0 0 0-.244-.34l-1.432-1.3a1 1 0 0 1-.257-.37l-.676-1.698a1 1 0 0 0-.748-.614l-.973-.18a3 3 0 0 0-1.411.079z\"/>";

export const HnOcotepeque = /*#__PURE__*/ defineComponent({
  name: 'GeoHnOcotepeque',
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
