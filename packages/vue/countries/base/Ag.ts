// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.77 19.164c.094.672.228 1.672.283 2.205a.63.63 0 0 0 .342.5l1.191.563a.5.5 0 0 0 .148.044l2.239.296a.5.5 0 0 0 .379-.106l1.697-1.368a.5.5 0 0 0 .184-.442l-.15-1.412a.5.5 0 0 0-.206-.353L11.39 16.58a.5.5 0 0 0-.67.078l-1.831 2.108a.5.5 0 0 0-.118.398Zm4.058-11.708-2.4-.657a.5.5 0 0 1-.34-.646l.495-1.43a.5.5 0 0 0-.101-.499l-1.13-1.253a.5.5 0 0 1 .047-.714l.836-.716a.5.5 0 0 1 .72.074l2.601 3.362a.5.5 0 0 1 .102.365l-.201 1.691a.5.5 0 0 1-.629.423Z\"/>";

export const Ag = /*#__PURE__*/ defineComponent({
  name: 'GeoAg',
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
