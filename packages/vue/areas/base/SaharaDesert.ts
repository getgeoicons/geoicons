// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.604 10.888-1.22 2.195a1 1 0 0 0-.102.702l.274 1.235 2.855 1.018a1 1 0 0 0 .411.055l2.246-.17q.11-.01.219.007l6.125.881a1 1 0 0 0 .537-.07l1.146-.492a1 1 0 0 1 .365-.08l4.17-.122q.108-.003.214-.03l2.956-.738-2.59-5.369a1 1 0 0 0-.753-.554l-3.122-.467a.6.6 0 0 0-.445.11l-.908.67a.6.6 0 0 1-.613.06l-1.451-.688a1 1 0 0 1-.397-.34l-.616-.9a1 1 0 0 0-.689-.427L9.79 7.177a1 1 0 0 0-.472.049l-1.187.423a1 1 0 0 0-.596.58l-.194.498a1 1 0 0 1-.398.483l-2.267 1.43a1 1 0 0 1-.475.153z\"/>";

export const SaharaDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoSaharaDesert',
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
