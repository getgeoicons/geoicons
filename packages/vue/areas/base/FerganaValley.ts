// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.776 12.865-4.133 1.977a.594.594 0 0 0-.012 1.067l.398.2q.185.094.392.107l1.125.066a1 1 0 0 0 .277-.022l2.365-.525a1 1 0 0 1 .488.013l1.434.404a1 1 0 0 0 .59-.015l1.848-.621a1 1 0 0 1 .328-.053l4.388.04a1 1 0 0 0 .42-.088l1.669-.754q.159-.071.332-.085l2.162-.171a1 1 0 0 0 .272-.061l.942-.353a1 1 0 0 0 .4-.277l1.028-1.17a1 1 0 0 0 .236-.818l-.055-.343a1 1 0 0 0-.317-.584l-2.547-2.3a1 1 0 0 0-.546-.25l-4.135-.515a1 1 0 0 0-.389.028l-2.284.628a1 1 0 0 1-.287.036L11.036 8.4a1 1 0 0 0-.401.074l-.524.215a1 1 0 0 0-.331.221l-3.726 3.757a1 1 0 0 1-.278.197Z\"/>";

export const FerganaValley = /*#__PURE__*/ defineComponent({
  name: 'GeoFerganaValley',
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
