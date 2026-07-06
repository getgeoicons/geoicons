// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.872 17.62 1.2 14.573l1.128-.424a.5.5 0 0 0 .295-.634l-.37-1.047a.5.5 0 0 1 .02-.38l.592-1.255a.5.5 0 0 1 .31-.265l1.057-.315a.5.5 0 0 0 .266-.19l.94-1.328a.5.5 0 0 1 .497-.203l.313.056a.5.5 0 0 1 .404.407l.151.874a.5.5 0 0 0 .387.404l1.355.294a.5.5 0 0 0 .455-.13l.424-.414a.5.5 0 0 1 .443-.133l.557.107a.5.5 0 0 0 .342-.057l1.72-.983a.5.5 0 0 1 .61.09l.366.384a.5.5 0 0 0 .412.153l1.146-.114a.5.5 0 0 0 .415-.314l.157-.397a.5.5 0 0 1 .328-.297l1.367-.388a.5.5 0 0 0 .34-.327l.338-1.046a.5.5 0 0 1 .157-.232l2.067-1.705.742 2.063a.5.5 0 0 1 .026.108l.237 1.913a.5.5 0 0 0 .048.16l1.558 3.153-1.907-.722a.5.5 0 0 1-.281-.267l-.825-1.88-.848 2.762a.5.5 0 0 0 .495.646l.572-.02a.5.5 0 0 1 .378.153l1.058 1.098a.5.5 0 0 1 .132.436l-.429 2.349a.5.5 0 0 1-.469.41l-.621.028a.5.5 0 0 1-.522-.523l.043-.924a.5.5 0 0 0-.382-.51l-1.62-.39a.5.5 0 0 0-.612.411l-.13.856a.5.5 0 0 1-.249.361l-.927.521a.5.5 0 0 1-.309.06l-1.638-.21a.5.5 0 0 0-.227.023l-1.996.691a.5.5 0 0 1-.359-.012l-1.171-.498a.5.5 0 0 1-.263-.26l-.308-.71a.5.5 0 0 0-.294-.272l-1.498-.524a.5.5 0 0 0-.608.24l-.113.213a.5.5 0 0 1-.707.192l-1.34-.837a.5.5 0 0 0-.707.192z\"/>";

export const Ru = /*#__PURE__*/ defineComponent({
  name: 'GeoRu',
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
