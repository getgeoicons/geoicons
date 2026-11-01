// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.291 15.687.733.407a1 1 0 0 0 .826.066l6.303-2.283a1 1 0 0 1 1.01.198L12.6 15.37a2 2 0 0 0 .748.425l1.038.322a1 1 0 0 1 .605.52l.547 1.136a1 1 0 0 0 .636.53l1.08.296a2 2 0 0 0 1.234-.057l1.9-.715a1 1 0 0 0 .588-.599l1.645-4.588c.112-.312.145-.648.095-.977l-.214-1.394a2 2 0 0 0-.495-1.042l-2.6-2.864a3 3 0 0 1-.587-.963l-1.398-3.728a.698.698 0 0 0-1.35.199l-.192 2.861a.6.6 0 0 1-.233.436l-.035.027a.6.6 0 0 1-.623.066l-1.672-.793a.6.6 0 0 1-.207-.923l.442-.537a.6.6 0 0 0-.367-.973l-1.321-.215a1 1 0 0 0-.984.419l-.763 1.106a.6.6 0 0 1-.695.225l-.881-.313a1 1 0 0 0-1.138.345L5.756 5.82a2 2 0 0 1-1.035.723l-2.567.764a1 1 0 0 0-.709.846l-.187 1.664a2 2 0 0 0 .095.87l.781 2.292a1 1 0 0 1-.003.654l-.298.85a1 1 0 0 0 .458 1.204Zm15.994 4.74 1.085-.122a.6.6 0 0 1 .662.667l-.143 1.203a.6.6 0 0 1-.538.526l-.554.054a.6.6 0 0 1-.625-.404l-.388-1.134a.6.6 0 0 1 .5-.79Z\"/>";

export const Au = /*#__PURE__*/ defineComponent({
  name: 'GeoAu',
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
