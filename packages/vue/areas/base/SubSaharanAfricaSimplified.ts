// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.305 21.835-.12-.162a1 1 0 0 1-.117-.206l-.736-1.75a1 1 0 0 1-.069-.25l-.196-1.41a1 1 0 0 0-.093-.305l-.65-1.319a1 1 0 0 1-.047-.774l.405-1.152a1 1 0 0 0 .039-.519l-.266-1.392a1 1 0 0 0-.204-.44l-.648-.804a1 1 0 0 1-.21-.788l.083-.506a1 1 0 0 0-.602-1.083l-.91-.38a1 1 0 0 0-.666-.037l-1.327.389a1 1 0 0 1-.194.036l-1.373.12a1 1 0 0 1-.735-.234l-1.165-.991a1 1 0 0 1-.172-.19l-.95-1.36a1 1 0 0 1-.18-.571L1.2 3.452l1.584-.016.047-1.74 1.081-.024a1 1 0 0 1 .621.2l2.694 2.015a1 1 0 0 0 1.18.013L9.86 2.86a1 1 0 0 1 .565-.187l.562-.01a1 1 0 0 1 .505.127l2.284 1.276.743-1.114 3.096.01 2.28 3.56a1 1 0 0 0 1.061.437l1.844-.416-.08.782a1 1 0 0 1-.165.46l-1.142 1.69a1 1 0 0 1-.181.202l-1.825 1.55a1 1 0 0 0-.345.894l.365 2.737a1 1 0 0 1-.46.98l-.933.582a1 1 0 0 0-.467.921l.063.862a1 1 0 0 1-.155.611l-.66 1.034-1.525 1.789a1 1 0 0 1-.585.336l-1.42.253a1 1 0 0 1-.98-.39Z\"/>";

export const SubSaharanAfricaSimplified = /*#__PURE__*/ defineComponent({
  name: 'GeoSubSaharanAfricaSimplified',
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
