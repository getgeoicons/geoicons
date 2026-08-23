// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.782 7.072a.6.6 0 0 0-.704-.606l-1.017.178a9 9 0 0 1-3.585-.097l-1.638-.38a8.3 8.3 0 0 1-3.775-2.008l-.623-.58a.3.3 0 0 0-.482.105l-.524 1.274a1 1 0 0 1-.952.619l-3.333-.09a.3.3 0 0 0-.308.301l.01 2.2a1 1 0 0 1-.496.87l-.51.296a1 1 0 0 0-.493.782l-.12 1.48a1 1 0 0 1-.55.812l-.665.333a1 1 0 0 0-.552.856l-.11 2.832a1 1 0 0 1-.262.638l-.207.226a1 1 0 0 0 .071 1.422l.161.144a1 1 0 0 0 .694.253l2.468-.069a.3.3 0 0 1 .307.274l.105 1.184a.3.3 0 0 0 .266.272l.89.099a.3.3 0 0 0 .312-.188l.566-1.437 1.207-4.428a1 1 0 0 0-.017-.582L8.35 12.38a1 1 0 0 1 .057-.774l.503-.985a.6.6 0 0 1 .8-.264l1.742.862a.6.6 0 0 0 .86-.462l.074-.57a.6.6 0 0 1 .552-.522l.564-.04a.6.6 0 0 1 .588.347l.389.845a.6.6 0 0 0 .45.342l2.55.409a.6.6 0 0 0 .695-.613l-.015-.473a.6.6 0 0 1 .564-.62l1.402-.082a3 3 0 0 0 1.117-.287l1.165-.557a.6.6 0 0 0 .342-.527z\"/>";

export const DoEspaillat = /*#__PURE__*/ defineComponent({
  name: 'GeoDoEspaillat',
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
