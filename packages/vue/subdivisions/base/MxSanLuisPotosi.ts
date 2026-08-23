// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.06 19.921c.34.173.71.28 1.089.314l.65.06a1 1 0 0 0 .81-.3l1.03-1.065a.55.55 0 0 1 .944.36l.044 1.128a1 1 0 0 0 .482.817l.74.447a1 1 0 0 0 1.128-.065l.566-.437a1 1 0 0 0 .357-1.042l-.218-.839a2 2 0 0 1 .078-1.241l.75-1.887a.8.8 0 0 0-.432-1.033l-.864-.365a3 3 0 0 0-.999-.232l-1.846-.104a1 1 0 0 1-.753-.412l-.702-.97a1 1 0 0 0-.692-.406l-2.275-.271a.8.8 0 0 1-.705-.818l.035-1.14a.8.8 0 0 0-.832-.824l-.697.029a.8.8 0 0 1-.83-.739l-.447-5.851a1 1 0 0 0-1.144-.913L8.6 2.23a1 1 0 0 0-.609.335l-.876 1.013a.8.8 0 0 0-.195.551l.038 1.095a.8.8 0 0 1-.276.632L4.363 7.87a2 2 0 0 1-.957.458l-1.45.26a.8.8 0 0 0-.652.897l.244 1.781a2 2 0 0 0 .55 1.125l1.113 1.141a.8.8 0 0 0 1.05.083l.693-.516a1 1 0 0 1 1.514.4l.078.18a1 1 0 0 1 .052.652l-.787 3.037a.6.6 0 0 0 .372.712l3.436 1.277a1 1 0 0 0 .747-.02l.94-.409a1 1 0 0 1 .852.026z\"/>";

export const MxSanLuisPotosi = /*#__PURE__*/ defineComponent({
  name: 'GeoMxSanLuisPotosi',
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
