// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.424 22.528a.6.6 0 0 0 .703-.675l-.313-2.2a1 1 0 0 1 .5-1.013l.417-.234a1 1 0 0 0 .498-1.027l-1.146-7.264a1 1 0 0 1 .648-1.096l1.143-.413a1 1 0 0 0 .462-.342l3.973-5.319a1 1 0 0 0 .197-.534l.004-.07a1 1 0 0 0-.685-1.013l-.642-.212a1 1 0 0 0-.348-.05l-4.806.167a1 1 0 0 0-.183.023L7.613 2.645a.6.6 0 0 0-.449.744l.338 1.231a1 1 0 0 1-.58 1.188l-2.65 1.103a1 1 0 0 0-.538 1.311l1.504 3.572a1 1 0 0 1-.2 1.08l-.867.904a1 1 0 0 0-.226 1.01l1.053 3.14a1 1 0 0 1 .019.573l-.56 2.12a1 1 0 0 0 .083.723l.335.632A1 1 0 0 0 6 22.478l2.824-.706a1 1 0 0 1 .424-.013z\"/>";

export const TtSangreGrande = /*#__PURE__*/ defineComponent({
  name: 'GeoTtSangreGrande',
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
