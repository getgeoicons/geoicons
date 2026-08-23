// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.373 7.783-.86-2.266a3 3 0 0 1-.192-.904L1.233 2.98a.6.6 0 0 1 .576-.632l.382-.014a.6.6 0 0 1 .613.49l.238 1.292a.3.3 0 0 0 .296.245l2.654-.001a.3.3 0 0 1 .3.291l.023.796a.3.3 0 0 0 .303.292l1.263-.015a1 1 0 0 1 .67.246l1.996 1.742a2 2 0 0 0 1.03.473l.997.144a2 2 0 0 1 .998.445l4.102 3.43a2 2 0 0 1 .61.89l.258.757a.967.967 0 0 0 1.572.398.967.967 0 0 1 1.328.012l.32.307a2 2 0 0 1 .513.819l.327.998a1 1 0 0 1-.265 1.04l-2.088 1.963a.6.6 0 0 1-.8.02l-.27-.23a.824.824 0 0 0-1.36.638l.011.846a.749.749 0 0 1-1.427.326l-.79-1.7a1 1 0 0 1 .247-1.173l.428-.375a1 1 0 0 0 .339-.81l-.144-2.457a2 2 0 0 0-.776-1.468l-3.452-2.658a2 2 0 0 0-.866-.384l-1.78-.32a1 1 0 0 1-.734-.572l-.294-.65a1 1 0 0 0-.606-.541l-.823-.263a1 1 0 0 0-.558-.015l-3.033.793a1 1 0 0 1-1.188-.612Z\"/>";

export const KnSaintGeorgeBasseterre = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintGeorgeBasseterre',
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
