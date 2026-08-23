// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.86 1.803a1 1 0 0 0-.923-.598l-2.276.016a1 1 0 0 0-.5.137L10.4 2.978a.6.6 0 0 0-.11.952l.958.915a1 1 0 0 1 .293.902l-.418 2.298a1 1 0 0 1-.27.521l-.934.953a1 1 0 0 0-.21 1.083l.172.413a1 1 0 0 1-.355 1.206L7.77 13.432a1 1 0 0 0-.432.843l.08 4.06a.6.6 0 0 1-.494.602l-.562.1a.6.6 0 0 0-.495.611l.027.778a2 2 0 0 0 .287.966l.544.9a1 1 0 0 0 .9.482l1.062-.046a2 2 0 0 0 1.01-.326l4.671-3.064a1 1 0 0 1 .595-.163l2.02.093a1 1 0 0 0 1.045-1.022l-.017-.735a1 1 0 0 0-.861-.967l-1.948-.273a1 1 0 0 1-.8-.647l-1.516-4.146a3 3 0 0 1-.099-1.734l.494-2.046a2 2 0 0 1 .303-.674l.427-.612a2 2 0 0 1 1.08-.776l2.402-.702a.6.6 0 0 0 .381-.817z\"/>";

export const NiGranada = /*#__PURE__*/ defineComponent({
  name: 'GeoNiGranada',
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
