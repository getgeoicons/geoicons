// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.158 2.52a1 1 0 0 0-1.41-.758l-3.31 1.535a1 1 0 0 0-.507.534l-2.781 6.908a3 3 0 0 1-.532.862l-1.06 1.203a1 1 0 0 0-.248.694l.047 1.417a1 1 0 0 1-.749 1.002l-2.97.769a1 1 0 0 0-.748.902l-.068 1.03a1 1 0 0 0 .471.916l4.69 2.902a1 1 0 0 0 .821.105l4.258-1.312a1 1 0 0 1 1.017.265l.801.837a1 1 0 0 0 1.06.25l1.325-.476a1 1 0 0 0 .583-1.33l-.803-1.906a1 1 0 0 1 .22-1.101l.39-.386a2 2 0 0 0 .543-1.887L17.453 8.15a.6.6 0 0 1 .692-.729l1.3.24a.6.6 0 0 0 .706-.533l.041-.428a.6.6 0 0 0-.15-.46l-1.39-1.544a1 1 0 0 1-.246-.52z\"/>";

export const VcSaintDavid = /*#__PURE__*/ defineComponent({
  name: 'GeoVcSaintDavid',
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
