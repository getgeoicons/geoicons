// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.553 20.984.882-.394a.6.6 0 0 0 .344-.43l.472-2.362a1 1 0 0 0-.274-.903l-.69-.69a1 1 0 0 1-.291-.745l.013-.336a1 1 0 0 1 1.012-.961l1.008.013a.68.68 0 0 0 .343-1.274l-.183-.103a10.7 10.7 0 0 1-2.717-2.18l-.755-.842a11 11 0 0 1-1.65-2.425l-1.054-2.109a.6.6 0 0 0-.8-.271l-.933.454a2 2 0 0 1-1.763-.008L9.591 3.967a1 1 0 0 0-.913.012l-.765.406a1 1 0 0 1-.87.033L3.53 2.878a.6.6 0 0 0-.7.161L1.636 4.451a.6.6 0 0 0 .124.887l.477.319A1 1 0 0 1 2.5 7.062l-.507.725a2 2 0 0 0-.142 2.059l.303.59a2 2 0 0 0 1.212 1.005l.812.241a2 2 0 0 1 1.016.697l.67.87a.6.6 0 0 0 .977-.036l.374-.567a.6.6 0 0 0-.078-.757l-1.65-1.635a.75.75 0 0 1 .949-1.153l1.893 1.282a2 2 0 0 1 .848 1.31l.188 1.066a1 1 0 0 0 .665.775l1.5.506q.523.177 1.005.446l2.13 1.189a1.812 1.812 0 0 1 .56 2.678l-.086.114a1 1 0 0 0 .312 1.48l.736.407a.6.6 0 0 0 .89-.507l.013-.416a.6.6 0 0 1 .626-.582l.243.01a.6.6 0 0 1 .566.503l.19 1.17a.6.6 0 0 0 .838.452Z\"/>";

export const Cr = /*#__PURE__*/ defineComponent({
  name: 'GeoCr',
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
