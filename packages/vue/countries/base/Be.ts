// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.705 9.192-.417-1.736a.5.5 0 0 1 .238-.55l3.591-2.053a.5.5 0 0 1 .391-.045l3.335.993a.5.5 0 0 0 .482-.112l1.94-1.794a.5.5 0 0 1 .311-.132l3.154-.18a.5.5 0 0 1 .453.236l.823 1.328a.5.5 0 0 0 .255.206l2.52.914a.5.5 0 0 1 .302.633l-.764 2.222a.5.5 0 0 0 .362.65l1.797.408a.5.5 0 0 1 .252.143l1.814 1.9a.5.5 0 0 1 .075.59l-1.164 2.07a.5.5 0 0 1-.597.228l-.466-.16a.5.5 0 0 0-.603.239L18.824 17a.5.5 0 0 0-.035.386l.66 2.085a.5.5 0 0 1-.393.644l-1.67.283a.5.5 0 0 1-.39-.098l-2.807-2.173a.5.5 0 0 1-.187-.474l.343-2.146a.5.5 0 0 0-.22-.497l-.163-.107a.5.5 0 0 0-.695.148l-.8 1.245a.5.5 0 0 1-.387.228l-1.517.105a.5.5 0 0 1-.534-.512l.051-1.971a.5.5 0 0 0-.494-.513l-1.577-.019a.5.5 0 0 1-.467-.34l-.26-.766a.5.5 0 0 0-.418-.336l-1.191-.135a.5.5 0 0 1-.422-.35l-.46-1.491a.5.5 0 0 0-.688-.307l-.764.353a.5.5 0 0 1-.513-.056l-.938-.713a.5.5 0 0 1-.183-.282Z\"/>";

export const Be = /*#__PURE__*/ defineComponent({
  name: 'GeoBe',
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
