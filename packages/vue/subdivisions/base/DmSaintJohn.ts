// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.929 1.72a.8.8 0 0 0-.767-.503l-1.231.037a.8.8 0 0 0-.725.52l-.843 2.262a2 2 0 0 0-.093 1.06l.502 2.736a1 1 0 0 1-.256.866l-.12.127a1 1 0 0 1-.68.313l-.784.037a.923.923 0 1 0 .273 1.816l.84-.215a1 1 0 0 1 1.06.384l.21.293a2 2 0 0 1 .278 1.789l-.484 1.481a2 2 0 0 1-.867 1.092l-2.183 1.318a1 1 0 0 0-.466 1.037l.077.42a.96.96 0 0 0 1.66.462l.273-.307a1 1 0 0 1 .855-.331l1.381.147c.34.036.666.16.946.358l1.617 1.149q.177.125.377.21l1.61.684a2 2 0 0 1 .87.714l.363.532a1 1 0 0 0 .753.434l1.793.131a.3.3 0 0 0 .32-.336l-.393-3.177a1 1 0 0 0-.306-.604l-.662-.625a1 1 0 0 1-.313-.738l.06-5.514a1.97 1.97 0 0 0-1.235-1.85l-1.685-.679a1 1 0 0 1-.6-1.156l.272-1.157a2 2 0 0 0-.09-1.2z\"/>";

export const DmSaintJohn = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintJohn',
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
