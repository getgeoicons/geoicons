// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.924 15.98 9.75 17.993a1 1 0 0 0-.13.616l.197 1.755a1 1 0 0 0 .89.883l.908.095a1 1 0 0 1 .552.24l.976.847a1 1 0 0 0 .579.242l1.445.111c.15.012.3-.01.44-.065l2.426-.95a.6.6 0 0 0 .34-.777l-.501-1.284a1 1 0 0 1-.068-.372l.012-1.427a1 1 0 0 0-.44-.838l-.888-.6a1 1 0 0 1-.254-.247l-.844-1.181a.664.664 0 0 1 .565-1.05l1.365.05a1 1 0 0 0 .856-.427l.02-.027a1 1 0 0 0-.106-1.272l-1.03-1.055a.8.8 0 0 0-1.32.282l-.211.574a.572.572 0 0 1-.98.165l-.212-.26a1 1 0 0 1-.21-.805l.166-.937a.6.6 0 0 0-.264-.608L10.56 7.42a.6.6 0 0 1-.22-.256l-.156-.344a.6.6 0 0 1 .282-.786l1.59-.783a1 1 0 0 1 .573-.094l2.944.39a.855.855 0 1 0 .19-1.7l-.648-.06a1 1 0 0 1-.905-.903l-.055-.591a1 1 0 0 0-.897-.903l-1.544-.154a1 1 0 0 0-.684.185l-1.647 1.19a1 1 0 0 0-.235.239l-.612.878a1 1 0 0 1-.404.337l-1.253.575a1 1 0 0 0-.463.432l-.728 1.344a1 1 0 0 0 .175 1.186l.7.696a1 1 0 0 1 .296.699l.013 1.294a1 1 0 0 0 .23.627l2.558 3.09q.111.134.262.223l.648.383a1 1 0 0 1 .355 1.365Z\"/>";

export const CaspianSea = /*#__PURE__*/ defineComponent({
  name: 'GeoCaspianSea',
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
