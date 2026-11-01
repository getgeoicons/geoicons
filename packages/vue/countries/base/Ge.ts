// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.67 15.551 2.916-.276a1 1 0 0 1 .764.253l1.424 1.283a1 1 0 0 0 .782.251l3.944-.446a1 1 0 0 0 .573-.265l.364-.343a1 1 0 0 1 1.196-.131l2.681 1.592a.6.6 0 0 0 .776-.143l.315-.396a.6.6 0 0 0-.124-.863l-.983-.694a.6.6 0 0 1-.212-.711l.228-.577a.6.6 0 0 0-.355-.785l-1.398-.502a.6.6 0 0 1-.397-.551l-.018-.79a.6.6 0 0 0-.37-.54l-1.593-.662a2 2 0 0 0-1.375-.06l-1.72.548a1 1 0 0 1-.948-.188l-2.178-1.832a2 2 0 0 0-1.236-.47l-2.665-.068A3 3 0 0 1 6 7.96L2.574 6.557a.8.8 0 0 0-1.032.41l-.05.109a.8.8 0 0 0 .312 1.013l3.303 2.017a2 2 0 0 1 .896 1.211l.408 1.595a2 2 0 0 1-.138 1.367l-.2.414a.6.6 0 0 0 .596.858Z\"/>";

export const Ge = /*#__PURE__*/ defineComponent({
  name: 'GeoGe',
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
