// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.959 14.031-.753-.208a.5.5 0 0 1-.35-.609l.19-.72a.5.5 0 0 1 .613-.356l.752.203a.5.5 0 0 1 .353.608l-.187.726a.5.5 0 0 1-.618.356Zm9.748 1.919 4.397-.133q.226-.007.445-.064l1.488-.389a.756.756 0 0 0 .195-1.38l-.727-.434a3 3 0 0 0-.566-.262l-2.828-.965a4 4 0 0 1-1.082-.566l-2.402-1.77a1 1 0 0 0-.546-.194l-1.229-.058a2 2 0 0 1-.8-.21l-1.607-.803a4 4 0 0 0-1.323-.395l-1.709-.2a4 4 0 0 0-1.522.114l-2.588.708a2 2 0 0 0-1.082.742l-.532.721a.6.6 0 0 0 .291.925l.298.1a1 1 0 0 0 .717-.03l2.469-1.074a2 2 0 0 1 1.263-.111l6.023 1.44a2 2 0 0 1 1.111.715l.39.499a1 1 0 0 0 .729.383l1.173.07a.539.539 0 0 1 .217 1.013l-.953.497a.589.589 0 0 0 .29 1.11Z\"/>";

export const Cu = /*#__PURE__*/ defineComponent({
  name: 'GeoCu',
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
