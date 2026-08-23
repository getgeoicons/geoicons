// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.298 1.432a2 2 0 0 0-.938-.23l-6.103.023a.6.6 0 0 0-.598.586l-.068 3.044a1 1 0 0 1-.802.958l-2.428.489a1 1 0 0 0-.785 1.166l.066.351a1 1 0 0 0 .567.724l.734.335a1 1 0 0 1 .58.819l.162 1.782a1 1 0 0 0 .656.85l1.146.413a1 1 0 0 1 .66.934l.016 2.031a1 1 0 0 1-.474.858l-3.166 1.958a2 2 0 0 0-.858 1.108l-.195.626a2 2 0 0 0-.05.994l.098.474a1 1 0 0 0 1.27.757L10 20.9a1 1 0 0 0 .71-.956l.004-3.143a1 1 0 0 1 .348-.757l4.667-4.013a2 2 0 0 0 .456-.566l1.198-2.22a2 2 0 0 1 .894-.853l1.358-.653a1 1 0 0 0 .395-1.462l-2.204-3.25a2 2 0 0 0-.724-.647z\"/>";

export const HnIntibuca = /*#__PURE__*/ defineComponent({
  name: 'GeoHnIntibuca',
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
