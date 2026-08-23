// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.758 5.207a.6.6 0 0 0-.835-.562L10.836 8.09a3 3 0 0 0-1.16.877L8.5 10.427a3 3 0 0 0-.556 1.082l-.551 1.99a2 2 0 0 1-1.08 1.277L3.65 16.023c-.29.136-.602.224-.92.262l-.64.075a.99.99 0 0 0 .012 1.97l.788.082a1 1 0 0 0 .623-.14l2.255-1.367a.706.706 0 0 1 .928 1.032l-.24.313a.817.817 0 0 0 1.195 1.103l1.645-1.475a2 2 0 0 1 .87-.456l1.845-.44a1 1 0 0 0 .755-.814l.2-1.24a1 1 0 0 1 .929-.84l4.84-.28a1 1 0 0 0 .742-.397l1.006-1.338a1 1 0 0 1 .648-.387l.41-.063a1 1 0 0 0 .778-.621l.318-.807a1 1 0 0 0-.035-.814l-.677-1.352a1 1 0 0 0-.553-.493l-.973-.353a1 1 0 0 1-.658-.958z\"/>";

export const CuPinarDelRio = /*#__PURE__*/ defineComponent({
  name: 'GeoCuPinarDelRio',
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
