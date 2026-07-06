// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.705 7.275 7.507 7.21a.6.6 0 0 1-.577-.728l.482-2.196a.6.6 0 0 0-.729-.711l-2.573.632a.6.6 0 0 0-.424.779l.642 1.858-1.684-.114a.6.6 0 0 0-.563.305L1.45 8.161a.6.6 0 0 0 .149.763l1.156.922a1 1 0 0 0 .357.181l4.138 1.144a1 1 0 0 1 .47.288l1.966 2.14a1 1 0 0 1 .258.582l.111 1.155a1 1 0 0 0 .37.685l2.488 1.992c.115.092.25.158.393.192l1.865.444a1 1 0 0 1 .567.371l.92 1.222a.6.6 0 0 0 .765.167l.51-.276a.6.6 0 0 0 .192-.89l-.023-.03a.6.6 0 0 1 .28-.929l.914-.322a.6.6 0 0 1 .714.258l.872 1.457a.6.6 0 0 0 .935.12l.623-.612a.6.6 0 0 0 .074-.768l-.874-1.27a2 2 0 0 0-.83-.69l-.394-.176a2 2 0 0 0-.666-.169l-.291-.022a2 2 0 0 0-1.12.245l-1.58.877a1 1 0 0 1-1.14-.12l-1.427-1.236a1 1 0 0 1-.216-.263l-.646-1.142a1 1 0 0 1-.108-.697l.916-4.373a1 1 0 0 0-.456-1.057l-1.469-.902a1 1 0 0 0-.508-.147Z\"/>";

export const CentralAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoCentralAmerica',
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
