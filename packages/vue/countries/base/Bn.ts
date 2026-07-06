// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.545 13.093 1.2 11.073l6.293-1.946a.5.5 0 0 0 .148-.074l5.412-3.96a.5.5 0 0 1 .134-.069l4.388-1.491-2.003 3.643a.5.5 0 0 1-.259.226l-2.862 1.101a.5.5 0 0 0-.317.527l.492 4.089a.5.5 0 0 0 .374.425l.737.185a.5.5 0 0 1 .335.687l-2.178 4.936a.5.5 0 0 1-.249.253l-1.468.674a.5.5 0 0 1-.64-.202l-2.183-3.719a.5.5 0 0 0-.493-.243l-1.272.16a.5.5 0 0 1-.56-.445l-.245-2.36a.5.5 0 0 0-.239-.377Zm17.026 2.855-3.214-1.164a.5.5 0 0 1-.325-.396l-.819-5.493a.5.5 0 0 1 .12-.405l1.57-1.782a.5.5 0 0 1 .837.138l1.472 3.528a.5.5 0 0 1 .035.246l-.25 2.306a.5.5 0 0 0 .143.407l1.336 1.336a.5.5 0 0 1 .03.675l-.381.455a.5.5 0 0 1-.554.149Z\"/>";

export const Bn = /*#__PURE__*/ defineComponent({
  name: 'GeoBn',
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
