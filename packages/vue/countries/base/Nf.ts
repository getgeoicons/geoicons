// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.76 1.861-.28.976a.644.644 0 0 0 .438.795.644.644 0 0 1 .451.74l-.564 2.922a1 1 0 0 0-.018.223l.06 1.805a1 1 0 0 0 .826.95l.413.074a.93.93 0 0 1 .703.572.932.932 0 0 0 1.418.404l.147-.108a1 1 0 0 1 1.047-.086l1.168.596c.333.17.74.023.889-.319a.65.65 0 0 1 .815-.35l.62.225a1 1 0 0 0 .672.003l.27-.095a.55.55 0 0 0 .355-.631.73.73 0 0 0-.187-.353l-.203-.212a.68.68 0 0 1 .438-1.147l.424-.033a1 1 0 0 0 .92-.912l.059-.701a1 1 0 0 0-.514-.96l-.952-.525a1 1 0 0 0-.414-.122l-1.228-.083a1 1 0 0 1-.768-.448l-.782-1.19a1 1 0 0 0-.35-.325L10.69 2.467a1 1 0 0 0-.486-.126H8.911a.84.84 0 0 1-.775-.51l-.025-.057a.719.719 0 0 0-1.35.087Zm3.716 20.075-.286-.411a1 1 0 0 1-.159-.766l.027-.134a1 1 0 0 1 1.136-.792l1.345.213a.763.763 0 0 1 .346 1.359l-.977.753a1 1 0 0 1-1.432-.222Z\"/>";

export const Nf = /*#__PURE__*/ defineComponent({
  name: 'GeoNf',
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
