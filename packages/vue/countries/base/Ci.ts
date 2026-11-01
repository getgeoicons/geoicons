// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.273 21.83.21-3.52a1 1 0 0 0-.493-.924l-2.531-1.478a1 1 0 0 1-.485-1.015l.345-2.249a1 1 0 0 1 .294-.568l.831-.802a.6.6 0 0 0-.137-.962l-.324-.171a.6.6 0 0 1-.276-.76l.122-.295a.6.6 0 0 1 .506-.37l.765-.063a.6.6 0 0 0 .513-.808L3.278 4.278a1 1 0 0 1 .339-1.152l.775-.58a1 1 0 0 1 1.005-.112l.946.421a.8.8 0 0 0 1-.3l.46-.723a1 1 0 0 1 .722-.455l.797-.098a.6.6 0 0 1 .673.565l.018.372a.6.6 0 0 0 .756.55l1.158-.313a1 1 0 0 1 1.12.455l.676 1.137a2 2 0 0 0 1.175.903l.562.16a1 1 0 0 0 .869-.16l.736-.548a2 2 0 0 1 1.167-.394l.78-.01a2 2 0 0 1 1.387.535l.829.77a1 1 0 0 1 .308.583l.542 3.599a1 1 0 0 1-.114.633l-2.238 4.044a2 2 0 0 0-.21 1.364l.463 2.291a.6.6 0 0 0 .422.458l.668.192a.6.6 0 0 1 .434.55l.035.793a.6.6 0 0 1-.697.62l-3.683-.611a2 2 0 0 0-.546-.015l-5.623.617a2 2 0 0 0-.57.15l-4.311 1.848a.6.6 0 0 1-.835-.587Z\"/>";

export const Ci = /*#__PURE__*/ defineComponent({
  name: 'GeoCi',
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
