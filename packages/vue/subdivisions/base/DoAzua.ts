// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.736 21.913a.6.6 0 0 0 .755.65l.605-.167a1 1 0 0 0 .565-.406l1.117-1.663a1 1 0 0 1 .86-.442l1.52.047c.275.008.549-.054.793-.182l.148-.077c.4-.21.663-.61.697-1.06l.01-.116a1.158 1.158 0 0 1 1.39-1.046l.568.118a1.85 1.85 0 0 1 1.462 1.615l.034.313a2 2 0 0 1-.065.758l-.278.98a.3.3 0 0 0 .303.382l1.6-.075a1 1 0 0 0 .936-.816l.373-2a2 2 0 0 0-.269-1.424l-.674-1.082a2 2 0 0 0-.593-.61l-2.869-1.9a2 2 0 0 1-.88-1.419l-.41-3.278a1.36 1.36 0 0 0-1.24-1.188 1.36 1.36 0 0 1-.995-.564l-1.38-1.925a2 2 0 0 1-.343-1.521l.052-.285c.041-.23.042-.464.003-.693l-.118-.691a.936.936 0 0 0-1.724-.327l-.574.95a2 2 0 0 1-.817.753l-.8.4a1 1 0 0 0-.55.808l-.013.156a1 1 0 0 0 .202.695l.421.55a1 1 0 0 1 .147.947l-.142.396a.6.6 0 0 1-.654.39l-.812-.122a.6.6 0 0 0-.688.625l.081 1.539a1 1 0 0 1-.465.899L3.22 11.94a.6.6 0 0 0-.197.813l.379.642a1 1 0 0 0 .705.48l2.062.326a1 1 0 0 1 .77 1.362l-.874 2.166a1 1 0 0 0 .463 1.261l.243.127a2 2 0 0 1 1.059 2.011z\"/>";

export const DoAzua = /*#__PURE__*/ defineComponent({
  name: 'GeoDoAzua',
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
