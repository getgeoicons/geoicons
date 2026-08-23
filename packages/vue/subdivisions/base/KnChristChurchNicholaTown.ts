// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.728 17.762-2.413-2.707a.3.3 0 0 1-.007-.391l5.81-6.989a1 1 0 0 0 .23-.599l.077-1.91a1 1 0 0 1 .614-.883l.732-.306a1 1 0 0 0 .603-.772l.077-.506a1 1 0 0 1 .687-.802l2.2-.697 7.033 3.617a1 1 0 0 1 .4.374l.842 1.399a1 1 0 0 1 .085.852l-.21.589a1 1 0 0 1-.84.658l-.504.051a1 1 0 0 0-.63.314l-1.732 1.86a1 1 0 0 0-.264.585l-.122 1.255a1 1 0 0 1-.24.557l-1.737 2.008a2 2 0 0 0-.467 1.019l-.407 2.776a2 2 0 0 0 .069.884l.473 1.52q.043.141.018.285l-.076.42a.6.6 0 0 1-.682.486l-1.913-.296a2 2 0 0 1-.414-.11l-7.19-2.77a.3.3 0 0 1-.189-.32l.16-1.212a.3.3 0 0 0-.073-.239Z\"/>";

export const KnChristChurchNicholaTown = /*#__PURE__*/ defineComponent({
  name: 'GeoKnChristChurchNicholaTown',
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
