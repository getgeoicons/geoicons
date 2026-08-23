// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.97 1.35a.6.6 0 0 0-.462-.1l-.713.138a.6.6 0 0 0-.485.566l-.117 3.071a1 1 0 0 1-.44.79l-1.22.824a1 1 0 0 0-.43.68l-.266 1.764a.6.6 0 0 0 .337.632l2.344 1.11c.297.14.616.232.943.27l2.338.266a1 1 0 0 1 .81.61l.546 1.314a2 2 0 0 0 1.992 1.227l1.237-.09a1 1 0 0 1 1.026.699l.267.85a2 2 0 0 1 .026 1.107l-.28 1.063a1 1 0 0 0 .13.8l1.877 2.879c.39.598 1.09.918 1.798.821a2.77 2.77 0 0 0 1.557-.759l.13-.126c.331-.322.584-.716.737-1.152l.161-.455a2 2 0 0 0 .013-1.295l-.537-1.62a5 5 0 0 0-.82-1.524L17.41 13.1a2 2 0 0 1-.366-.74l-.717-2.785a2 2 0 0 0-1.134-1.334l-1.37-.6a2 2 0 0 1-.82-.661l-1.79-2.48a2 2 0 0 0-.462-.46z\"/>";

export const LcCanaries = /*#__PURE__*/ defineComponent({
  name: 'GeoLcCanaries',
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
