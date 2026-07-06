// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.516 5.621 5.34 5.595a.5.5 0 0 0-.493.408l-.92 4.897a.5.5 0 0 1-.51.407l-.604-.022a.5.5 0 0 0-.477.697l1.487 3.452a.5.5 0 0 0 .087.135l6.162 6.882a.5.5 0 0 0 .681.06l2.019-1.583a.5.5 0 0 0 .154-.583l-.994-2.432a.5.5 0 0 1 .487-.689l1.826.09a.5.5 0 0 0 .524-.509l-.014-.822a.5.5 0 0 1 .465-.508l.492-.034a.5.5 0 0 1 .49.293l.497 1.103a.5.5 0 0 0 .388.29l3.191.438a.5.5 0 0 0 .517-.275l.804-1.634a.5.5 0 0 0 .05-.183l.305-4.072a.5.5 0 0 0-.252-.473l-1.949-1.105a.5.5 0 0 1-.146-.744l2.067-2.635a.5.5 0 0 0 .035-.566l-.907-1.513a.5.5 0 0 0-.565-.224l-2.167.614a.5.5 0 0 1-.634-.526l.222-2.456a.5.5 0 0 0-.496-.545l-5.689-.026a.5.5 0 0 0-.502.507l.047 3.405a.5.5 0 0 1-.502.507Z\"/>";

export const Ga = /*#__PURE__*/ defineComponent({
  name: 'GeoGa',
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
