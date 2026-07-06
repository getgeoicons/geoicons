// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.502 4.868-1.73 3.201a.5.5 0 0 0 .176.663l1.322.817a.5.5 0 0 1 .237.43l-.016 1.707a.5.5 0 0 0 .13.34l.734.81a.5.5 0 0 1 .129.345l-.14 8.13a.5.5 0 0 0 .109.319l.758.955a.5.5 0 0 0 .444.186l2.288-.242a.5.5 0 0 0 .447-.504l-.117-8.469a.5.5 0 0 1 .398-.496l.908-.19a.5.5 0 0 0 .343-.26l2.412-4.707a.5.5 0 0 0-.004-.463l-1.274-2.386a.5.5 0 0 1-.01-.452l.332-.69a.5.5 0 0 0-.12-.59l-2.184-1.93a.5.5 0 0 0-.493-.098l-1.172.4a.5.5 0 0 0-.333.546l.125.861a.5.5 0 0 1-.119.402l-.898 1.024a.5.5 0 0 1-.401.17l-1.816-.091a.5.5 0 0 0-.465.262Z\"/>";

export const Bj = /*#__PURE__*/ defineComponent({
  name: 'GeoBj',
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
