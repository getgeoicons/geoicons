// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.95 19.433-1.263.711.259 2.179a.5.5 0 0 0 .536.439l.749-.06a.5.5 0 0 0 .411-.282l.871-1.818a.5.5 0 0 1 .069-.106l1.472-1.747-1.906-1.396-1.003 1.88a.5.5 0 0 1-.196.2Zm5.182-7.652-1.112.529a.5.5 0 0 0-.261.605l.197.609a.5.5 0 0 0 .703.291l1.254-.64a.5.5 0 0 0 .185-.727l-.339-.497a.5.5 0 0 0-.627-.17Zm3.426-5.868-.82-.83a.5.5 0 0 1-.02-.681l2.466-2.817a.5.5 0 0 1 .714-.039l.136.124a.5.5 0 0 1 .108.594L16.36 5.788a.5.5 0 0 1-.802.125Z\"/>";

export const Mp = /*#__PURE__*/ defineComponent({
  name: 'GeoMp',
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
