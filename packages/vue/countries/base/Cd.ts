// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.379 14.123 3.655-.175a.6.6 0 0 1 .566.333l.796 1.601a.6.6 0 0 0 .581.332l1.153-.084a.6.6 0 0 0 .543-.473l.11-.51a.6.6 0 0 1 .704-.463l1.348.27a.6.6 0 0 1 .48.533l.292 3.21a1 1 0 0 0 .81.892l4.41.835a1 1 0 0 1 .566.324l1.493 1.702a.6.6 0 0 0 .722.14l.621-.315a.6.6 0 0 0 .33-.55l-.017-.666a.6.6 0 0 0-.357-.534l-.988-.437a1 1 0 0 1-.595-.893l-.034-1.538a1 1 0 0 1 .87-1.014l.855-.11a.6.6 0 0 0 .431-.913l-.895-1.436a2 2 0 0 1-.293-.856l-.311-3.059a2 2 0 0 1 .086-.816l.816-2.53c.075-.23.19-.446.342-.635l.986-1.233a.6.6 0 0 0 .041-.692l-.93-1.493a2 2 0 0 0-1.31-.905L16.95 1.31a2 2 0 0 0-1.094.09l-2.396.905a2 2 0 0 1-1.457-.018l-1.681-.681a1 1 0 0 0-.982.13l-.454.347a1 1 0 0 0-.378.615l-.822 4.459a2 2 0 0 1-.536 1.034l-.707.725a2 2 0 0 0-.469.775l-.52 1.586a1 1 0 0 1-.873.687l-2.325.177a.992.992 0 0 0 .123 1.98Z\"/>";

export const Cd = /*#__PURE__*/ defineComponent({
  name: 'GeoCd',
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
