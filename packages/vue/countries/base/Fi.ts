// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.583 22.654 8.136 21.6a.5.5 0 0 1-.205-.394l-.073-3.638a.5.5 0 0 1 .113-.326l3.667-4.49a.5.5 0 0 0-.074-.706l-.834-.669a.5.5 0 0 1-.184-.338l-.438-4.185a.5.5 0 0 0-.187-.34L7.219 4.373a.5.5 0 0 1-.045-.744l.673-.68a.5.5 0 0 1 .787.099l.72 1.227a.5.5 0 0 0 .272.222l1.423.474a.5.5 0 0 0 .653-.399l.353-2.325a.5.5 0 0 1 .28-.376l1.124-.535a.5.5 0 0 1 .528.061l1 .802a.5.5 0 0 1 .154.567l-.777 2.05a.5.5 0 0 0 .073.484l1.22 1.57a.5.5 0 0 1 .026.576l-.69 1.081a.5.5 0 0 0-.033.476l.844 1.857a.5.5 0 0 1 .044.223l-.137 4.188a.5.5 0 0 0 .122.344l1.116 1.288a.5.5 0 0 1 .015.636L13.88 21.47a.5.5 0 0 1-.249.17l-3.609 1.088a.5.5 0 0 1-.439-.074Z\"/>";

export const Fi = /*#__PURE__*/ defineComponent({
  name: 'GeoFi',
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
