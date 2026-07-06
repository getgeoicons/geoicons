// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.17 20.199 2.378 2.601-1.138-6.082a1 1 0 0 0-.065-.214L9.94 10.95a1 1 0 0 1-.082-.368l-.026-.873a1 1 0 0 1 1.022-1.029l.045.001a1 1 0 0 1 .973.902l.259 2.645a1 1 0 0 0 .098.345l1.098 2.225a.57.57 0 0 0 1.082-.222l.087-1.608a1 1 0 0 1 .06-.292l.4-1.083a1 1 0 0 0 .06-.395l-.044-.9a1 1 0 0 0-.18-.524l-.763-1.094a1 1 0 0 1 .263-1.402l1.797-1.207a.6.6 0 0 0 .006-.992l-1.172-.81a1 1 0 0 1-.332-.388l-.444-.918a1 1 0 0 0-.447-.457l-1.598-.813a1 1 0 0 0-1.38.516l-.186.46a1 1 0 0 1-.956.625l-.895-.025a1 1 0 0 0-.961 1.36l.61 1.573a1 1 0 0 1 .057.218l.22 1.515a.99.99 0 0 1-.675 1.083l-.073.023a.862.862 0 0 0-.331 1.442l.924.887a1 1 0 0 1 .238.354l.128.324a1 1 0 0 1-.518 1.278l-1.124.509 1.989 2.415a1 1 0 0 0 .146.145l1.312 1.052a1 1 0 0 1 .371.855l-.086 1.146a1 1 0 0 0 .259.75Z\"/>";

export const SonoranDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoSonoranDesert',
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
