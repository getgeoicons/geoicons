// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.88 18.603-.2-.224a.5.5 0 0 1-.072-.565l1.22-2.335a.5.5 0 0 0 .053-.298l-.406-3.064a.5.5 0 0 0-.284-.388l-1.532-.714a.5.5 0 0 1-.239-.671l.43-.892a.5.5 0 0 1 .594-.262l1.225.366a.5.5 0 0 0 .568-.216L6.61 5.498a.5.5 0 0 1 .28-.216l2.733-.827a.5.5 0 0 1 .645.479v2.425a.5.5 0 0 1-.597.49l-1.542-.305a.5.5 0 0 0-.556.292l-.867 1.997 5.642-.034a.5.5 0 0 1 .237.058l1.649.872a.5.5 0 0 0 .343.046l3.26-.729a.5.5 0 0 1 .6.392l.452 2.308a.5.5 0 0 0 .364.388l1.911.5a.5.5 0 0 1 .331.284l1.16 2.641a.5.5 0 0 1-.124.573l-.45.404a.5.5 0 0 1-.341.128l-2.565-.04a.5.5 0 0 1-.318-.12l-.627-.537a.5.5 0 0 0-.593-.043l-4.02 2.542a.5.5 0 0 1-.695-.165l-.457-.762a.5.5 0 0 1-.062-.355l.453-2.264a.5.5 0 0 0-.014-.25l-.371-1.16a.5.5 0 0 0-.307-.319l-1.475-.533a.5.5 0 0 0-.643.31l-.824 2.427a.5.5 0 0 1-.553.333l-.868-.14a.5.5 0 0 0-.552.33l-.27.78a.5.5 0 0 1-.655.303l-.839-.33a.5.5 0 0 0-.454.045l-1.507.973a.5.5 0 0 1-.643-.086Z\"/>";

export const Tj = /*#__PURE__*/ defineComponent({
  name: 'GeoTj',
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
