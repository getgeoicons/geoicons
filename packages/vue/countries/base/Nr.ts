// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17.776 19.382-3.915 2.49a4 4 0 0 1-1.128.494l-.563.148a4 4 0 0 1-1.621.087l-1.116-.17c-.202-.03-.408 0-.592.089-.354.17-.775.121-1.079-.128l-.986-.805a3 3 0 0 0-.463-.311l-1.383-.754a4 4 0 0 1-1.003-.776l-.68-.725a4 4 0 0 1-.937-1.672l-.507-1.838a4 4 0 0 1-.131-1.38l.1-1.26a4 4 0 0 1 .234-1.067l.29-.787a4 4 0 0 1 1.136-1.642L6.2 6.98l3.694-3.99q.292-.316.645-.561l.655-.458a4 4 0 0 1 2.451-.717l1.914.078a4 4 0 0 1 1.324.283l1.077.43a4 4 0 0 1 1.215.764l1.409 1.29a4 4 0 0 1 1.177 1.97l.12.479a4 4 0 0 1-.816 3.555l-.475.565a4 4 0 0 0-.535.822l-1.058 2.17a4 4 0 0 0-.398 1.956l.1 1.977a2 2 0 0 1-.924 1.79\"/>";

export const Nr = /*#__PURE__*/ defineComponent({
  name: 'GeoNr',
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
