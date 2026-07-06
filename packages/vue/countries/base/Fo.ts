// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.147 3.629v1.454a1 1 0 0 1-1.18.984l-.382-.07a.748.748 0 0 0-.65 1.278l1.65 1.566a1 1 0 0 0 1.218.122l.644-.402a1 1 0 0 1 1.226.13l1.815 1.76a.726.726 0 0 0 1.158-.842l-.295-.6a1 1 0 0 1 .064-.994l.88-1.327a1 1 0 0 1 .545-.405l.943-.284a1 1 0 0 0 .54-.399l1.653-2.451a.814.814 0 0 0-1.06-1.173l-.358.192a1 1 0 0 1-1.226-.224l-.251-.287a1 1 0 0 0-.988-.315l-.855.205a1 1 0 0 0-.73.707l-.065.236a.75.75 0 0 1-1.23.353l-.334-.306a1 1 0 0 0-.994-.21l-1.056.354a1 1 0 0 0-.682.948Zm4.515 11.169-1.19-.945a1 1 0 0 1-.27-.33l-.426-.838a.582.582 0 0 1 .814-.765l1.795 1.057a1 1 0 0 1 .493.862v.371a.75.75 0 0 1-1.216.587Zm-1.014 6.026-1.204-2.716a.853.853 0 0 1 1.403-.929l1.214 1.299a1 1 0 0 1 .22.372l.975 2.987a.638.638 0 0 1-1.06.646L11.85 21.12a1 1 0 0 1-.202-.297Z\"/>";

export const Fo = /*#__PURE__*/ defineComponent({
  name: 'GeoFo',
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
