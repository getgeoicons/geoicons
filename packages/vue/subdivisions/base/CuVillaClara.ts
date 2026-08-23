// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.54 10.541a1 1 0 0 0 1.159.809l2.13-.377A1 1 0 0 1 9 11.896l.115 1.817a2 2 0 0 0 .53 1.233l1.18 1.275a2 2 0 0 1 .505 1.023l.6 3.524a.3.3 0 0 0 .426.22l1.343-.652a1 1 0 0 1 .716-.06l1.278.373a.3.3 0 0 0 .38-.243l.349-2.322a1 1 0 0 1 1.265-.813l1.845.532a1 1 0 0 0 .913-.19l1.944-1.6a.8.8 0 0 0 .257-.849l-.597-1.979a2 2 0 0 0-.616-.943l-1.294-1.105a2 2 0 0 1-.478-.603l-1.105-2.136a2 2 0 0 0-.897-.878L9.59 3.566a1 1 0 0 0-.785-.04l-1.984.727a1 1 0 0 1-.825-.062L4.072 3.135a1 1 0 0 0-1.044.05l-1.256.853a1 1 0 0 0-.43.705l-.079.638a1 1 0 0 0 .316.859l.469.43a1 1 0 0 0 .785.258l.111-.012a1 1 0 0 1 1.093.818z\"/>";

export const CuVillaClara = /*#__PURE__*/ defineComponent({
  name: 'GeoCuVillaClara',
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
