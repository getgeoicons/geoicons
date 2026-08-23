// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.424 11.757a2 2 0 0 1 .513 1.287l.011.43A1.51 1.51 0 0 1 5.162 15l-3.169-.589a.6.6 0 0 0-.706.53l-.04.385a.6.6 0 0 0 .39.624l3.45 1.268a.6.6 0 0 0 .514-.047l2.759-1.64a1 1 0 0 1 .815-.094l3.216 1.026a2 2 0 0 1 .948.649l1.366 1.692a1 1 0 0 0 .788.372l1.801-.017a1 1 0 0 1 .574.174l.905.619a1 1 0 0 0 .846.134l2.223-.654a1 1 0 0 0 .678-1.24l-.17-.582a2 2 0 0 0-.444-.788l-.927-1.015a2 2 0 0 0-.918-.571l-4.355-1.266a2 2 0 0 1-.753-.41l-3.907-3.39a2 2 0 0 1-.686-1.624l.161-2.844a1 1 0 0 0-.335-.805l-.973-.863a1 1 0 0 0-.663-.251H6.631a1 1 0 0 0-.637.229L2.722 6.713a.6.6 0 0 0-.064.864z\"/>";

export const NiRioSanJuan = /*#__PURE__*/ defineComponent({
  name: 'GeoNiRioSanJuan',
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
