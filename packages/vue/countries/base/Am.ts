// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.995 11.473-.594-2.556a1 1 0 0 1 .173-.824l.88-1.181a1 1 0 0 0 0-1.197L1.849 3.569a.6.6 0 0 1 .395-.953l9.404-1.348a1 1 0 0 1 .825.26l3.542 3.313a.6.6 0 0 1-.05.92l-.794.59a1 1 0 0 0-.266 1.307l.63 1.078a2 2 0 0 0 1.153.907l1.04.311a1 1 0 0 1 .574 1.468l-.69 1.165a1 1 0 0 0 .333 1.36l4.261 2.642a.6.6 0 0 1 .257.688l-.352 1.136a2 2 0 0 0-.072.856l.35 2.626a.6.6 0 0 1-.536.677l-1.829.18a.6.6 0 0 1-.628-.405l-1.716-5.094a1 1 0 0 0-.993-.68l-2.275.103a1 1 0 0 1-.884-.454l-.697-1.073a1 1 0 0 0-1.075-.427l-1.07.26a1 1 0 0 1-.988-.31l-1.67-1.897a1 1 0 0 0-.695-.338l-3.42-.192a1 1 0 0 1-.918-.772Z\"/>";

export const Am = /*#__PURE__*/ defineComponent({
  name: 'GeoAm',
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
