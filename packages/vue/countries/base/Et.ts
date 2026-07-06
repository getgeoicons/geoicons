// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.396 13.227-.11.443a.5.5 0 0 0 .208.538l2.41 1.6a.5.5 0 0 1 .169.19l1.132 2.24a.5.5 0 0 0 .338.263l1.158.257a.5.5 0 0 1 .188.085l1.581 1.162a.5.5 0 0 0 .227.092l1.855.258a.5.5 0 0 0 .367-.093l1.352-1.003a.5.5 0 0 1 .432-.08l1.246.347a.5.5 0 0 0 .386-.05l1.972-1.155a.5.5 0 0 1 .24-.068l1.768-.047a.5.5 0 0 0 .345-.15l3.604-3.698a.5.5 0 0 0-.183-.818l-5.756-2.147a.5.5 0 0 1-.317-.378l-.23-1.252a.5.5 0 0 0-.516-.409l-.784.039a.5.5 0 0 1-.521-.438l-.058-.463a.5.5 0 0 1 .078-.335l.574-.88a.5.5 0 0 0-.08-.641L11.87 4.239a.5.5 0 0 0-.267-.127l-3.26-.476a.5.5 0 0 0-.256.03l-1.544.61a.5.5 0 0 0-.303.353l-.433 1.864a.5.5 0 0 1-.096.2L3.327 9.67a.5.5 0 0 0-.108.272l-.193 2.353a.5.5 0 0 1-.434.455l-.776.102a.5.5 0 0 0-.42.374Z\"/>";

export const Et = /*#__PURE__*/ defineComponent({
  name: 'GeoEt',
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
