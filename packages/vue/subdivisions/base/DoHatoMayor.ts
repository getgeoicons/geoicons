// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.446 5.544a1 1 0 0 0-.768-.894l-5.245-1.237a1 1 0 0 1-.76-.832l-.054-.373a1 1 0 0 0-.315-.598l-.14-.127a1 1 0 0 0-.652-.262l-.327-.007a1 1 0 0 0-.934.59l-.058.13a1 1 0 0 1-1 .585l-3.448-.306a1 1 0 0 0-1.06.763l-.553 2.296a.3.3 0 0 0 .167.343l3.747 1.714 4.046 2.084a.6.6 0 0 1 .101 1l-1.658 1.333a1 1 0 0 0-.364.915l.545 3.98c.067.487.223.958.46 1.388l2.23 4.047a.6.6 0 0 0 .964.12l1.207-1.293a1 1 0 0 0 .27-.7l-.012-.635a1 1 0 0 1 .472-.867l1.4-.87a1 1 0 0 0 .44-.6l.681-2.637a1 1 0 0 0-.222-.916L13.87 9.486a.8.8 0 0 1-.186-.696l.148-.71a1 1 0 0 1 1.285-.747l4.582 1.475a.8.8 0 0 0 .992-.476l.006-.015a.8.8 0 0 0-.31-.955l-1.483-.969a1 1 0 0 1-.45-.758z\"/>";

export const DoHatoMayor = /*#__PURE__*/ defineComponent({
  name: 'GeoDoHatoMayor',
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
