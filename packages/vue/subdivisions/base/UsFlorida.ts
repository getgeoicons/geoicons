// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.713 2.898a.6.6 0 0 0-.585-.463H1.863a.6.6 0 0 0-.597.66l.141 1.399a.6.6 0 0 0 .626.54l2.75-.132a1 1 0 0 1 .741.28l1.774 1.71a1 1 0 0 0 1.052.215l2.394-.916a1 1 0 0 1 1.039.202l2.876 2.675a1 1 0 0 1 .306.898l-.386 2.29a2 2 0 0 0 .06.917l.303.987q.134.436.364.834l1.516 2.614c.22.38.5.72.831 1.008l1.036.904a1 1 0 0 1 .285.419l.276.778a1 1 0 0 0 1.177.637l.789-.19a1 1 0 0 0 .746-.777l.772-3.878a1 1 0 0 0-.082-.633l-1.567-3.215a1 1 0 0 1-.09-.588l.16-1.045a1 1 0 0 0-.076-.556l-.91-2.048a11 11 0 0 1-.678-2.045l-.577-2.559a.6.6 0 0 0-.386-.433l-.712-.25a.6.6 0 0 0-.766.368l-.126.362a.6.6 0 0 1-.604.402l-6.946-.423a.6.6 0 0 1-.548-.462z\"/>";

export const UsFlorida = /*#__PURE__*/ defineComponent({
  name: 'GeoUsFlorida',
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
