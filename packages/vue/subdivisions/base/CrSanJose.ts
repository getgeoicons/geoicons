// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.104 5.518a2 2 0 0 0-.568.175l-.783.376a2 2 0 0 1-.954.196l-1.615-.071a2 2 0 0 0-.782.122l-2.205.815a1 1 0 0 0-.636.756l-.274 1.476a2 2 0 0 0 .048.928l.498 1.697a1 1 0 0 0 .665.673l1.471.454a1 1 0 0 0 .994-.24l.767-.75a1 1 0 0 1 .824-.278L9 12.154a1 1 0 0 1 .653.362l2.076 2.561a3 3 0 0 0 1.117.855l1.162.514a1 1 0 0 1 .558.644L15 18.642a1 1 0 0 0 .662.684l1.496.473c.293.092.57.23.821.406l2.277 1.601a1 1 0 0 0 1.478-.388l.179-.375a1 1 0 0 0-.107-1.036l-.133-.175a1 1 0 0 1-.045-1.148l.85-1.314a1 1 0 0 0 .04-1.018l-.664-1.228a2 2 0 0 0-.603-.681l-1.792-1.27a2 2 0 0 0-.876-.348l-2.31-.327a1 1 0 0 1-.595-.313l-1.86-2.022a2 2 0 0 0-1.306-.639l-.95-.079a.6.6 0 0 1-.456-.92l.93-1.46a2 2 0 0 1 1.015-.81l1.38-.492a.6.6 0 0 0 .358-.783l-1.028-2.63a.6.6 0 0 0-.975-.214l-.865.832a1 1 0 0 0-.256.408l-.416 1.263a1 1 0 0 1-.8.676z\"/>";

export const CrSanJose = /*#__PURE__*/ defineComponent({
  name: 'GeoCrSanJose',
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
