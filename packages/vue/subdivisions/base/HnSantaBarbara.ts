// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.728 21.366a1 1 0 0 1 .333-.627l1.25-1.095a1 1 0 0 0 .268-1.127l-.92-2.274a1 1 0 0 1-.045-.606l.487-2.044a.6.6 0 0 0-.2-.6l-1.706-1.421a.6.6 0 0 1-.112-.8l.61-.891a.6.6 0 0 0 .082-.5l-.968-3.487a1 1 0 0 0-.676-.69l-1.213-.364a1 1 0 0 1-.696-.774l-.223-1.195a.8.8 0 0 0-.546-.616l-3.052-.96a.6.6 0 0 0-.548.097l-7.29 5.64a.6.6 0 0 0-.158.766l1.886 3.406a2 2 0 0 1 .106 1.716l-.85 2.111a.928.928 0 0 0 1.15 1.229l1.128-.37a1 1 0 0 1 1.173.444l1.047 1.781a.6.6 0 0 0 .513.296l2.035.016a.6.6 0 0 1 .583.48l.646 3.14a.6.6 0 0 0 .556.479l4.612.244a.6.6 0 0 0 .627-.524z\"/>";

export const HnSantaBarbara = /*#__PURE__*/ defineComponent({
  name: 'GeoHnSantaBarbara',
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
