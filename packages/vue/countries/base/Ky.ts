// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.942 15.08-.963 1.184a.5.5 0 0 1-.285.174l-1.657.348a.5.5 0 0 1-.207 0l-3.365-.717a.5.5 0 0 0-.239.008l-2.202.615a.5.5 0 0 1-.591-.28l-.344-.779a.5.5 0 0 1 .011-.429l.545-1.068a.5.5 0 0 0 .042-.336l-.256-1.146a.5.5 0 0 1-.012-.093l-.055-1.771a.5.5 0 0 0-.136-.327l-.39-.415a.5.5 0 0 0-.19-.126l-1.007-.377a.5.5 0 0 1-.303-.615l.198-.644a.5.5 0 0 1 .278-.312l1.535-.67a.5.5 0 0 1 .489.05L5.524 8.55l-.899.83.872 1.324a.5.5 0 0 1 .068.394l-.311 1.274a.5.5 0 0 0 .093.429l.847 1.073a.5.5 0 0 0 .393.19h1.66a.5.5 0 0 0 .495-.429l.163-1.145a.5.5 0 0 1 .495-.43h.886a.5.5 0 0 0 .5-.5V9.124l2.176 1.495a.5.5 0 0 0 .51.033l1.216-.62a.5.5 0 0 1 .289-.05l2.313.29h4.069a.46.46 0 0 1 .259.078c.239.162.774.557.968.963.274.575.266 1.018.084 1.628-.134.451-.29.696-.617 1.035-.26.27-.747.525-.943.621a.5.5 0 0 1-.179.046l-2.81.156a.5.5 0 0 1-.25-.05l-.999-.494a.5.5 0 0 0-.323-.04l-3.321.691a.5.5 0 0 0-.286.174Z\"/>";

export const Ky = /*#__PURE__*/ defineComponent({
  name: 'GeoKy',
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
