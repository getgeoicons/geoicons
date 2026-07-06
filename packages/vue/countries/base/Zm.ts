// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.484 11.675H1.2v5.916a.5.5 0 0 0 .134.34l2.256 2.43a.5.5 0 0 0 .442.154l1.964-.302a.5.5 0 0 1 .203.01l3.886 1.02a.5.5 0 0 0 .51-.164l3.053-3.655a.5.5 0 0 1 .295-.172l2.804-.507-.341-1.312 5.572-1.815-.59-.69a.5.5 0 0 1-.035-.605l1.163-1.725a.5.5 0 0 0 .084-.25l.19-3.121a.5.5 0 0 0-.073-.293l-1.164-1.887a.5.5 0 0 0-.2-.184L17.159 2.75a.5.5 0 0 0-.301-.048l-2.289.352a.5.5 0 0 0-.412.385l-1.123 5.04a.5.5 0 0 0 .096.42l.916 1.15a.5.5 0 0 0 .479.181l.726-.13a.5.5 0 0 1 .587.493v1.546a.5.5 0 0 1-.5.5h-.883a.5.5 0 0 1-.373-.167l-2.916-3.257a.5.5 0 0 0-.652-.081l-.726.49a.5.5 0 0 1-.49.04L4.985 7.676v3.499a.5.5 0 0 1-.5.5Z\"/>";

export const Zm = /*#__PURE__*/ defineComponent({
  name: 'GeoZm',
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
