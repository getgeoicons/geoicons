// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.26 19.375-3.594-1.787a.5.5 0 0 0-.279-.05l-2.342.266a.5.5 0 0 1-.556-.497v-.386a.5.5 0 0 1 .383-.486l1.053-.253a.5.5 0 0 0 .337-.696l-.597-1.289a.5.5 0 0 0-.535-.283l-2.47.406a.5.5 0 0 1-.535-.284l-.335-.727a.5.5 0 0 1 .378-.704l2.934-.447a.5.5 0 0 0 .405-.354l.333-1.134a.5.5 0 0 0-.557-.635l-2.489.388a.5.5 0 0 1-.183-.006l-1.07-.231a.25.25 0 0 1-.16-.373l2.633-4.368a.5.5 0 0 1 .756-.119l2.251 1.955a.5.5 0 0 1 .162.275l.447 2.14a.5.5 0 0 0 .804.287l.408-.33a.5.5 0 0 0 .176-.487l-.389-1.959a.5.5 0 0 1 .408-.59l.433-.072a.5.5 0 0 1 .547.309l.457 1.154a.5.5 0 0 0 .931-.004l.507-1.314a.5.5 0 0 1 .486-.32l1.057.04a.5.5 0 0 1 .326.138l.962.918a.5.5 0 0 0 .58.08l1.3-.695a.5.5 0 0 0 .229-.624l-.326-.827a.5.5 0 0 1 .376-.675l.568-.103a.5.5 0 0 1 .552.3l.532 1.284a.25.25 0 0 0 .347.126l2.173-1.133-.75 2.825a.5.5 0 0 0 .247.57l1.923 1.03a.5.5 0 0 1 .26.507l-.428 3.173a.5.5 0 0 1-.226.354l-8.24 5.284a.5.5 0 0 1-.175.07l-2.108.406a.5.5 0 0 1-.317-.043Z\"/>";

export const Is = /*#__PURE__*/ defineComponent({
  name: 'GeoIs',
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
