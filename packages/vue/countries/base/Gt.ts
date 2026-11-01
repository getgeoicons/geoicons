// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m17.41 5.785.047-4.281a.3.3 0 0 0-.3-.303l-8.673.018a.3.3 0 0 0-.299.295l-.04 2.381a.3.3 0 0 1-.31.295l-1.417-.047a.3.3 0 0 0-.197.534l4.695 3.742a.6.6 0 0 1 .22.546l-.11.858a.6.6 0 0 1-.577.522l-5.561.168a1 1 0 0 0-.836.5L2.063 14.47a1 1 0 0 0-.133.498l-.002 3.163a1 1 0 0 0 .458.84l3.613 2.333c.324.21.686.354 1.066.426l5.109.973a1 1 0 0 0 .89-.271l3.892-3.846a1 1 0 0 0 .293-.614l.168-1.708a1 1 0 0 1 .402-.707l3.73-2.746a.6.6 0 0 0-.026-.984l-.925-.612a1 1 0 0 0-.675-.158l-2.485.31a.3.3 0 0 1-.337-.316z\"/>";

export const Gt = /*#__PURE__*/ defineComponent({
  name: 'GeoGt',
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
