// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.548 13.531a.3.3 0 0 1 .352-.036l.74.435a.3.3 0 0 0 .397-.086l2.548-3.61a.6.6 0 0 0 .04-.627l-1.332-2.52a.6.6 0 0 0-.918-.177l-1.088.917a2 2 0 0 0-.622.941l-.24.78a2 2 0 0 1-.736 1.03l-.246.18a1.54 1.54 0 0 1-2.231-.465L13.113 8.42a2 2 0 0 1-.275-1.012v-1.49a1 1 0 0 0-.88-.992l-1.4-.171a1 1 0 0 1-.833-.69l-.278-.878a1 1 0 0 0-.683-.661L4.573 1.348a.6.6 0 0 0-.723.364L2.506 5.234a4 4 0 0 0-.262 1.372L2.212 9a1 1 0 0 0 .616.937l2.304.958a1 1 0 0 1 .516 1.36l-1.146 2.357a1 1 0 0 0-.032.804l.596 1.512a1 1 0 0 1-.205 1.054l-2.184 2.305a.6.6 0 0 0 .038.863l1.459 1.287a.6.6 0 0 0 .808-.013l3.655-3.445a2 2 0 0 1 1.046-.518l2.349-.388a2 2 0 0 0 1.012-.487z\"/>";

export const LcSoufriere = /*#__PURE__*/ defineComponent({
  name: 'GeoLcSoufriere',
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
