// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.857 22.516-5.185-6.39a2 2 0 0 0-.57-.481l-2.638-1.49a1 1 0 0 1-.441-1.23L4.732 8.49a3 3 0 0 0 .038-2.052l-.624-1.821a4 4 0 0 1-.206-1.008l-.117-1.617a.6.6 0 0 1 .55-.642l1.495-.12a.6.6 0 0 1 .56.283l1.462 2.37a1.53 1.53 0 0 0 2.036.54l.683-.374a1 1 0 0 1 1.105.097l1.714 1.374a1 1 0 0 0 .847.195l.508-.116a1 1 0 0 1 1.001.349l1.943 2.413q.063.08.143.146l2.999 2.466a.3.3 0 0 1-.096.517l-1.295.431a1 1 0 0 0-.682.895l-.011.212a1 1 0 0 1-.44.776l-.756.511a1 1 0 0 0-.44.86l.035 1.096a1 1 0 0 1-.23.67L12.32 22.52a.3.3 0 0 1-.464-.003Z\"/>";

export const KnSaintJohnCapisterre = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintJohnCapisterre',
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
