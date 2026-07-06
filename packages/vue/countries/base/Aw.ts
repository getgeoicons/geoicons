// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.386 15.94 2.73 10.384a1 1 0 0 1-.157-1.229l.992-1.653a2 2 0 0 0 .232-.572l.189-.805a2 2 0 0 0-.05-1.09L3.411 3.47a1 1 0 0 0-.268-.415l-.332-.309a.767.767 0 0 1 1.001-1.16l2.574 2.06a1 1 0 0 1 .296.389l.558 1.313a2 2 0 0 0 .443.648l1.636 1.6a2 2 0 0 0 .52.367l3.622 1.769a1 1 0 0 1 .345.277l1.987 2.508q.071.09.16.16l3.3 2.627a1 1 0 0 1 .323.456l1.906 5.532a1 1 0 0 1-.69 1.293l-.463.122a1 1 0 0 1-.68-.062l-3.694-1.737a1 1 0 0 1-.17-.102l-5.225-3.88a1 1 0 0 0-.226-.126l-1.618-.644a1 1 0 0 1-.33-.216Z\"/>";

export const Aw = /*#__PURE__*/ defineComponent({
  name: 'GeoAw',
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
