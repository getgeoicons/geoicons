// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.413 2.605a1 1 0 0 0-.258.537l-.48 3.225a1 1 0 0 1-.332.607l-3.6 3.136a1 1 0 0 1-.819.233l-.835-.138a1 1 0 0 0-.738.169l-1.293.91a.6.6 0 0 0-.254.518l.031.68a.6.6 0 0 0 .86.513l1.088-.523a1 1 0 0 1 .673-.07l.704.174a1 1 0 0 1 .585.405l1.395 2.034a1 1 0 0 1 .168.681l-.444 3.82a1 1 0 0 1-.434.714l-1.553 1.047a.6.6 0 0 0-.264.524l.006.14a.6.6 0 0 0 .733.56l1.071-.244a1 1 0 0 1 .323-.02l4.944.5a.6.6 0 0 0 .659-.557l.208-3.156a1 1 0 0 0-.641-1l-.753-.288a1 1 0 0 1-.643-.912l-.082-3.733a1 1 0 0 1 .31-.746l1.256-1.196a1 1 0 0 1 .681-.276l.815-.008a1 1 0 0 0 .962-.758l.591-2.379a1 1 0 0 1 .451-.613l1.016-.618a1 1 0 0 1 .885-.076l1.163.456a1 1 0 0 0 1.352-.767l.17-1.027a1 1 0 0 0-.545-1.06l-4.973-2.447a1 1 0 0 0-.331-.097l-2.015-.224a1 1 0 0 0-.84.311z\"/>";

export const DoLaEstrelleta = /*#__PURE__*/ defineComponent({
  name: 'GeoDoLaEstrelleta',
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
