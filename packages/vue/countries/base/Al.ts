// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.347 4.388.157 2.356a.5.5 0 0 0 .196.365l.937.714a.5.5 0 0 1 .185.508L7.19 15.553a.5.5 0 0 0-.01.169l.267 2.253a.5.5 0 0 0 .236.368l2.28 1.393a.5.5 0 0 1 .226.311l.478 2.007a.5.5 0 0 0 .29.344l.636.274a.5.5 0 0 0 .538-.094l.905-.843a.5.5 0 0 0 .138-.51l-.23-.765a.5.5 0 0 1 .334-.622l1.17-.354a.5.5 0 0 0 .272-.203l1.976-2.988a.5.5 0 0 0 .055-.438l-.572-1.668a.5.5 0 0 0-.495-.337l-.87.038a.5.5 0 0 1-.509-.386l-.892-3.834a.5.5 0 0 1 .008-.257l.803-2.668a.5.5 0 0 0 .01-.248l-.35-1.647a.5.5 0 0 0-.237-.328l-1.242-.725a.5.5 0 0 1-.22-.269l-.43-1.247a.25.25 0 0 0-.336-.147l-.867.378a.5.5 0 0 1-.656-.252L9.415 1.2l-1.98 2.871a.5.5 0 0 0-.088.317Z\"/>";

export const Al = /*#__PURE__*/ defineComponent({
  name: 'GeoAl',
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
