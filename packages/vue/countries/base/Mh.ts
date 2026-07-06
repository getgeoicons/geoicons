// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m17.148 19.208-1.374 2.727a.982.982 0 1 1-1.745-.903l1.279-2.411-2.634-4.627-3.13.776a.906.906 0 1 1-.431-1.76l3.484-.845a1.25 1.25 0 0 1 1.368.575l3.14 5.265c.219.367.235.82.043 1.203Zm-6.542-9.149-1.992-.695a.892.892 0 1 1 .637-1.665l1.434.597c.197.082.411.113.624.088l1.246-.144a.888.888 0 1 1 .166 1.768l-1.613.117a1.25 1.25 0 0 1-.502-.066Zm5.922-1.337 1.05-1.611a.908.908 0 1 1 1.487 1.04l-.674.898a1.25 1.25 0 0 0-.25.77l.046 2.805.91.11c.492.06.902.404 1.046.878l.806 2.66h.756a.895.895 0 1 1-.027 1.79l-1.506-.047a1 1 0 0 1-.932-.73l-.696-2.49a.5.5 0 0 0-.456-.365l-.5-.026a1.25 1.25 0 0 1-1.186-1.223l-.077-3.75a1.25 1.25 0 0 1 .203-.709Zm-1.586-5.228-.212-.267a.968.968 0 0 1 1.495-1.23l.221.26a.974.974 0 1 1-1.504 1.237ZM3.51 8.2l.056.066a1.003 1.003 0 0 1-1.513 1.317l-.057-.065A1.004 1.004 0 1 1 3.51 8.2Zm1.163 11.614.116.116a.983.983 0 1 1-1.415 1.365l-.112-.12a.98.98 0 0 1 1.41-1.361Z\"/>";

export const Mh = /*#__PURE__*/ defineComponent({
  name: 'GeoMh',
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
