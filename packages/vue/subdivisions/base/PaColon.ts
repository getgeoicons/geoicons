// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.968 12.414a3 3 0 0 1 1.108-.548l4.25-1.094a3 3 0 0 0 1.129-.565l5.007-4.013a2 2 0 0 1 1.521-.422l5.231.713a.6.6 0 0 1 .518.55l.043.583a.6.6 0 0 1-.242.527l-1.51 1.111a.6.6 0 0 1-.615.058l-2.457-1.179a.6.6 0 0 0-.821.33l-1.084 2.88a1 1 0 0 1-1.35.559l-1.317-.6a.6.6 0 0 0-.81.334l-.512 1.358a1 1 0 0 1-1.049.641l-1.28-.146a1 1 0 0 0-.74.215l-1.199.964a.6.6 0 0 1-.437.13l-1.64-.17a.6.6 0 0 0-.567.276l-1.893 2.977a.3.3 0 0 1-.524-.034l-1.326-2.825a.6.6 0 0 1 .172-.726z\"/>";

export const PaColon = /*#__PURE__*/ defineComponent({
  name: 'GeoPaColon',
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
