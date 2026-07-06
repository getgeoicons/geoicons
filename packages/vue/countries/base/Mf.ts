// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.907 7.3-.607.326a.727.727 0 0 0 .546 1.339l1.088-.315a.768.768 0 0 0-.291-1.501l-.364.037a1 1 0 0 0-.372.114Zm-6.254.183-1.039.395a1 1 0 0 0-.639.826l-.063.58a1 1 0 0 1-.507.765l-.264.148a.84.84 0 0 1-.803.007.84.84 0 0 0-1.083.262l-.675.972a1 1 0 0 0-.113.925l.11.292a1 1 0 0 1-.024.77l-.16.353a1 1 0 0 1-.336.405l-.648.454a1 1 0 0 1-.905.126l-.888-.311a.78.78 0 0 1-.505-.57.78.78 0 0 0-1.227-.46l-.258.191a.99.99 0 0 1-.926.136l-.636-.232a1 1 0 0 0-1.173.384l-.244.364a.75.75 0 0 0 .25 1.068l1.178.676a1 1 0 0 0 .498.133h2.695a1 1 0 0 1 .313.05l1.996.657a1 1 0 0 0 .715-.035l.997-.44a1 1 0 0 0 .355-.262l.85-.988a1 1 0 0 1 .623-.339l.531-.073a1 1 0 0 1 .645.13l1.163.686c.13.076.275.123.425.135l2.65.223a.25.25 0 0 0 .24-.368l-.682-1.26a1 1 0 0 1 .047-1.03l.46-.691a.5.5 0 0 0-.163-.709l-.51-.298a1 1 0 0 1-.411-.46l-.24-.542a.5.5 0 0 1 .264-.664l1.27-.531-.746-1.302a1 1 0 0 0-.774-.498l-1.184-.111a1 1 0 0 0-.449.06Z\"/>";

export const Mf = /*#__PURE__*/ defineComponent({
  name: 'GeoMf',
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
