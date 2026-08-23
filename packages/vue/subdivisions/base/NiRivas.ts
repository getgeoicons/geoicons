// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.227 16.224a4 4 0 0 0-1.031-.311l-1.952-.312a4 4 0 0 1-1.39-.498l-3.21-1.88a5 5 0 0 1-1.01-.78l-.912-.912a5 5 0 0 1-1.058-1.56l-.381-.887-.802-1.537a5 5 0 0 1-.448-1.228l-.193-.87a.82.82 0 0 0-1.28-.489L4.38 6.525a1 1 0 0 1-.589.187l-.846-.005a1 1 0 0 0-.845.457l-.632.978a1 1 0 0 0-.102.879l.159.446a1 1 0 0 0 .333.457l5.024 3.86a3 3 0 0 1 .813.954l1.19 2.204a2 2 0 0 0 .822.816l1.214.645a.6.6 0 0 0 .802-.232L12.963 16a.3.3 0 0 1 .388-.123l3.393 1.598c.225.106.467.169.714.186l1.214.084a2 2 0 0 1 .666.165l2.95 1.296a.3.3 0 0 0 .42-.257l.08-1.343a.3.3 0 0 0-.175-.291z\"/>";

export const NiRivas = /*#__PURE__*/ defineComponent({
  name: 'GeoNiRivas',
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
