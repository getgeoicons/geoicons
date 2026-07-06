// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.677 20.756-.012 1.365a.5.5 0 0 1-.652.472l-2.747-.878a.5.5 0 0 1-.34-.383l-.872-4.636a.5.5 0 0 1 .019-.255l1.391-4.04a.5.5 0 0 0 .009-.296l-.215-.772a.5.5 0 0 1 .025-.339l.928-2.074a.5.5 0 0 0 .04-.144l.756-6.33a.5.5 0 0 1 .176-.324l.65-.545a.5.5 0 0 1 .75.127l1.262 2.117a.5.5 0 0 1 .036.44l-1.375 3.492a.5.5 0 0 0-.01.337l.28.867a.5.5 0 0 1 0 .31l-1.323 4.018a.5.5 0 0 0-.013.266l.377 1.69a.5.5 0 0 1-.021.288l-.99 2.567a.5.5 0 0 0-.033.22l.104 1.34a.5.5 0 0 0 .423.455l.953.147a.5.5 0 0 1 .424.498Z\"/>";

export const Cl = /*#__PURE__*/ defineComponent({
  name: 'GeoCl',
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
