// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.673 1.224a.7.7 0 0 0-.582.337L6.082 3.226a2 2 0 0 1-.529.577L3.81 5.079a1 1 0 0 0-.409.774l-.028.866a1 1 0 0 0 .472.882l4.25 2.637a2 2 0 0 1 .762.863l.499 1.082a2 2 0 0 0 .53.694l3.647 3.063q.32.27.58.6l3.197 4.09 1.777 1.845a.7.7 0 0 0 .738.174l.34-.12a.7.7 0 0 0 .466-.68l-.053-1.811a1 1 0 0 0-.312-.697l-1.195-1.13a2 2 0 0 1-.578-1.024l-.52-2.369a1 1 0 0 0-.927-.784l-.964-.049a1 1 0 0 1-.768-.423l-2.076-2.949a1 1 0 0 1-.157-.796l.449-1.983a1 1 0 0 0-.204-.858l-.891-1.08a1 1 0 0 0-.586-.345l-1.114-.211a1 1 0 0 1-.754-.641L8.882 1.673a.7.7 0 0 0-.674-.461z\"/>";

export const MxSinaloa = /*#__PURE__*/ defineComponent({
  name: 'GeoMxSinaloa',
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
