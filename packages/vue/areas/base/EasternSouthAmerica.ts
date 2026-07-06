// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.752 22.758-1.462-.181a.6.6 0 0 1-.515-.712l.314-1.585a1 1 0 0 1 .293-.532l1.512-1.434a.6.6 0 0 0 .14-.668l-1.48-3.51a1 1 0 0 0-.195-.298l-2.968-3.144a.6.6 0 0 0-.565-.174l-2.314.507a1 1 0 0 1-.995-.353l-.754-.945a1 1 0 0 1 .292-1.496L4.08 7.66a1 1 0 0 0 .51-.845l.046-1.685a.6.6 0 0 1 .515-.578l2.32-.334a1 1 0 0 0 .73-.502L9.332 1.69a.6.6 0 0 1 .78-.25l3.6 1.696a1 1 0 0 1 .524.595l.377 1.158a1 1 0 0 0 .565.614l5.864 2.45a1 1 0 0 1 .557.587l.259.726a1 1 0 0 1 .01.641l-.106.33a1 1 0 0 1-.293.447l-1.7 1.492a1 1 0 0 0-.338.703l-.064 1.332a1 1 0 0 1-.144.47l-1.064 1.759a1 1 0 0 1-.691.468l-1.59.265a1 1 0 0 0-.784.669l-.602 1.797a1 1 0 0 1-.161.298l-2.032 2.597a.6.6 0 0 1-.547.225Z\"/>";

export const EasternSouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoEasternSouthAmerica',
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
