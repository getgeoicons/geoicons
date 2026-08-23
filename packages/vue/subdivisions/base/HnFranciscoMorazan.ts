// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.208 22.024c.843.273 1.717.443 2.6.507l3.227.232a.6.6 0 0 0 .63-.475l.256-1.213a.6.6 0 0 1 .686-.468l.636.106a.6.6 0 0 0 .682-.45l.59-2.445c.068-.28.075-.57.02-.853l-.252-1.29a1 1 0 0 1 .243-.865l3.388-3.714a1 1 0 0 0 .24-.876l-.266-1.293a2 2 0 0 0-.545-1.01L17.295 6.87a2 2 0 0 1-.543-1.004l-.637-3.044a1 1 0 0 0-.178-.395l-.597-.797a1 1 0 0 0-.857-.398l-1.747.1a1 1 0 0 0-.908.737l-.993 3.67a2 2 0 0 1-.553.928L7.986 8.845a1 1 0 0 0-.302.866l.504 3.523a1 1 0 0 1-.545 1.037l-1.686.838a1 1 0 0 0-.548.779L4.8 21.06a.6.6 0 0 0 .411.64z\"/>";

export const HnFranciscoMorazan = /*#__PURE__*/ defineComponent({
  name: 'GeoHnFranciscoMorazan',
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
