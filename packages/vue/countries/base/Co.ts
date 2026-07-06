// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.689 17.135-4.929-1.95a.5.5 0 0 1-.31-.537l.077-.525a.5.5 0 0 1 .418-.422l.56-.086a.5.5 0 0 0 .313-.18l.684-.847a.5.5 0 0 0 .094-.444l-1.001-3.7a.5.5 0 0 1 .028-.341l.702-1.52a.5.5 0 0 1 .245-.245l1.742-.804a.5.5 0 0 0 .248-.254l.678-1.55a.5.5 0 0 1 .348-.287l1.489-.337a.5.5 0 0 0 .16-.067l2.492-1.601a.5.5 0 0 1 .653.099l.287.341a.5.5 0 0 1-.108.74L12.973 3.66a.5.5 0 0 0-.17.189l-.874 1.695a.5.5 0 0 0-.013.431l.806 1.822a.5.5 0 0 0 .448.298l2.098.037a.5.5 0 0 1 .41.227l.625.962a.5.5 0 0 0 .45.226l2.025-.122a.5.5 0 0 1 .485.706l-.406.891a.5.5 0 0 0-.03.333l.612 2.348a.5.5 0 0 1-.395.619l-2.57.46a.5.5 0 0 0-.41.444l-.15 1.525a.5.5 0 0 0 .097.348l.886 1.188a.5.5 0 0 1 .09.399l-.69 3.403a.5.5 0 0 1-.758.323l-.866-.548a.5.5 0 0 1-.209-.574l.268-.842a.5.5 0 0 0-.488-.652l-1.977.047a.5.5 0 0 1-.396-.18L9.89 17.28a.5.5 0 0 0-.2-.145Z\"/>";

export const Co = /*#__PURE__*/ defineComponent({
  name: 'GeoCo',
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
