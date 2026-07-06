// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.724 13.483-3.528 8.249a.5.5 0 0 0 .373.689l1.972.346a.5.5 0 0 0 .348-.066l1.286-.79a.5.5 0 0 0 .217-.281l.412-1.365a.5.5 0 0 1 .181-.257l4.86-3.596a.5.5 0 0 0-.014-.814l-.776-.534a.5.5 0 0 1-.115-.714l.956-1.262a.5.5 0 0 1 .471-.193l2.964.434a.5.5 0 0 0 .488-.218l.25-.373a.5.5 0 0 0-.215-.735l-1.385-.61 3.378-3.138a.5.5 0 0 0 .15-.465l-.514-2.56a.5.5 0 0 0-.277-.354l-1.607-.756a.5.5 0 0 1-.122-.824l.667-.601a.5.5 0 0 0-.076-.799l-.815-.494a.5.5 0 0 0-.61.07l-.494.488a.5.5 0 0 1-.382.142l-2.125-.133a.5.5 0 0 0-.53.526l.05.944a.5.5 0 0 1-.172.404L9.833 6.584a.5.5 0 0 0-.167.306l-.591 4.06a.5.5 0 0 1-.379.414l-.648.155a.5.5 0 0 0-.382.527l.097 1.2a.5.5 0 0 1-.039.237Z\"/>";

export const Lb = /*#__PURE__*/ defineComponent({
  name: 'GeoLb',
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
