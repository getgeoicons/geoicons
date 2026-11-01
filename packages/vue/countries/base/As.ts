// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.682 10.23 2.057-.552a1 1 0 0 0 .718-.75l.166-.754a.8.8 0 0 0-.627-.958l-.314-.061a1 1 0 0 0-.64.087l-.9.45a1 1 0 0 1-.65.085L14.57 6.76a1 1 0 0 0-.73.13l-1.9 1.18a2 2 0 0 0-.588.56l-.905 1.308a1 1 0 0 1-.771.43l-4.8.243a1 1 0 0 0-.539.19l-2.166 1.58a.6.6 0 0 0 .179 1.059l2.498.76a1 1 0 0 1 .709.957v.362a1 1 0 0 0 .491.86l1.11.657a1 1 0 0 0 .978.022l.744-.395a2 2 0 0 0 .543-.421l4.525-4.977c.193-.213.43-.381.694-.494L17.27 9.65a1 1 0 0 1 .881.047l.785.439a1 1 0 0 0 .747.094Z\"/>";

export const As = /*#__PURE__*/ defineComponent({
  name: 'GeoAs',
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
