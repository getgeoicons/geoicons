// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.411 9.33a.6.6 0 0 0-.379-.708l-8.001-2.886a1 1 0 0 1-.658-1.01l.15-2.179a.6.6 0 0 0-.468-.627l-2.38-.529a.6.6 0 0 0-.723.68l.391 2.465a1 1 0 0 1-.024.426l-2.224 7.975a1 1 0 0 0 .654 1.22l1.113.36a1 1 0 0 1 .686 1.065l-.074.647a1 1 0 0 1-.584.8l-1.493.668a1 1 0 0 0-.191 1.712l1.025.77a1 1 0 0 0 1.174.02l1.49-1.042a1 1 0 0 0 .419-.703l.107-.916a1 1 0 0 1 .513-.76l.784-.43a1 1 0 0 1 1.462.689l.256 1.331a1 1 0 0 1-.722 1.155l-.312.084a1.5 1.5 0 0 0-.743.465l-.241.278a1.2 1.2 0 0 0 .603 1.95l.953.25a1 1 0 0 0 1.218-.707l.294-1.083a1 1 0 0 1 .49-.619l3.363-1.815a1 1 0 0 1 .63-.108l2.599.409a1 1 0 0 0 1.03-.502l.355-.642a1 1 0 0 0 .093-.743l-.554-2.079c-.08-.301-.23-.58-.438-.813l-1.808-2.035a1 1 0 0 1-.223-.902z\"/>";

export const HnValle = /*#__PURE__*/ defineComponent({
  name: 'GeoHnValle',
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
