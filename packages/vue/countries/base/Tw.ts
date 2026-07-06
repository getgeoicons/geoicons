// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.064 10.825-.63 4.193a.5.5 0 0 0 .085.362l.776 1.098a.5.5 0 0 1 .073.155l.539 1.941a.5.5 0 0 0 .169.256l1.394 1.12a.5.5 0 0 1 .185.343l.173 1.84a.5.5 0 0 0 .686.416l.716-.29a.5.5 0 0 0 .31-.52l-.207-1.794a.5.5 0 0 1 .015-.19l.515-1.879a.5.5 0 0 1 .188-.272l.913-.664a.5.5 0 0 0 .15-.174l.926-1.786a.5.5 0 0 0 .044-.122l1.243-5.62a.5.5 0 0 1 .039-.112l1.406-2.882a.5.5 0 0 0 .046-.283l-.2-1.573a.5.5 0 0 1 .107-.378l.526-.648a.5.5 0 0 0-.111-.73l-1.777-1.188a.5.5 0 0 0-.653.087l-.572.652a.5.5 0 0 1-.21.142l-1.76.62a.5.5 0 0 0-.256.202L7.137 10.63a.5.5 0 0 0-.073.194Z\"/>";

export const Tw = /*#__PURE__*/ defineComponent({
  name: 'GeoTw',
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
