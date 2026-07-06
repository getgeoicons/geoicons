// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.64 10.504-.973-.508a1 1 0 0 1-.355-.312L7.726 7.428a1 1 0 0 1-.182-.555l-.025-1.247a1 1 0 0 1 .225-.654l.405-.494a1 1 0 0 0 .224-.684l-.045-.899a1 1 0 0 1 .53-.935l1.054-.557a1 1 0 0 1 .792-.063l.78.268a1 1 0 0 0 .374.053l1.42-.07a1 1 0 0 1 .635.188l.39.282a.6.6 0 0 1 .245.557l-.08.675a.6.6 0 0 1-.209.388l-.793.669a1 1 0 0 1-.586.234l-1.146.066a.6.6 0 0 0-.564.574l-.026.604a.6.6 0 0 1-.227.444l-.523.415a.6.6 0 0 0-.082.862l.547.634a.6.6 0 0 0 .664.17l.84-.314a.6.6 0 0 1 .636.139l1.953 1.962a1 1 0 0 1 .197.282l.852 1.82a1 1 0 0 1-.08.988l-.437.64a.6.6 0 0 0 .066.756l.51.525a.6.6 0 0 1-.023.86l-2.07 1.911a1 1 0 0 0-.228.314l-.884 1.908a1 1 0 0 0 .143 1.065l.363.43a.6.6 0 0 1-.295.964l-.492.14a.6.6 0 0 1-.396-.024l-.651-.273a1 1 0 0 1-.53-.524l-.334-.767a1 1 0 0 1-.082-.453l.198-3.604a1 1 0 0 1 .03-.197l.335-1.288a1 1 0 0 0 .032-.252v-3.97a1 1 0 0 0-.537-.887Z\"/>";

export const HispanicSouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoHispanicSouthAmerica',
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
