// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.002 11.853-2.866 1.03a.6.6 0 0 0-.397.565v2.908a.6.6 0 0 0 .159.406l5.074 5.505a.6.6 0 0 0 .923-.049l.464-.626a.6.6 0 0 1 .823-.136l.64.444a.6.6 0 0 0 .601.048l3.37-1.614a.6.6 0 0 1 .316-.056l2.184.208a.6.6 0 0 0 .598-.855l-.414-.873a.6.6 0 0 1 .066-.623l3.264-4.248a.6.6 0 0 0-.221-.908l-2.672-1.255a.6.6 0 0 1-.304-.325l-1.12-2.871a.6.6 0 0 0-.098-.168L12.36 3.554a.6.6 0 0 1-.137-.322L12.08 1.87a.6.6 0 0 0-.565-.536L9.3 1.215a.6.6 0 0 0-.49.212L7.142 3.395a.6.6 0 0 0-.089.635l.688 1.52a.6.6 0 0 1-.147.695l-.868.776a.6.6 0 0 0-.157.672l.752 1.86a.6.6 0 0 1-.05.548l-.966 1.51a.6.6 0 0 1-.303.242Z\"/>";

export const EastEuropeanPlain = /*#__PURE__*/ defineComponent({
  name: 'GeoEastEuropeanPlain',
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
