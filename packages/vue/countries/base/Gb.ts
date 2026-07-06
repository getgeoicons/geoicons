// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.663 22.577-2.768.223 2.016-2.283a.5.5 0 0 0-.184-.793l-1.753-.727a.25.25 0 0 1-.055-.43l1.739-1.322a.5.5 0 0 0 .194-.456l-.148-1.265a.5.5 0 0 1 .465-.557l1.153-.075a.5.5 0 0 0 .463-.567l-.113-.821a.5.5 0 0 0-.09-.225l-.812-1.122a.5.5 0 0 0-.339-.202l-1.334-.179a.5.5 0 0 1-.272-.127L7.544 9.556a.5.5 0 0 1-.074-.652l.57-.829a.5.5 0 0 0 .064-.438l-.898-2.748a.5.5 0 0 1 .2-.572l1.556-1.03a.5.5 0 0 0 .222-.37l.104-1.095a.5.5 0 0 1 .474-.452l3.127-.146a.25.25 0 0 1 .213.398L11.668 3.57a.25.25 0 0 0 .2.398h3.045a.25.25 0 0 1 .215.378L13.11 7.747a.5.5 0 0 0 .167.68l1.188.736a.5.5 0 0 1 .215.279l.622 2.033a.5.5 0 0 0 .197.267l1.102.75a.5.5 0 0 1 .201.283l.739 2.733a.5.5 0 0 0 .295.333l1.4.566a.5.5 0 0 1 .254.698l-.932 1.763a.5.5 0 0 0 .103.6l.595.552a.25.25 0 0 1-.068.411l-1.676.755a.5.5 0 0 1-.18.043l-4.023.21a.5.5 0 0 0-.298.119l-1.063.902a.5.5 0 0 1-.284.117Z\"/><path stroke-linejoin=\"round\" d=\"m4.782 12.811.868-.933a.5.5 0 0 1 .28-.152l1.112-.195a.5.5 0 0 1 .5.213l1.004 1.486a.5.5 0 0 1-.205.733l-.8.37a.5.5 0 0 1-.368.021l-2.183-.728a.5.5 0 0 1-.208-.815Z\"/>";

export const Gb = /*#__PURE__*/ defineComponent({
  name: 'GeoGb',
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
