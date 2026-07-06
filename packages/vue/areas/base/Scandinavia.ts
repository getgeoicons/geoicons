// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.468 11.552-2.453 2.313a1 1 0 0 0-.312.778l.127 2.492a.6.6 0 0 0 .348.513l.542.251a.6.6 0 0 0 .592-.05l.72-.494a.6.6 0 0 1 .86.196l1.168 2.037a.956.956 0 0 0 1.783-.552l-.093-1.164a1 1 0 0 1 .29-.787l.474-.475a.6.6 0 0 0 .036-.81l-.432-.514a1 1 0 0 1-.207-.872l.283-1.201a1 1 0 0 1 .291-.503l3.377-3.147a1 1 0 0 0 .298-.933l-.436-2.126a1 1 0 0 1 .103-.682l.882-1.606a1 1 0 0 1 1.316-.416l.606.296a1 1 0 0 0 .887-.003l.047-.024a1 1 0 0 0 .509-1.186l-.068-.224a1 1 0 0 0-.445-.567l-1.227-.73a1 1 0 0 0-.585-.139l-1.553.115a1 1 0 0 0-.437.138l-2.185 1.297a1 1 0 0 0-.19.146l-1.877 1.842a1 1 0 0 0-.17.22L8.978 7.38a1 1 0 0 0-.08.183l-1.165 3.571a1 1 0 0 1-.265.418ZM5.825 21.591l.01-1.008a.837.837 0 0 1 1.594-.347l.039.083a.93.93 0 0 1 .034.708l-.289.81a.715.715 0 0 1-1.388-.246Z\"/>";

export const Scandinavia = /*#__PURE__*/ defineComponent({
  name: 'GeoScandinavia',
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
