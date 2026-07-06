// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.39 4.045-.057-.726a1 1 0 0 1 .12-.562l.152-.275a1 1 0 0 1 .314-.345l.56-.381a.6.6 0 0 1 .934.426l.031.264c.046.388.34.7.725.77a.89.89 0 0 1 .698.632l.073.262a1 1 0 0 1-.065.712l-.643 1.307a1 1 0 0 1-.513.482l-.14.058a1 1 0 0 0-.613.998l.002.029a1 1 0 0 0 .783.901l.152.034a1 1 0 0 1 .782.898l.056.718a1 1 0 0 0 .09.341l.676 1.465a1 1 0 0 1 .079.584l-.481 2.874a1 1 0 0 0-.014.153l-.049 4.133a.6.6 0 0 0 .284.518l.866.535-.022 2.088-.906-.18a1 1 0 0 1-.208-.066l-.577-.255a1 1 0 0 1-.43-.363l-.45-.677a1 1 0 0 1-.162-.474l-.108-1.377-.032-2.645.328-5.022a1 1 0 0 0-.498-.931l-.92-.53a1 1 0 0 1-.34-.322L9.363 7.78a1 1 0 0 1-.16-.596l.048-.95a1 1 0 0 1 .208-.561l.725-.937a1 1 0 0 0 .206-.691Z\"/>";

export const WesternSouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoWesternSouthAmerica',
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
