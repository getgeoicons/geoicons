// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.703 15.337 2.163 2.911a1 1 0 0 0 .599.383l1.905.397a1 1 0 0 1 .625.42l1.659 2.465a1 1 0 0 0 1.442.232l3.987-3.088a.6.6 0 0 0-.278-1.068l-1.025-.154a1 1 0 0 1-.844-1.106l.013-.112a1 1 0 0 1 .562-.785l.891-.426a1 1 0 0 0 .513-.57l1.075-3.065a1 1 0 0 1 .398-.506l4.305-2.804a1 1 0 0 0 .316-1.346l-.401-.68a1 1 0 0 0-.845-.492l-2.982-.05a.6.6 0 0 1-.587-.652l.076-.888a1 1 0 0 0-.366-.862l-1.297-1.053a1 1 0 0 0-.384-.193l-3.841-.976a1 1 0 0 0-.542.014l-4.43 1.37a.6.6 0 0 0-.353.854l.45.849a1 1 0 0 1-.383 1.334l-.436.252a1 1 0 0 0-.446.544l-1.683 4.947a1 1 0 0 0-.053.322v2.985a1 1 0 0 0 .197.597Z\"/>";

export const GibsonDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoGibsonDesert',
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
