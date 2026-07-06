// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.907 19.791-1.816 2.529a.5.5 0 0 1-.762.06l-1.5-1.515a.5.5 0 0 1 .021-.724l1.626-1.464a.5.5 0 0 0 .122-.574l-.747-1.682a.5.5 0 0 0-.378-.29l-.781-.125a.5.5 0 0 1-.421-.499l.023-2.344a.5.5 0 0 0-.165-.376L6.475 9.472a.5.5 0 0 0-.518-.096l-1.645.644a.5.5 0 0 1-.447-.041l-1.61-1.004a.5.5 0 0 1-.23-.493l.192-1.384a.5.5 0 0 1 .352-.41l1.05-.313a.5.5 0 0 0 .356-.498l-.071-1.93a.5.5 0 0 1 .437-.515l2.747-.345a.25.25 0 0 0 .207-.324l-.19-.598a.5.5 0 0 1 .379-.642l1.08-.214a.5.5 0 0 1 .595.451l.09 1.133a.5.5 0 0 0 .567.455l2.222-.31a.5.5 0 0 0 .294-.152l.79-.838a.5.5 0 0 1 .838.183l.656 1.947a.5.5 0 0 0 .319.315l6.704 2.194a.5.5 0 0 1 .345.465l.032 1.525a.5.5 0 0 1-.138.355l-1.67 1.756a.5.5 0 0 0-.127.243l-.947 4.555a.5.5 0 0 1-.29.356l-3.135 1.371a.5.5 0 0 0-.287.35l-.433 1.945a.5.5 0 0 1-.082.183Z\"/>";

export const Br = /*#__PURE__*/ defineComponent({
  name: 'GeoBr',
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
