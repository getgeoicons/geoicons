// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.817 8.2a2 2 0 0 0-.337.62l-1.294 3.885a1 1 0 0 0 .022.691l.457 1.128a2 2 0 0 1 .1 1.174l-.377 1.741a1 1 0 0 0 .013.479l.378 1.364a1 1 0 0 0 .506.623l1.085.557a1 1 0 0 1 .536.77l.145 1.194a.3.3 0 0 0 .4.245l5.375-1.95a.3.3 0 0 0 .197-.3l-.22-3.825a1 1 0 0 1 .546-.949l.063-.032a.93.93 0 0 0 .507-.813v-.042a.876.876 0 0 0-.69-.869.876.876 0 0 1-.682-.972l.162-1.218a1 1 0 0 0-.217-.766l-.211-.258a1 1 0 0 1-.092-1.133l1.196-2.072a1 1 0 0 0 .101-.755l-.482-1.824a3 3 0 0 0-.393-.88l-.3-.458a2 2 0 0 1-.328-1.094v-.194a1 1 0 0 0-1.067-.996l-.338.023a1 1 0 0 0-.93 1.07l.15 2.052a1 1 0 0 1-.566.976l-1.676.8a1 1 0 0 0-.35.277z\"/>";

export const DmSaintDavid = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintDavid',
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
