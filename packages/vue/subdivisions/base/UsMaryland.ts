// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.025 17.056a1 1 0 0 0 .57-.481l.746-1.407a.6.6 0 0 0-.521-.88l-1.541-.024a.6.6 0 0 1-.59-.565l-.424-7.116a.3.3 0 0 0-.3-.282l-17.47.073a.3.3 0 0 0-.299.296l-.037 2.69a.3.3 0 0 0 .432.274L3.812 8.55a4 4 0 0 1 1.478-.396l3.159-.218a1 1 0 0 1 .722.24l3.734 3.216a.6.6 0 0 1 .118.772l-.775 1.245a1 1 0 0 0 .327 1.38l3.268 2.003a.493.493 0 0 0 .733-.547l-.86-3.213a4 4 0 0 1-.133-1.17l.076-2.212a.855.855 0 0 1 1.707-.045l.419 4.773c.028.326.11.645.242.945l.68 1.546a1 1 0 0 0 1.228.547z\"/>";

export const UsMaryland = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMaryland',
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
