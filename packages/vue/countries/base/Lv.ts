// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.433 12.244-.18 3.283a.5.5 0 0 0 .771.447l2.28-1.473a.5.5 0 0 1 .332-.076l6.344.788a.5.5 0 0 0 .342-.082l1.028-.694a.5.5 0 0 1 .687.125l.7.986a.5.5 0 0 0 .233.178l1.37.512q.106.04.183.12l1.946 1.996a.5.5 0 0 0 .684.03l.896-.772a.5.5 0 0 1 .409-.114l.925.154a.5.5 0 0 0 .456-.162l1.727-1.95a.5.5 0 0 0 .063-.573l-1.551-2.799a.5.5 0 0 1-.04-.393l.579-1.831a.5.5 0 0 0-.06-.426l-.748-1.137a.5.5 0 0 0-.316-.215l-1.551-.323a.5.5 0 0 0-.296.028l-.807.339a.5.5 0 0 1-.514-.078l-3.154-2.634a.5.5 0 0 0-.5-.083l-2.255.865a.5.5 0 0 0-.317.533l.354 2.67a.5.5 0 0 1-.129.406l-1.168 1.26a.5.5 0 0 1-.444.155l-1.42-.223a.5.5 0 0 1-.413-.392l-.246-1.175a.5.5 0 0 0-.203-.308l-.945-.658a.5.5 0 0 1-.214-.388l-.068-1.5-2.6 1.394a.5.5 0 0 0-.21.215l-1.908 3.777a.5.5 0 0 0-.052.198Z\"/>";

export const Lv = /*#__PURE__*/ defineComponent({
  name: 'GeoLv',
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
